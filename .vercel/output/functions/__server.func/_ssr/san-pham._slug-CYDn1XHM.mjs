import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useMarket, d as products, l as categoryById, r as Route$2, u as productBySlug } from "./router-B23PCRo4.mjs";
import { t as SHOP } from "./shop-PiakRdz_.mjs";
import { n as estimateProduct, t as ProductCard } from "./product-card-BGlyUi4D.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/san-pham._slug-CYDn1XHM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { slug } = Route$2.useParams();
	const product = productBySlug(slug);
	const { data } = useMarket();
	const [photo, setPhoto] = (0, import_react.useState)(0);
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-3xl px-4 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "Không thấy mẫu này"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/san-pham",
			className: "mt-4 inline-block text-brass-deep",
			children: "Về bộ sưu tập"
		})]
	});
	const category = categoryById(product.category);
	const spot = data?.spot;
	const price = spot ? estimateProduct(product, spot.vndPerGram, spot.silverUsdOz, spot.fx) : null;
	const image = product.images[photo] ?? product.images[0];
	const related = products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3);
	const zaloText = encodeURIComponent(`Minh Phát ơi, mình muốn hỏi mẫu ${product.name}.`);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto grid max-w-6xl gap-8 px-4 py-10 md:px-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: image,
			alt: product.name,
			className: "aspect-square w-full rounded-card object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 flex gap-2",
			children: product.images.map((src, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setPhoto(index),
				className: `h-20 w-20 overflow-hidden rounded-2xl border ${index === photo ? "border-ink" : "border-line"}`,
				"aria-label": `Ảnh ${index + 1} của ${product.name}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt: "",
					className: "h-full w-full object-cover"
				})
			}, src))
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-brass-deep",
				children: category?.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl leading-tight",
				children: product.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed text-muted",
				children: product.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 font-display text-4xl",
				children: price ? price.value : "Báo giá khi chốt"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: price ? price.label : "Nhắn Zalo để thợ tính vàng, công và hột."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-6 space-y-2 text-sm",
				children: product.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-b border-line py-2",
					children: point
				}, point))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `${SHOP.zaloUrl}?text=${zaloText}`,
					className: "rounded-full bg-ink px-5 py-3 text-sm text-paper",
					children: "Hỏi Zalo mẫu này"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `tel:+84${SHOP.zalo.slice(1)}`,
					className: "rounded-full border border-ink px-5 py-3 text-sm",
					children: ["Gọi ", SHOP.zaloDisplay]
				})]
			})
		] })]
	}), related.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 pb-14 md:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl",
			children: "Cùng loại"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: item }, item.slug))
		})]
	}) : null] });
}
//#endregion
export { ProductPage as component };
