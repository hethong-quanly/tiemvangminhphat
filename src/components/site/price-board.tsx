import { Link } from "@tanstack/react-router";
import { BOARD, perChi, rowPerLuong, silverPerLuong, signedPct, usd, vnd, worldPerLuong, type Spot } from "@/lib/quotes";
import type { DailyPoint, IntraPoint } from "@/lib/market.functions";

export function changeFromSeries(intraday: IntraPoint[], daily: DailyPoint[]) {
  if (intraday.length > 2) {
    const first = intraday[0]?.p ?? 0;
    const last = intraday[intraday.length - 1]?.p ?? 0;
    if (first > 0) return ((last - first) / first) * 100;
  }
  if (daily.length > 2) {
    const prev = daily[daily.length - 2]?.c ?? 0;
    const last = daily[daily.length - 1]?.c ?? 0;
    if (prev > 0) return ((last - prev) / prev) * 100;
  }
  return 0;
}

export function PriceTicker({ spot, change }: { spot: Spot | null; change: number }) {
  if (!spot) {
    return (
      <div className="border-y border-line bg-paper-2 px-4 py-3 text-sm text-muted">
        Đang nối bảng giá thế giới…
      </div>
    );
  }
  const items = [
    `Vàng thế giới ${usd(spot.usdOz)}/oz`,
    `Quy đổi ${vnd(worldPerLuong(spot.vndPerGram))}/lượng`,
    `Bạc ${usd(spot.silverUsdOz)}/oz`,
    `Tỷ lệ vàng/bạc ${spot.ratio.toFixed(1)}`,
    `Phiên ${signedPct(change)}`,
    `USD ${new Intl.NumberFormat("vi-VN").format(Math.round(spot.fx))} đ`,
  ];
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line bg-ink text-paper">
      <div className="ticker-track flex w-max gap-8 py-3">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="text-sm tracking-wide text-brass-soft">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function WorldCards({ spot, change }: { spot: Spot; change: number }) {
  const luong = worldPerLuong(spot.vndPerGram);
  const up = change >= 0;
  const cards = [
    { label: "Vàng thế giới", value: usd(spot.usdOz), note: `${signedPct(change)} trong phiên gần` },
    { label: "Quy đổi / lượng", value: vnd(luong), note: "37,5g · giá thuần, chưa cộng chênh trong nước" },
    { label: "Quy đổi / chỉ", value: vnd(luong / 10), note: "3,75g vàng nguyên chất" },
    { label: "Bạc thế giới", value: usd(spot.silverUsdOz), note: `${vnd(silverPerLuong(spot))} / lượng bạc` },
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <article key={card.label} className="rounded-card border border-line bg-card p-4">
          <p className="text-xs tracking-wide text-muted">{card.label}</p>
          <p className="mt-2 font-display text-3xl text-ink">{card.value}</p>
          <p className={`mt-2 text-sm ${card.label === "Vàng thế giới" ? (up ? "text-up" : "text-down") : "text-muted"}`}>
            {card.note}
          </p>
        </article>
      ))}
    </div>
  );
}

export function QuoteTable({ spot, compact = false }: { spot: Spot; compact?: boolean }) {
  const rows = compact ? BOARD.slice(0, 4) : BOARD;
  return (
    <div className="overflow-hidden rounded-card border border-line bg-card">
      <table className="w-full text-left text-sm">
        <thead className="bg-paper-2 text-xs tracking-wide text-muted">
          <tr>
            <th className="px-4 py-3 font-medium">Loại</th>
            <th className="px-4 py-3 font-medium">Mua vào</th>
            <th className="px-4 py-3 font-medium">Bán ra</th>
            <th className="hidden px-4 py-3 font-medium md:table-cell">Bán / chỉ</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const quote = rowPerLuong(spot, row);
            return (
              <tr key={row.id} className="border-t border-line">
                <td className="px-4 py-3">
                  <span className="block font-medium">{row.name}</span>
                  <span className="text-xs text-muted">{row.hint}</span>
                </td>
                <td className="px-4 py-3 text-down">{vnd(quote.buy)}</td>
                <td className="px-4 py-3 font-medium">{vnd(quote.sell)}</td>
                <td className="hidden px-4 py-3 text-muted md:table-cell">{vnd(perChi(quote.sell))}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {compact ? (
        <div className="border-t border-line px-4 py-3 text-sm">
          <Link to="/gia-vang" className="text-brass-deep">
            Xem đủ tuổi vàng và biểu đồ
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export function PriceStatus({
  status,
  notice,
  updatedAt,
}: {
  status: "loading" | "ready" | "error";
  notice: string | null;
  updatedAt?: string;
}) {
  const time = updatedAt
    ? new Intl.DateTimeFormat("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
        day: "2-digit",
        month: "2-digit",
        timeZone: "Asia/Ho_Chi_Minh",
      }).format(new Date(updatedAt))
    : null;
  return (
    <p className="text-sm text-muted">
      <span className="live-dot mr-2 inline-block size-2 rounded-full bg-brass align-middle" aria-hidden="true" />
      {status === "loading" && "Đang lấy giá thế giới…"}
      {status === "error" && (notice ?? "Không lấy được giá lúc này. Gọi quầy hoặc nhắn Zalo để chốt.")}
      {status === "ready" && `Cập nhật ${time ?? "vừa xong"} · tự làm mới mỗi phút · giá tham khảo`}
    </p>
  );
}
