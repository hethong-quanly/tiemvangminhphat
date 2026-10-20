import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as categories, d as products, i as Route$5 } from "./router-B23PCRo4.mjs";
import { t as cn } from "./cn-Ccejyh36.mjs";
import { t as ProductCard } from "./product-card-BGlyUi4D.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/san-pham.index-BHcYr3zz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Catalog() {
	const { loai = "tat-ca" } = Route$5.useSearch();
	const [query, setQuery] = (0, import_react.useState)("");
	const list = (0, import_react.useMemo)(() => {
		const base = loai === "tat-ca" ? products : products.filter((item) => item.category === loai);
		const needle = query.trim().toLowerCase();
		if (!needle) return base;
		return base.filter((item) => `${item.name} ${item.summary}`.toLowerCase().includes(needle));
	}, [loai, query]);
	const current = categories.find((item) => item.id === loai);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-12 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-brass-deep",
				children: "BỘ SƯU TẬP"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl",
				children: current ? current.name : "Tất cả sản phẩm"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-sm text-muted",
				children: current?.blurb ?? "Mỗi mẫu có vài ảnh và giá vàng ước tính theo bảng trong ngày. Công và hột đá tính khi chốt."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-6 block max-w-md text-sm",
				htmlFor: "q",
				children: ["Tìm mẫu", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "q",
					value: query,
					onChange: (event) => setQuery(event.target.value),
					placeholder: "Nhẫn cưới, dây, bé thỏ…",
					className: "mt-1 w-full rounded-2xl border border-line bg-card px-3 py-3"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex gap-2 overflow-x-auto pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/san-pham",
					search: {},
					className: cn("shrink-0 rounded-full border border-line px-4 py-2 text-sm", loai === "tat-ca" && "border-ink bg-ink text-paper"),
					children: "Tất cả"
				}), categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/san-pham",
					search: { loai: category.id },
					className: cn("shrink-0 rounded-full border border-line px-4 py-2 text-sm", loai === category.id && "border-ink bg-ink text-paper"),
					children: category.name
				}, category.id))]
			}),
			list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-sm text-muted",
				children: "Không có mẫu khớp. Thử loại khác hoặc nhắn Zalo để hỏi mẫu chưa lên web."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.slug))
			})
		]
	});
}
//#endregion
export { Catalog as component };
