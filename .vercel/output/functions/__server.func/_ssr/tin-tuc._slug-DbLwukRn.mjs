import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route, o as articleBySlug, s as articles } from "./router-B23PCRo4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tin-tuc._slug-DbLwukRn.js
var import_jsx_runtime = require_jsx_runtime();
function ArticlePage() {
	const { slug } = Route.useParams();
	const article = articleBySlug(slug);
	if (!article) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-3xl px-4 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "Không thấy bài này"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/tin-tuc",
			className: "mt-4 inline-block text-brass-deep",
			children: "Về trang tin"
		})]
	});
	const more = articles.filter((item) => item.slug !== article.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-4 py-12 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-brass-deep",
				children: article.kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl leading-tight",
				children: article.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: article.dek
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: article.image,
				alt: "",
				className: "mt-6 aspect-video w-full rounded-card object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-8",
				children: article.sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [section.heading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: section.heading
				}) : null, section.paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-base leading-relaxed",
					children: paragraph
				}, paragraph.slice(0, 40)))] }, section.heading ?? section.paragraphs[0]))
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-3xl px-4 pb-14 md:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl",
			children: "Đọc tiếp"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 space-y-2",
			children: more.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/tin-tuc/$slug",
				params: { slug: item.slug },
				className: "text-brass-deep",
				children: item.title
			}) }, item.slug))
		})]
	})] });
}
//#endregion
export { ArticlePage as component };
