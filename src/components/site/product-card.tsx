import { Link } from "@tanstack/react-router";
import { useMarket } from "@/components/site/market-context";
import { categoryById, type Product } from "@/lib/products";
import { findRow, perChi, rowPerLuong, vnd, type Spot } from "@/lib/quotes";

function fakeSpot(vndPerGram: number, silverUsd: number, fx: number): Spot {
  return { usdOz: 0, vndPerGram, silverUsdOz: silverUsd, ratio: 0, fx, updatedAt: "" };
}

export function estimateProduct(product: Product, vndPerGram: number, silverUsd: number, fx: number) {
  if (product.fixedPrice) return { label: "Giá vòng", value: vnd(product.fixedPrice) };
  if (product.silverGram) {
    const gram = (silverUsd * fx) / 31.1034768;
    return { label: "Bạc thế giới, chưa công", value: vnd(gram * product.silverGram) };
  }
  if (product.karatId && product.weightChi) {
    const row = findRow(product.karatId);
    if (!row) return null;
    const sell = perChi(rowPerLuong(fakeSpot(vndPerGram, silverUsd, fx), row).sell);
    return { label: "Vàng bán ra, chưa công", value: vnd(sell * product.weightChi) };
  }
  return null;
}

export function ProductCard({ product }: { product: Product }) {
  const { data } = useMarket();
  const spot = data?.spot;
  const price = spot
    ? estimateProduct(product, spot.vndPerGram, spot.silverUsdOz, spot.fx)
    : product.fixedPrice
      ? { label: "Giá vòng", value: vnd(product.fixedPrice) }
      : null;
  const category = categoryById(product.category);

  return (
    <Link
      to="/san-pham/$slug"
      params={{ slug: product.slug }}
      className="group flex flex-col overflow-hidden rounded-card border border-line bg-card"
    >
      <div className="aspect-square overflow-hidden bg-paper-2">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs text-brass-deep">{category?.name}</p>
        <h3 className="mt-1 font-display text-2xl leading-tight">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted">{product.summary}</p>
        <p className="mt-4 text-sm">
          {price ? (
            <>
              <span className="block text-xs text-muted">{price.label}</span>
              <span className="font-medium">{price.value}</span>
            </>
          ) : (
            <span className="text-muted">Báo giá khi chốt mẫu</span>
          )}
        </p>
      </div>
    </Link>
  );
}
