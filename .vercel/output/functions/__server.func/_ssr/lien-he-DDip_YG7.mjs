import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as categories } from "./router-B23PCRo4.mjs";
import { n as clockLabel, r as shopIsOpen, t as SHOP } from "./shop-PiakRdz_.mjs";
import { t as SiteFrame } from "./frame-C8JjSUtC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lien-he-DDip_YG7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const [now, setNow] = (0, import_react.useState)(null);
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [interest, setInterest] = (0, import_react.useState)(categories[0]?.name ?? "Vàng nhẫn");
	const [note, setNote] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [ready, setReady] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setNow(/* @__PURE__ */ new Date());
		const timer = window.setInterval(() => setNow(/* @__PURE__ */ new Date()), 3e4);
		return () => window.clearInterval(timer);
	}, []);
	const open = now ? shopIsOpen(now) : false;
	function submit(event) {
		event.preventDefault();
		if (name.trim().length < 2 || phone.replace(/\D/g, "").length < 9) {
			setError("Xin tên và số điện thoại để tiệm gọi lại.");
			setReady("");
			return;
		}
		const text = `Chào Minh Phát, mình là ${name.trim()} (${phone.trim()}).\nQuan tâm: ${interest}.\n${note.trim()}`.trim();
		setReady(text);
		setError("");
		navigator.clipboard?.writeText(text).catch(() => void 0);
		window.open(SHOP.zaloUrl, "_blank", "noopener,noreferrer");
	}
	const map = `https://maps.google.com/maps?q=${encodeURIComponent(SHOP.mapQuery)}&z=16&output=embed`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 md:px-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-brass-deep",
				children: "LIÊN HỆ 24/24"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl leading-tight",
				children: "Nhắn bất kỳ giờ nào"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-sm text-muted",
				children: [
					now ? `${clockLabel(now)} giờ Cần Thơ. ` : "",
					open ? "Quầy đang mở cửa." : "Quầy đã đóng, Zalo vẫn có người trực.",
					" Giờ cửa: ",
					SHOP.hours,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-6 space-y-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
						className: "text-xs text-muted",
						children: ["Zalo ", SHOP.zaloName]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: SHOP.zaloUrl,
						className: "font-display text-3xl",
						children: SHOP.zaloDisplay
					}) })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs text-muted",
						children: "Máy bàn, trong giờ mở cửa"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `tel:+84${SHOP.shopPhone.slice(1)}`,
						className: "text-lg",
						children: SHOP.shopPhoneDisplay
					}) })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs text-muted",
						children: "Hotline phụ"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `tel:+84${SHOP.extraPhone.slice(1)}`,
						children: SHOP.extraPhoneDisplay
					}) })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xs text-muted",
							children: "Tiệm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: SHOP.address }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-muted",
							children: SHOP.addressNote
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs text-muted",
						children: "Facebook"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: SHOP.facebook,
						className: "text-brass-deep",
						children: "Tiệm Vàng Minh Phát Cần Thơ"
					}) })] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "mt-8 grid gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						htmlFor: "name",
						children: ["Tên", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "name",
							value: name,
							onChange: (event) => setName(event.target.value),
							className: "mt-1 w-full rounded-2xl border border-line bg-card px-3 py-3"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						htmlFor: "phone",
						children: ["Điện thoại", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "phone",
							inputMode: "tel",
							value: phone,
							onChange: (event) => setPhone(event.target.value),
							className: "mt-1 w-full rounded-2xl border border-line bg-card px-3 py-3"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						htmlFor: "interest",
						children: ["Quan tâm", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "interest",
							value: interest,
							onChange: (event) => setInterest(event.target.value),
							className: "mt-1 w-full rounded-2xl border border-line bg-card px-3 py-3",
							children: [
								categories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item.name }, item.id)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Hỏi giá vàng hôm nay" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Đổi ngoại tệ" })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						htmlFor: "note",
						children: ["Lời nhắn", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "note",
							rows: 4,
							value: note,
							onChange: (event) => setNote(event.target.value),
							className: "mt-1 w-full rounded-2xl border border-line bg-card px-3 py-3"
						})]
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-down",
						children: error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "rounded-full bg-ink px-5 py-3 text-sm text-paper",
						children: "Soạn tin và mở Zalo"
					}),
					ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "rounded-card bg-paper-2 p-3 text-sm",
						children: ["Đã chép lời nhắn. Nếu Zalo không tự điền, dán vào khung chat:", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block whitespace-pre-wrap text-muted",
							children: ready
						})]
					}) : null
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-card border border-line bg-paper-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				title: "Bản đồ tới Tiệm Vàng Minh Phát",
				src: map,
				className: "h-80 w-full border-0 lg:h-full lg:min-h-96",
				loading: "lazy"
			})
		})]
	}) });
}
//#endregion
export { ContactPage as component };
