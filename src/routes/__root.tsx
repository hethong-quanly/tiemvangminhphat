import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { MarketProvider } from "@/components/site/market-context";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tiệm Vàng Minh Phát Cần Thơ" },
      {
        name: "description",
        content:
          "Tiệm Vàng Minh Phát — 24 Ngô Quyền, Ninh Kiều, Cần Thơ. Bảng giá vàng cập nhật liên tục, trang sức theo loại, liên hệ Zalo 24/24.",
      },
      { name: "theme-color", content: "#14110E" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap",
      },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: () => (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <MarketProvider>
            <Outlet />
          </MarketProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
