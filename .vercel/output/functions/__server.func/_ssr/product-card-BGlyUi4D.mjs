import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useMarket, l as categoryById } from "./router-B23PCRo4.mjs";
import { a as perChi, d as vnd, i as findRow, o as rowPerLuong } from "./quotes-CKswpMqF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-BGlyUi4D.js
var import_jsx_runtime = require_jsx_runtime();
function fakeSpot(vndPerGram, silverUsd, fx) {
	return {
		usdOz: 0,
		vndPerGram,
		silverUsdOz: silverUsd,
		ratio: 0,
		fx,
		updatedAt: ""
	};
}
function estimateProduct(product, vndPerGram, silverUsd, fx) {
	if (product.fixedPrice) return {
		label: "Giá vòng",
		value: vnd(product.fixedPrice)
	};
	if (product.silverGram) {
		const gram = silverUsd * fx / 31.1034768;
		return {
			label: "Bạc thế giới, chưa công",
			value: vnd(gram * product.silverGram)
		};
	}
	if (product.karatId && product.weightChi) {
		const row = findRow(product.karatId);
		if (!row) return null;
		const sell = perChi(rowPerLuong(fakeSpot(vndPerGram, silverUsd, fx), row).sell);
		return {
			label: "Vàng bán ra, chưa công",
			value: vnd(sell * product.weightChi)
		};
	}
	return null;
}
function ProductCard({ product }) {
	const { data } = useMarket();
	const spot = data?.spot;
	const price = spot ? estimateProduct(product, spot.vndPerGram, spot.silverUsdOz, spot.fx) : product.fixedPrice ? {
		label: "Giá vòng",
		value: vnd(product.fixedPrice)
	} : null;
	const category = categoryById(product.category);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/san-pham/$slug",
		params: { slug: product.slug },
		className: "group flex flex-col overflow-hidden rounded-card border border-line bg-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "aspect-square overflow-hidden bg-paper-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.images[0],
				alt: product.name,
				className: "h-full w-full object-cover transition duration-300 group-hover:scale-105"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-brass-deep",
					children: category?.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 font-display text-2xl leading-tight",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 line-clamp-2 text-sm text-muted",
					children: product.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm",
					children: price ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs text-muted",
						children: price.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: price.value
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: "Báo giá khi chốt mẫu"
					})
				})
			]
		})]
	});
}
//#endregion
export { estimateProduct as n, ProductCard as t };
