import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SHOP } from "./shop-PiakRdz_.mjs";
import { t as SiteFrame } from "./frame-C8JjSUtC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gioi-thieu-Cc_TkBV-.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/media/workshop.jpg",
				alt: "Bàn thợ tại xưởng Minh Phát",
				className: "h-80 w-full object-cover lg:h-full"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 py-12 md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs tracking-widest text-brass-deep",
						children: ["TỪ NĂM ", SHOP.since]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-5xl leading-tight",
						children: SHOP.legal
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted",
						children: [
							"Phương châm của tiệm là “",
							SHOP.motto,
							"”. Minh Phát cam kết món vàng đúng tuổi, đúng trọng lượng, đúng chất lượng. Hàng được kiểm trước khi giao, để khách giữ được giá trị theo thời gian chứ không chỉ đẹp lúc mua."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted",
						children: [
							"Tiệm ở ",
							SHOP.address,
							" — ",
							SHOP.addressNote.toLowerCase(),
							". Người đại diện pháp luật là ",
							SHOP.owner,
							". Mã số thuế ",
							SHOP.taxId,
							". Ngành chính là bán lẻ vàng trang sức, mỹ nghệ từ 10K đến 24K, vàng trắng, bạch kim và đá quý; có gia công nữ trang và đại lý chi trả ngoại tệ theo quy định."
						]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-3 md:px-6",
			children: [
				["Đúng tuổi", "Tem, cân và lời nói tại quầy phải khớp nhau. Khách được xem trước khi trả tiền."],
				["Làm theo yêu cầu", "Mang vàng cũ hoặc một tấm ảnh. Thợ báo tuổi, vàng hao và công trước khi làm."],
				["Gửi đi tỉnh", "Sau khi chốt mẫu trên Zalo, tiệm gói và gửi. Nhẫn cưới vẫn nên đo tay tại chỗ."]
			].map(([title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-card border border-line bg-card p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: body
				})]
			}, title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-14 md:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/media/hero-interior.jpg",
				alt: "Tủ kính trang sức",
				className: "max-h-96 w-full rounded-card object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/san-pham",
					className: "rounded-full bg-ink px-5 py-3 text-sm text-paper",
					children: "Xem hàng"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/lien-he",
					className: "rounded-full border border-ink px-5 py-3 text-sm",
					children: "Đường tới tiệm"
				})]
			})]
		})
	] });
}
//#endregion
export { About as component };
