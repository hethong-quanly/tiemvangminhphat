import { Link, createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/site/product-card";
import { cn } from "@/lib/cn";
import { categories, products } from "@/lib/products";
import { Route as CatalogRoute } from "./san-pham";

export const Route = createFileRoute("/san-pham/")({
  head: () => ({
    meta: [
      { title: "Sản phẩm — Tiệm Vàng Minh Phát" },
      { name: "description", content: "Nhẫn 9999, nhẫn cưới, dây, lắc, bông tai, kim cương và trang sức trẻ em." },
    ],
  }),
  component: Catalog,
});

function Catalog() {
  const { loai = "tat-ca" } = CatalogRoute.useSearch();
  const [query, setQuery] = useState("");
  const list = useMemo(() => {
    const base = loai === "tat-ca" ? products : products.filter((item) => item.category === loai);
    const needle = query.trim().toLowerCase();
    if (!needle) return base;
    return base.filter((item) => `${item.name} ${item.summary}`.toLowerCase().includes(needle));
  }, [loai, query]);
  const current = categories.find((item) => item.id === loai);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <p className="text-xs tracking-widest text-brass-deep">BỘ SƯU TẬP</p>
      <h1 className="mt-2 font-display text-5xl">{current ? current.name : "Tất cả sản phẩm"}</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted">
        {current?.blurb ??
          "Mỗi mẫu có vài ảnh và giá vàng ước tính theo bảng trong ngày. Công và hột đá tính khi chốt."}
      </p>
      <label className="mt-6 block max-w-md text-sm" htmlFor="q">
        Tìm mẫu
        <input
          id="q"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Nhẫn cưới, dây, bé thỏ…"
          className="mt-1 w-full rounded-2xl border border-line bg-card px-3 py-3"
        />
      </label>
      <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
        <Link
          to="/san-pham"
          search={{}}
          className={cn(
            "shrink-0 rounded-full border border-line px-4 py-2 text-sm",
            loai === "tat-ca" && "border-ink bg-ink text-paper",
          )}
        >
          Tất cả
        </Link>
        {categories.map((category) => (
          <Link
            key={category.id}
            to="/san-pham"
            search={{ loai: category.id }}
            className={cn(
              "shrink-0 rounded-full border border-line px-4 py-2 text-sm",
              loai === category.id && "border-ink bg-ink text-paper",
            )}
          >
            {category.name}
          </Link>
        ))}
      </div>
      {list.length === 0 ? (
        <p className="mt-10 text-sm text-muted">
          Không có mẫu khớp. Thử loại khác hoặc nhắn Zalo để hỏi mẫu chưa lên web.
        </p>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
