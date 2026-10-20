import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useMarket } from "@/components/site/market-context";
import { ProductCard, estimateProduct } from "@/components/site/product-card";
import { categoryById, productBySlug, products } from "@/lib/products";
import { SHOP } from "@/lib/shop";

export const Route = createFileRoute("/san-pham/$slug")({
  head: ({ params }) => {
    const product = productBySlug(params.slug);
    return {
      meta: [
        { title: product ? `${product.name} — Minh Phát` : "Sản phẩm — Minh Phát" },
        { name: "description", content: product?.summary ?? "Mẫu trang sức tại Tiệm Vàng Minh Phát." },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useParams();
  const product = productBySlug(slug);
  const { data } = useMarket();
  const [photo, setPhoto] = useState(0);

  if (!product) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="font-display text-4xl">Không thấy mẫu này</h1>
        <Link to="/san-pham" className="mt-4 inline-block text-brass-deep">
          Về bộ sưu tập
        </Link>
      </section>
    );
  }

  const category = categoryById(product.category);
  const spot = data?.spot;
  const price = spot ? estimateProduct(product, spot.vndPerGram, spot.silverUsdOz, spot.fx) : null;
  const image = product.images[photo] ?? product.images[0];
  const related = products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3);
  const zaloText = encodeURIComponent(`Minh Phát ơi, mình muốn hỏi mẫu ${product.name}.`);

  return (
    <>
      <article className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:px-6 lg:grid-cols-2">
        <div>
          <img src={image} alt={product.name} className="aspect-square w-full rounded-card object-cover" />
          <div className="mt-3 flex gap-2">
            {product.images.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setPhoto(index)}
                className={`h-20 w-20 overflow-hidden rounded-2xl border ${index === photo ? "border-ink" : "border-line"}`}
                aria-label={`Ảnh ${index + 1} của ${product.name}`}
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs tracking-widest text-brass-deep">{category?.name}</p>
          <h1 className="mt-2 font-display text-5xl leading-tight">{product.name}</h1>
          <p className="mt-4 text-sm leading-relaxed text-muted">{product.summary}</p>
          <p className="mt-6 font-display text-4xl">{price ? price.value : "Báo giá khi chốt"}</p>
          <p className="text-xs text-muted">{price ? price.label : "Nhắn Zalo để thợ tính vàng, công và hột."}</p>
          <ul className="mt-6 space-y-2 text-sm">
            {product.points.map((point) => (
              <li key={point} className="border-b border-line py-2">
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`${SHOP.zaloUrl}?text=${zaloText}`} className="rounded-full bg-ink px-5 py-3 text-sm text-paper">
              Hỏi Zalo mẫu này
            </a>
            <a href={`tel:+84${SHOP.zalo.slice(1)}`} className="rounded-full border border-ink px-5 py-3 text-sm">
              Gọi {SHOP.zaloDisplay}
            </a>
          </div>
        </div>
      </article>
      {related.length > 0 ? (
        <section className="mx-auto max-w-6xl px-4 pb-14 md:px-6">
          <h2 className="font-display text-3xl">Cùng loại</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
