import { MessageCircle, Phone } from "lucide-react";
import { SHOP } from "@/lib/shop";

export function ContactDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink text-paper md:inset-x-auto md:right-5 md:bottom-5 md:w-auto md:rounded-full md:border">
      <div className="mx-auto flex max-w-6xl items-stretch md:max-w-none">
        <a
          href={SHOP.zaloUrl}
          className="flex flex-1 items-center justify-center gap-2 px-4 py-3 text-sm md:rounded-l-full md:px-5"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Zalo 24/24
        </a>
        <a
          href={`tel:+84${SHOP.zalo.slice(1)}`}
          className="flex flex-1 items-center justify-center gap-2 border-l border-white/15 px-4 py-3 text-sm md:rounded-r-full md:px-5"
        >
          <Phone className="size-4" aria-hidden="true" />
          Gọi {SHOP.zaloDisplay}
        </a>
      </div>
    </div>
  );
}
