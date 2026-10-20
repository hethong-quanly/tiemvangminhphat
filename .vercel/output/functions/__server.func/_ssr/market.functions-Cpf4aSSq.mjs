import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/market.functions-Cpf4aSSq.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var CACHE_MS = 6e4;
var cache = null;
function strip(value) {
	return value.replace(/<!\[CDATA\[|\]\]>/g, "").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/&/g, "&").replace(/"/g, "\"").replace(/&#39;|'/g, "'").replace(/\s+/g, " ").trim();
}
function parseRss(xml, source) {
	const items = xml.split("<item>").slice(1, 40);
	const out = [];
	for (const item of items) {
		const title = strip(item.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "");
		const link = strip(item.match(/<link>([\s\S]*?)<\/link>/)?.[1] ?? "");
		const publishedAt = strip(item.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1] ?? "");
		const summary = strip(item.match(/<description>([\s\S]*?)<\/description>/)?.[1] ?? "").slice(0, 240);
		if (!title || !link) continue;
		if (!/vàng|bạc|kim cương|sjc|trang sức|vàng miếng|vàng nhẫn/i.test(`${title} ${summary}`)) continue;
		out.push({
			title,
			link,
			source,
			publishedAt,
			summary
		});
	}
	return out;
}
async function readText(url) {
	const response = await fetch(url, { headers: {
		accept: "application/rss+xml, application/xml, text/xml, */*",
		"user-agent": "MinhPhatCanTho/1.0"
	} });
	if (!response.ok) throw new Error(`RSS ${response.status}`);
	return response.text();
}
async function readJson(url) {
	const response = await fetch(url, { headers: { accept: "application/json" } });
	if (!response.ok) throw new Error(`Giá ${response.status}`);
	return await response.json();
}
var getMarket_createServerFn_handler = createServerRpc({
	id: "6fdfbdff8b779cdd80db4492138674f9ab3498f6077332c5892ed94e3f737172",
	name: "getMarket",
	filename: "src/lib/market.functions.ts"
}, (opts) => getMarket.__executeServer(opts));
var getMarket = createServerFn({ method: "GET" }).handler(getMarket_createServerFn_handler, async () => {
	if (cache && Date.now() - cache.at < CACHE_MS) return cache.data;
	const fetchedAt = (/* @__PURE__ */ new Date()).toISOString();
	const notices = [];
	const [spotResult, chartResult, intraResult, bizResult, worldResult] = await Promise.allSettled([
		readJson("https://xaus.com/api/v1/spot?currency=VND&unit=gram"),
		readJson("https://xaus.com/api/v1/chart?symbol=xau&range=6m&interval=1d"),
		readJson("https://xaus.com/api/v1/intraday?symbol=xau&hours=24"),
		readText("https://vnexpress.net/rss/kinh-doanh.rss"),
		readText("https://vnexpress.net/rss/the-gioi.rss")
	]);
	let spot = null;
	if (spotResult.status === "fulfilled") {
		const raw = spotResult.value;
		const usdOz = Number(raw.spot_usd_oz);
		const vndPerGram = Number(raw.xau?.price);
		const silverUsdOz = Number(raw.silver_usd_oz);
		const fx = Number(raw.fx_rate);
		if (usdOz > 0 && vndPerGram > 0 && silverUsdOz > 0 && fx > 0) spot = {
			usdOz,
			vndPerGram,
			silverUsdOz,
			ratio: Number(raw.gold_silver_ratio) || usdOz / silverUsdOz,
			fx,
			updatedAt: raw.updated_at || raw.data_state?.as_of || fetchedAt
		};
		else notices.push("Nguồn giá trả về thiếu số liệu.");
	} else notices.push("Chưa nối được giá thế giới. Vui lòng gọi quầy để chốt giá.");
	const daily = chartResult.status === "fulfilled" ? (chartResult.value.points ?? []).filter((point) => point.c > 0).slice(-120) : [];
	const intraday = intraResult.status === "fulfilled" ? (intraResult.value.points ?? []).filter((point) => point.p > 0) : [];
	const headlines = [];
	if (bizResult.status === "fulfilled") headlines.push(...parseRss(bizResult.value, "VnExpress"));
	if (worldResult.status === "fulfilled") headlines.push(...parseRss(worldResult.value, "VnExpress Thế giới"));
	const seen = /* @__PURE__ */ new Set();
	const unique = headlines.filter((item) => {
		if (seen.has(item.title)) return false;
		seen.add(item.title);
		return true;
	});
	const data = {
		spot,
		daily,
		intraday,
		headlines: unique.slice(0, 8),
		fetchedAt,
		notice: notices[0] ?? null
	};
	cache = {
		at: Date.now(),
		data
	};
	return data;
});
//#endregion
export { getMarket_createServerFn_handler };
