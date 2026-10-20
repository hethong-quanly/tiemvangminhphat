import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { SiteFrame } from "@/components/site/frame";
import { categories } from "@/lib/products";
import { SHOP, clockLabel, shopIsOpen } from "@/lib/shop";

export const Route = createFileRoute("/lien-he")({
  head: () => ({
    meta: [
      { title: "Liên hệ 24/24 — Tiệm Vàng Minh Phát" },
      { name: "description", content: "Zalo Mỹ Nhiên trực cả ngày. Quầy 24 Ngô Quyền mở 8 giờ đến 20 giờ." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [now, setNow] = useState<Date | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState(categories[0]?.name ?? "Vàng nhẫn");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [ready, setReady] = useState("");

  useEffect(() => {
    setNow(new Date());
    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  const open = now ? shopIsOpen(now) : false;

  function submit(event: FormEvent) {
    event.preventDefault();
    if (name.trim().length < 2 || phone.replace(/\D/g, "").length < 9) {
      setError("Xin tên và số điện thoại để tiệm gọi lại.");
      setReady("");
      return;
    }
    const text = `Chào Minh Phát, mình là ${name.trim()} (${phone.trim()}).\nQuan tâm: ${interest}.\n${note.trim()}`.trim();
    setReady(text);
    setError("");
    void navigator.clipboard?.writeText(text).catch(() => undefined);
    window.open(SHOP.zaloUrl, "_blank", "noopener,noreferrer");
  }

  const map = `https://maps.google.com/maps?q=${encodeURIComponent(SHOP.mapQuery)}&z=16&output=embed`;

  return (
    <SiteFrame>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs tracking-widest text-brass-deep">LIÊN HỆ 24/24</p>
          <h1 className="mt-2 font-display text-5xl leading-tight">Nhắn bất kỳ giờ nào</h1>
          <p className="mt-4 text-sm text-muted">
            {now ? `${clockLabel(now)} giờ Cần Thơ. ` : ""}
            {open ? "Quầy đang mở cửa." : "Quầy đã đóng, Zalo vẫn có người trực."} Giờ cửa: {SHOP.hours}.
          </p>
          <dl className="mt-6 space-y-4 text-sm">
            <div>
              <dt className="text-xs text-muted">Zalo {SHOP.zaloName}</dt>
              <dd>
                <a href={SHOP.zaloUrl} className="font-display text-3xl">
                  {SHOP.zaloDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs text-muted">Máy bàn, trong giờ mở cửa</dt>
              <dd>
                <a href={`tel:+84${SHOP.shopPhone.slice(1)}`} className="text-lg">
                  {SHOP.shopPhoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs text-muted">Hotline phụ</dt>
              <dd>
                <a href={`tel:+84${SHOP.extraPhone.slice(1)}`}>{SHOP.extraPhoneDisplay}</a>
              </dd>
            </div>
            <div>
              <dt className="text-xs text-muted">Tiệm</dt>
              <dd>{SHOP.address}</dd>
              <dd className="text-muted">{SHOP.addressNote}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted">Facebook</dt>
              <dd>
                <a href={SHOP.facebook} className="text-brass-deep">
                  Tiệm Vàng Minh Phát Cần Thơ
                </a>
              </dd>
            </div>
          </dl>
          <form onSubmit={submit} className="mt-8 grid gap-3">
            <label className="text-sm" htmlFor="name">
              Tên
              <input id="name" value={name} onChange={(event) => setName(event.target.value)} className="mt-1 w-full rounded-2xl border border-line bg-card px-3 py-3" />
            </label>
            <label className="text-sm" htmlFor="phone">
              Điện thoại
              <input id="phone" inputMode="tel" value={phone} onChange={(event) => setPhone(event.target.value)} className="mt-1 w-full rounded-2xl border border-line bg-card px-3 py-3" />
            </label>
            <label className="text-sm" htmlFor="interest">
              Quan tâm
              <select id="interest" value={interest} onChange={(event) => setInterest(event.target.value)} className="mt-1 w-full rounded-2xl border border-line bg-card px-3 py-3">
                {categories.map((item) => (
                  <option key={item.id}>{item.name}</option>
                ))}
                <option>Hỏi giá vàng hôm nay</option>
                <option>Đổi ngoại tệ</option>
              </select>
            </label>
            <label className="text-sm" htmlFor="note">
              Lời nhắn
              <textarea id="note" rows={4} value={note} onChange={(event) => setNote(event.target.value)} className="mt-1 w-full rounded-2xl border border-line bg-card px-3 py-3" />
            </label>
            {error ? <p className="text-sm text-down">{error}</p> : null}
            <button type="submit" className="rounded-full bg-ink px-5 py-3 text-sm text-paper">
              Soạn tin và mở Zalo
            </button>
            {ready ? (
              <p className="rounded-card bg-paper-2 p-3 text-sm">
                Đã chép lời nhắn. Nếu Zalo không tự điền, dán vào khung chat:
                <span className="mt-2 block whitespace-pre-wrap text-muted">{ready}</span>
              </p>
            ) : null}
          </form>
        </div>
        <div className="overflow-hidden rounded-card border border-line bg-paper-2">
          <iframe title="Bản đồ tới Tiệm Vàng Minh Phát" src={map} className="h-80 w-full border-0 lg:h-full lg:min-h-96" loading="lazy" />
        </div>
      </section>
    </SiteFrame>
  );
}
