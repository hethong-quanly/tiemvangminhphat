import { Link } from "@tanstack/react-router";
import { SHOP } from "@/lib/shop";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <p className="font-display text-3xl">Minh Phát</p>
          <p className="mt-3 max-w-sm text-sm text-brass-soft">{SHOP.motto}</p>
          <p className="mt-4 text-sm text-paper/80">{SHOP.legal}</p>
          <p className="mt-1 text-sm text-paper/70">MST {SHOP.taxId}</p>
        </div>
        <div>
          <p className="text-xs tracking-widest text-brass-soft">ĐẾN TIỆM</p>
          <p className="mt-3 text-sm">{SHOP.address}</p>
          <p className="mt-2 text-sm text-paper/70">{SHOP.addressNote}</p>
          <p className="mt-3 text-sm">Quầy {SHOP.hours}</p>
        </div>
        <div>
          <p className="text-xs tracking-widest text-brass-soft">24/24</p>
          <a className="mt-3 block text-sm" href={SHOP.zaloUrl}>
            Zalo {SHOP.zaloName} · {SHOP.zaloDisplay}
          </a>
          <a className="mt-2 block text-sm" href={`tel:+84${SHOP.shopPhone.slice(1)}`}>
            Máy bàn {SHOP.shopPhoneDisplay}
          </a>
          <a className="mt-2 block text-sm" href={SHOP.facebook}>
            Facebook tiệm
          </a>
          <Link to="/lien-he" className="mt-4 inline-block text-sm text-brass-soft">
            Gửi lời nhắn
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-xs leading-relaxed text-paper/60 md:px-6">
          Giá trên trang là mức tham khảo, tự trượt theo giá vàng và bạc thế giới cùng chênh lệch thị trường
          hiệu chỉnh ngày 19/10/2026. Không phải bảng niêm yết SJC. Giá mua bán chính thức được xác nhận tại
          quầy hoặc qua Zalo.
        </p>
      </div>
    </footer>
  );
}
