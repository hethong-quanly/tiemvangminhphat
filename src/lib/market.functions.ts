import { createServerFn } from "@tanstack/react-start";

export type SpotPayload = {
  usdOz: number;
  vndPerGram: number;
  silverUsdOz: number;
  ratio: number;
  fx: number;
  updatedAt: string;
};

export type DailyPoint = { t: number; c: number };
export type IntraPoint = { t: number; p: number };

export type Headline = {
  title: string;
  link: string;
  source: string;
  publishedAt: string;
  summary: string;
};

export type MarketPayload = {
  spot: SpotPayload | null;
  daily: DailyPoint[];
  intraday: IntraPoint[];
  headlines: Headline[];
  fetchedAt: string;
  notice: string | null;
};

const CACHE_MS = 60_000;
let cache: { at: number; data: MarketPayload } | null = null;

function strip(value: string) {
  return value
    .replace(/<!\[CDATA\[|\]\]>/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&/g, "&")
    .replace(/"/g, '"')
    .replace(/&#39;|'/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function parseRss(xml: string, source: string): Headline[] {
  const items = xml.split("<item>").slice(1, 40);
  const out: Headline[] = [];
  for (const item of items) {
    const title = strip(item.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "");
    const link = strip(item.match(/<link>([\s\S]*?)<\/link>/)?.[1] ?? "");
    const publishedAt = strip(item.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1] ?? "");
    const summary = strip(item.match(/<description>([\s\S]*?)<\/description>/)?.[1] ?? "").slice(0, 240);
    if (!title || !link) continue;
    if (!/vàng|bạc|kim cương|sjc|trang sức|vàng miếng|vàng nhẫn/i.test(`${title} ${summary}`)) continue;
    out.push({ title, link, source, publishedAt, summary });
  }
  return out;
}

async function readText(url: string) {
  const response = await fetch(url, {
    headers: {
      accept: "application/rss+xml, application/xml, text/xml, */*",
      "user-agent": "MinhPhatCanTho/1.0",
    },
  });
  if (!response.ok) throw new Error(`RSS ${response.status}`);
  return response.text();
}

async function readJson<T>(url: string): Promise<T> {
  const response = await fetch(url, { headers: { accept: "application/json" } });
  if (!response.ok) throw new Error(`Giá ${response.status}`);
  return (await response.json()) as T;
}

export const getMarket = createServerFn({ method: "GET" }).handler(async (): Promise<MarketPayload> => {
  if (cache && Date.now() - cache.at < CACHE_MS) return cache.data;

  const fetchedAt = new Date().toISOString();
  const notices: string[] = [];

  const [spotResult, chartResult, intraResult, bizResult, worldResult] = await Promise.allSettled([
    readJson<{
      spot_usd_oz?: number;
      xau?: { price?: number };
      silver_usd_oz?: number;
      gold_silver_ratio?: number;
      fx_rate?: number;
      updated_at?: string;
      data_state?: { as_of?: string };
    }>("https://xaus.com/api/v1/spot?currency=VND&unit=gram"),
    readJson<{ points?: { t: number; c: number }[] }>(
      "https://xaus.com/api/v1/chart?symbol=xau&range=6m&interval=1d",
    ),
    readJson<{ points?: { t: number; p: number }[] }>(
      "https://xaus.com/api/v1/intraday?symbol=xau&hours=24",
    ),
    readText("https://vnexpress.net/rss/kinh-doanh.rss"),
    readText("https://vnexpress.net/rss/the-gioi.rss"),
  ]);

  let spot: SpotPayload | null = null;
  if (spotResult.status === "fulfilled") {
    const raw = spotResult.value;
    const usdOz = Number(raw.spot_usd_oz);
    const vndPerGram = Number(raw.xau?.price);
    const silverUsdOz = Number(raw.silver_usd_oz);
    const fx = Number(raw.fx_rate);
    if (usdOz > 0 && vndPerGram > 0 && silverUsdOz > 0 && fx > 0) {
      spot = {
        usdOz,
        vndPerGram,
        silverUsdOz,
        ratio: Number(raw.gold_silver_ratio) || usdOz / silverUsdOz,
        fx,
        updatedAt: raw.updated_at || raw.data_state?.as_of || fetchedAt,
      };
    } else {
      notices.push("Nguồn giá trả về thiếu số liệu.");
    }
  } else {
    notices.push("Chưa nối được giá thế giới. Vui lòng gọi quầy để chốt giá.");
  }

  const daily =
    chartResult.status === "fulfilled"
      ? (chartResult.value.points ?? []).filter((point) => point.c > 0).slice(-120)
      : [];
  const intraday =
    intraResult.status === "fulfilled"
      ? (intraResult.value.points ?? []).filter((point) => point.p > 0)
      : [];

  const headlines: Headline[] = [];
  if (bizResult.status === "fulfilled") headlines.push(...parseRss(bizResult.value, "VnExpress"));
  if (worldResult.status === "fulfilled") headlines.push(...parseRss(worldResult.value, "VnExpress Thế giới"));
  const seen = new Set<string>();
  const unique = headlines.filter((item) => {
    if (seen.has(item.title)) return false;
    seen.add(item.title);
    return true;
  });

  const data: MarketPayload = {
    spot,
    daily,
    intraday,
    headlines: unique.slice(0, 8),
    fetchedAt,
    notice: notices[0] ?? null,
  };
  cache = { at: Date.now(), data };
  return data;
});
