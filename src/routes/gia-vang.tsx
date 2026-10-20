import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { MarketChart } from "@/components/site/market-chart";
import { useMarket } from "@/components/site/market-context";
import { PriceStatus, QuoteTable, WorldCards, changeFromSeries } from "@/components/site/price-board";
import { SiteFrame } from "@/components/site/frame";
import { LiveBrief } from "@/components/site/live-brief";
import { BOARD, perChi, rowPerLuong, silverPerGram, vnd } from "@/lib/quotes";
import { SHOP } from "@/lib/shop";

export const Route = createFileRoute("/gia-vang")({
  head: () => ({
    meta: [
      { title: "Bảng giá vàng hôm nay — Minh Phát Cần Thơ" },
      {
        name: "description",
        content: "Giá vàng thế giới, bạc và bảng tuổi vàng tham khảo, tự cập nhật suốt ngày.",
      },
    ],
  }),
  component: GiaVang,
});

function GiaVang() {
  const { data, status } = useMarket();
  const spot = data?.spot ?? null;
  const change = changeFromSeries(data?.intraday ?? [], data?.daily ?? []);
  const [karat, setKarat] = useState(BOARD[0]?.id ?? "nhan9999");
  const [chi, setChi] = useState("1");

  const estimate = useMemo(() => {
    if (!spot) return null;
    const row = BOARD.find((item) => item.id === karat);
    const weight = Number(chi.replace(",", "."));
    if (!row || !Number.isFinite(weight) || weight <= 0) return null;
    const quote = rowPerLuong(spot, row);
    return {
      buy: perChi(quote.buy) * weight,
      sell: perChi(quote.sell) * weight,
      name: row.name,
    };
  }, [spot, karat, chi]);

  return (
    <SiteFrame>
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <p className="text-xs tracking-widest text-brass-deep">CẬP NHẬT LIÊN TỤC</p>
        <h1 className="mt-2 max-w-2xl font-display text-5xl leading-tight">Giá vàng, bạc theo giờ thị trường</h1>
        <p className="mt-4 max-w-2xl text-sm text-muted">
          Số thế giới lấy từ thị trường quốc tế và tỷ giá USD. Bảng tuổi vàng là ước tính của Minh Phát để khách
          theo dõi trước khi đến {SHOP.address}. Xác nhận giá qua Zalo {SHOP.zaloDisplay} trước khi chuyển tiền.
        </p>
        <div className="mt-4">
          <PriceStatus status={status} notice={data?.notice ?? null} updatedAt={spot?.updatedAt} />
        </div>

        {spot ? (
          <div className="mt-8 grid gap-8">
            <WorldCards spot={spot} change={change} />
            <QuoteTable spot={spot} />

            <div className="grid gap-6 lg:grid-cols-5">
              <div className="rounded-card border border-line bg-card p-5 lg:col-span-3">
                <h2 className="font-display text-3xl">Sáu tháng, quy đổi theo tỷ giá hiện tại</h2>
                <p className="mt-2 text-sm text-muted">
                  Đường giá là đóng cửa vàng thế giới đổi ra đồng một lượng. Tỷ giá lấy mức hôm nay, không phải tỷ
                  giá từng ngày trong quá khứ.
                </p>
                <div className="mt-4">
                  <MarketChart daily={data?.daily ?? []} fx={spot.fx} />
                </div>
              </div>
              <form className="rounded-card border border-line bg-paper-2 p-5 lg:col-span-2" onSubmit={(event) => event.preventDefault()}>
                <h2 className="font-display text-3xl">Tính nhanh theo chỉ</h2>
                <label className="mt-4 block text-sm" htmlFor="karat">
                  Tuổi vàng
                </label>
                <select
                  id="karat"
                  value={karat}
                  onChange={(event) => setKarat(event.target.value)}
                  className="mt-1 w-full rounded-2xl border border-line bg-card px-3 py-3"
                >
                  {BOARD.map((row) => (
                    <option key={row.id} value={row.id}>
                      {row.name}
                    </option>
                  ))}
                </select>
                <label className="mt-4 block text-sm" htmlFor="chi">
                  Số chỉ
                </label>
                <input
                  id="chi"
                  inputMode="decimal"
                  value={chi}
                  onChange={(event) => setChi(event.target.value)}
                  className="mt-1 w-full rounded-2xl border border-line bg-card px-3 py-3"
                />
                {estimate ? (
                  <dl className="mt-5 space-y-2 text-sm">
                    <div className="flex justify-between gap-3">
                      <dt>Mua vào {estimate.name}</dt>
                      <dd className="font-medium">{vnd(estimate.buy)}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt>Bán ra</dt>
                      <dd className="font-medium">{vnd(estimate.sell)}</dd>
                    </div>
                  </dl>
                ) : (
                  <p className="mt-4 text-sm text-muted">Nhập số chỉ lớn hơn 0.</p>
                )}
                <p className="mt-4 text-xs text-muted">Chưa gồm công chế tác nếu làm mới. Bạc thế giới hiện {spot ? vnd(silverPerGram(spot)) : "—"} một gram.</p>
              </form>
            </div>

            <LiveBrief />
          </div>
        ) : (
          <p className="mt-8 rounded-card border border-line bg-card p-6 text-sm">
            Chưa có số liệu. Gọi {SHOP.zaloDisplay} hoặc {SHOP.shopPhoneDisplay}.
          </p>
        )}
      </section>
    </SiteFrame>
  );
}
