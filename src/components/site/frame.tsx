import type { ReactNode } from "react";
import { ContactDock } from "@/components/site/contact-dock";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main className="pb-24 md:pb-0">{children}</main>
      <SiteFooter />
      <ContactDock />
    </div>
  );
}
