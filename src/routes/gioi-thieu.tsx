import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteFrame } from "@/components/site/frame";
import { SHOP } from "@/lib/shop";

export const Route = createFileRoute("/gioi-thieu")({
  head: () => ({
    meta: [
      { title: "Về tiệm — Minh Phát Cần Thơ" },
      {
        name: "description",
        content: "Công ty TNHH Kinh doanh Vàng Minh Phát, 24 Ngô Quyền, Ninh Kiều. Lấy chữ tín làm nền.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteFrame>
      <section className="grid lg:grid-cols-2">
        <img src="/media/workshop.jpg" alt="Bàn thợ tại xưởng Minh Phát" className="h-80 w-full object-cover lg:h-full" />
        <div className="px-5 py-12 md:px-10">
          <p className="text-xs tracking-widest text-brass-deep">TỪ NĂM {SHOP.since}</p>
          <h1 className="mt-2 font-display text-5xl leading-tight">{SHOP.legal}</h1>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Phương châm của tiệm là “{SHOP.motto}”. Minh Phát cam kết món vàng đúng tuổi, đúng trọng lượng, đúng chất
            lượng. Hàng được kiểm trước khi giao, để khách giữ được giá trị theo thời gian chứ không chỉ đẹp lúc mua.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Tiệm ở {SHOP.address} — {SHOP.addressNote.toLowerCase()}. Người đại diện pháp luật là {SHOP.owner}. Mã số
            thuế {SHOP.taxId}. Ngành chính là bán lẻ vàng trang sức, mỹ nghệ từ 10K đến 24K, vàng trắng, bạch kim và
            đá quý; có gia công nữ trang và đại lý chi trả ngoại tệ theo quy định.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-3 md:px-6">
        {[
          ["Đúng tuổi", "Tem, cân và lời nói tại quầy phải khớp nhau. Khách được xem trước khi trả tiền."],
          ["Làm theo yêu cầu", "Mang vàng cũ hoặc một tấm ảnh. Thợ báo tuổi, vàng hao và công trước khi làm."],
          ["Gửi đi tỉnh", "Sau khi chốt mẫu trên Zalo, tiệm gói và gửi. Nhẫn cưới vẫn nên đo tay tại chỗ."],
        ].map(([title, body]) => (
          <article key={title} className="rounded-card border border-line bg-card p-5">
            <h2 className="font-display text-3xl">{title}</h2>
            <p className="mt-2 text-sm text-muted">{body}</p>
          </article>
        ))}
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-14 md:px-6">
        <img src="/media/hero-interior.jpg" alt="Tủ kính trang sức" className="max-h-96 w-full rounded-card object-cover" />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/san-pham" className="rounded-full bg-ink px-5 py-3 text-sm text-paper">
            Xem hàng
          </Link>
          <Link to="/lien-he" className="rounded-full border border-ink px-5 py-3 text-sm">
            Đường tới tiệm
          </Link>
        </div>
      </section>
    </SiteFrame>
  );
}
