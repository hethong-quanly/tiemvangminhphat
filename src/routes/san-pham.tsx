import { Outlet, createFileRoute } from "@tanstack/react-router";
import { SiteFrame } from "@/components/site/frame";
import { categories } from "@/lib/products";

export const Route = createFileRoute("/san-pham")({
  validateSearch: (search: Record<string, unknown>): { loai?: string } => {
    const raw = typeof search.loai === "string" ? search.loai : undefined;
    if (!raw || raw === "tat-ca") return {};
    return categories.some((item) => item.id === raw) ? { loai: raw } : {};
  },
  component: ProductLayout,
});

function ProductLayout() {
  return (
    <SiteFrame>
      <Outlet />
    </SiteFrame>
  );
}
