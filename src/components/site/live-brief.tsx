import { useMarket } from "@/components/site/market-context";
import { changeFromSeries } from "@/components/site/price-board";
import { signedPct, silverPerLuong, usd, vnd, worldPerLuong } from "@/lib/quotes";

export function LiveBrief() {
  const { data, status } = useMarket();
  const spot = data?.spot;

  if (!spot) {
    return (
      <article className="rounded-card border border-line bg-card p-6">
        <p className="text-xs tracking-widest text-brass-deep">BẢN TIN MINH PHÁT</p>
        <h2 className="mt-2 font-display text-3xl">Đang lấy giá để viết bản tin</h2>
        <p className="mt-3 text-sm text-muted">
          {status === "error"
            ? "Nguồn giá chưa trả lời. Các bài dưới đây vẫn đọc được, còn số liệu sẽ hiện khi đường truyền thông."
            : "Bảng tự làm mới mỗi phút, kể cả ngoài giờ quầy."}
        </p>
      </article>
    );
  }

  const change = changeFromSeries(data?.intraday ?? [], data?.daily ?? []);
  const direction = change > 0.05 ? "nhích lên" : change < -0.05 ? "hạ" : "đi ngang";
  const luong = worldPerLuong(spot.vndPerGram);

  return (
    <article className="rounded-card border border-line bg-ink p-6 text-paper md:p-8">
      <p className="text-xs tracking-widest text-brass-soft">BẢN TIN 24/24</p>
      <h2 className="mt-2 font-display text-4xl leading-tight">
        Vàng thế giới {direction} {signedPct(change)}
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-paper/85">
        Lúc cập nhật, một ounce vàng ở {usd(spot.usdOz)}, quy đổi khoảng {vnd(luong)} một lượng vàng nguyên
        chất và {vnd(luong / 10)} một chỉ. Bạc thế giới {usd(spot.silverUsdOz)} một ounce, khoảng{" "}
        {vnd(silverPerLuong(spot))} một lượng bạc. Tỷ lệ vàng/bạc là {spot.ratio.toFixed(1)} — tức đang đổi một
        ounce vàng lấy chừng {spot.ratio.toFixed(0)} ounce bạc. Kim cương không có một giá sàn theo lượng; từng
        viên vẫn chốt theo nước, độ sạch và giấy kiểm định tại quầy.
      </p>
      <p className="mt-4 text-xs text-brass-soft">
        Bản tin do Minh Phát viết từ số liệu thị trường, không chép báo. Giá quầy cộng thêm chênh trong nước.
      </p>
    </article>
  );
}
