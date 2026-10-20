import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { SHOP, clockLabel, shopIsOpen } from "@/lib/shop";

const links = [
  { to: "/", label: "Trang chủ", exact: true },
  { to: "/gia-vang", label: "Giá vàng", exact: false },
  { to: "/san-pham", label: "Sản phẩm", exact: false },
  { to: "/tin-tuc", label: "Tin tức", exact: false },
  { to: "/gioi-thieu", label: "Về tiệm", exact: false },
  { to: "/lien-he", label: "Liên hệ", exact: false },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const openNow = now ? shopIsOpen(now) : null;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid size-11 shrink-0 place-items-center rounded-full border border-brass font-display text-lg text-brass-deep">
            MP
          </span>
          <span className="leading-tight">
            <span className="block font-display text-xl tracking-wide text-ink">Minh Phát</span>
            <span className="block text-xs text-muted">Vàng · Cần Thơ</span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 lg:flex" aria-label="Chính">
          {links.map((item) => {
            const active = item.exact ? pathname === item.to : pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-full px-3 py-2 text-sm text-ink-soft",
                  active && "bg-ink text-paper",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={`tel:+84${SHOP.zalo.slice(1)}`}
          className="ml-auto hidden items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm text-paper lg:ml-2 lg:inline-flex"
        >
          <Phone className="size-4" aria-hidden="true" />
          {SHOP.zaloDisplay}
        </a>

        <button
          type="button"
          className="ml-auto grid size-11 place-items-center rounded-full border border-line lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Đóng menu" : "Mở menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div className="border-t border-line/80 bg-paper-2">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2 text-xs text-muted md:px-6">
          <span className={cn("live-dot size-2 rounded-full", openNow === false ? "bg-brass" : "bg-up")} aria-hidden="true" />
          <span>
            {now ? `${clockLabel(now)} · Cần Thơ · ${openNow ? "Quầy đang mở" : "Ngoài giờ quầy"}` : "Giờ Cần Thơ"}
            {" · Zalo trực 24/24"}
          </span>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-line bg-paper px-4 py-3 lg:hidden" aria-label="Di động">
          <ul className="grid gap-1">
            {links.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="block rounded-card px-3 py-3 text-base">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
