import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { LiveBrief } from "@/components/site/live-brief";
import { useMarket } from "@/components/site/market-context";
import { PriceStatus, PriceTicker, QuoteTable, WorldCards, changeFromSeries } from "@/components/site/price-board";
import { ProductCard } from "@/components/site/product-card";
import { SiteFrame } from "@/components/site/frame";
import { articles } from "@/lib/articles";
import { categories, products } from "@/lib/products";
import { SHOP } from "@/lib/shop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tiệm Vàng Minh Phát Cần Thơ" },
      {
        name: "description",
        content:
          "Vàng đúng tuổi tại 24 Ngô Quyền, Ninh Kiều. Bảng giá cập nhật liên tục, trang sức theo loại, Zalo trực 24/24.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { data, status } = useMarket();
  const spot = data?.spot ?? null;
  const change = changeFromSeries(data?.intraday ?? [], data?.daily ?? []);
  const featured = products.filter((item) =>
    ["nhan-tron-9999-1-chi", "cap-nhan-cuoi-tron-610", "day-xoan-610", "nhan-kim-cuong", "lac-be-tho", "hoa-hong-vang-999"].includes(
      item.slug,
    ),
  );

  return (
    <SiteFrame>
      <section className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-between bg-ink px-5 py-10 text-paper md:px-10 md:py-14">
          <p className="text-xs tracking-widest text-brass-soft">CẦN THƠ · TỪ {SHOP.since}</p>
          <div>
            <h1 className="font-display text-5xl leading-none md:text-7xl">
              Vàng đúng tuổi.
              <span className="mt-2 block italic text-brass-soft">Giữ chữ tín.</span>
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-paper/80">
              {SHOP.legal} tại {SHOP.address}. Minh Phát bán vàng nhẫn, trang sức, đá quý và nhận làm theo mẫu —
              đúng tuổi, đúng cân.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/gia-vang" className="rounded-full bg-brass px-5 py-3 text-sm text-ink">
                Xem bảng giá
              </Link>
              <Link to="/san-pham" className="rounded-full border border-brass-soft px-5 py-3 text-sm text-paper">
                Bộ sưu tập
              </Link>
            </div>
          </div>
          <p className="mt-10 text-sm text-paper/70">{SHOP.motto}</p>
        </div>
        <img
          src="/media/hero-interior.jpg"
          alt="Không gian tủ kính của Tiệm Vàng Minh Phát"
          className="h-80 w-full object-cover md:h-full md:min-h-96"
        />
      </section>

      <PriceTicker spot={spot} change={change} />

      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-widest text-brass-deep">GIÁ VÀNG 24/24</p>
            <h2 className="mt-2 font-display text-4xl">Bảng theo giá thế giới</h2>
          </div>
          <PriceStatus status={status} notice={data?.notice ?? null} updatedAt={spot?.updatedAt} />
        </div>
        <div className="mt-8">
          {spot ? (
            <div className="grid gap-6">
              <WorldCards spot={spot} change={change} />
              <QuoteTable spot={spot} compact />
            </div>
          ) : (
            <div className="rounded-card border border-line bg-card p-6 text-sm text-muted">
              Bảng sẽ hiện khi có số liệu. Trong lúc đó, nhắn Zalo {SHOP.zaloDisplay} để hỏi giá tại quầy.
            </div>
          )}
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs tracking-widest text-brass-deep">BỘ SƯU TẬP</p>
              <h2 className="mt-2 font-display text-4xl">Từng loại, nhiều ảnh</h2>
            </div>
            <Link to="/san-pham" className="text-sm text-brass-deep">
              Tất cả mẫu
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-5">
            {categories.map((category) => (
              <Link
                key={category.id}
                to="/san-pham"
                search={{ loai: category.id }}
                className="group relative aspect-square overflow-hidden rounded-card"
              >
                <img src={category.image} alt="" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                <span className="absolute inset-x-0 bottom-0 bg-ink/80 px-3 py-3 text-sm text-paper">{category.name}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-4 md:px-6">
        {[
          ["Tư vấn tận quầy", "Nói rõ tuổi vàng, cân và công trước khi khách quyết."],
          ["Làm từ 2013", "Địa chỉ quen của Ninh Kiều, người đại diện Tôn Hồng Tài."],
          ["Gửi hàng cả nước", "Chốt mẫu và tiền qua Zalo, rồi gửi đi tỉnh."],
          ["Làm theo mẫu", "Mang vàng cũ hoặc ảnh mẫu, thợ làm lại tại xưởng."],
        ].map(([title, body]) => (
          <article key={title}>
            <h3 className="font-display text-2xl">{title}</h3>
            <p className="mt-2 text-sm text-muted">{body}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-14 md:px-6">
        <LiveBrief />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <Link key={article.slug} to="/tin-tuc/$slug" params={{ slug: article.slug }} className="overflow-hidden rounded-card border border-line bg-card">
              <img src={article.image} alt="" className="h-40 w-full object-cover" />
              <div className="p-4">
                <p className="text-xs text-brass-deep">{article.kicker}</p>
                <h3 className="mt-1 font-display text-2xl leading-tight">{article.title}</h3>
                <p className="mt-2 text-sm text-muted">{article.dek}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link to="/tin-tuc" className="mt-4 inline-flex items-center gap-1 text-sm text-brass-deep">
          Tin vàng, bạc, kim cương <ArrowUpRight className="size-4" />
        </Link>
      </section>

      <section className="grid lg:grid-cols-2">
        <img src="/media/storefront.jpg" alt="Mặt tiền tiệm buổi tối" className="h-72 w-full object-cover lg:h-full" />
        <div className="bg-paper-2 px-5 py-10 md:px-10">
          <p className="text-xs tracking-widest text-brass-deep">LIÊN HỆ 24/24</p>
          <h2 className="mt-2 font-display text-4xl">Quầy đóng, Zalo vẫn mở</h2>
          <p className="mt-4 max-w-md text-sm text-muted">
            Cửa tiệm {SHOP.hours}. Ngoài giờ, nhắn {SHOP.zaloName} để hỏi mẫu, giá và giữ món. Máy bàn{" "}
            {SHOP.shopPhoneDisplay} nghe trong giờ mở cửa.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={SHOP.zaloUrl} className="rounded-full bg-ink px-5 py-3 text-sm text-paper">
              Nhắn Zalo
            </a>
            <Link to="/lien-he" className="rounded-full border border-ink px-5 py-3 text-sm">
              Xem địa chỉ
            </Link>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
