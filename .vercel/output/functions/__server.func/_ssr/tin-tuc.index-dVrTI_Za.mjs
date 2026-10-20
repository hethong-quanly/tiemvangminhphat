import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useMarket, s as articles } from "./router-B23PCRo4.mjs";
import { t as LiveBrief } from "./live-brief-BpqINoNo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tin-tuc.index-dVrTI_Za.js
var import_jsx_runtime = require_jsx_runtime();
function formatWhen(value) {
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return "";
	return new Intl.DateTimeFormat("vi-VN", {
		day: "2-digit",
		month: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		timeZone: "Asia/Ho_Chi_Minh"
	}).format(date);
}
function News() {
	const { data } = useMarket();
	const headlines = data?.headlines ?? [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-12 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-brass-deep",
				children: "THỊ TRƯỜNG"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-5xl",
				children: "Vàng, bạc và kim cương"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-sm text-muted",
				children: "Bản tin đầu trang tự viết từ giá thế giới. Bên dưới là bài của tiệm, rồi các tít báo đang chạy — bấm để đọc tại nguồn, Minh Phát không đăng lại nguyên văn."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveBrief, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 md:grid-cols-2",
				children: articles.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/tin-tuc/$slug",
					params: { slug: article.slug },
					className: "grid overflow-hidden rounded-card border border-line bg-card sm:grid-cols-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: article.image,
						alt: "",
						className: "h-40 w-full object-cover sm:col-span-2 sm:h-full"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4 sm:col-span-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-brass-deep",
								children: [
									article.kicker,
									" · ",
									article.minutes,
									" phút"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-1 font-display text-3xl leading-tight",
								children: article.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: article.dek
							})
						]
					})]
				}, article.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-14 font-display text-4xl",
				children: "Báo chí đang đưa"
			}),
			headlines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: "Chưa tải được dòng tin báo. Bản tin giá phía trên vẫn chạy độc lập."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 divide-y divide-line rounded-card border border-line bg-card",
				children: headlines.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: item.link,
					target: "_blank",
					rel: "noreferrer",
					className: "block px-4 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [item.source, formatWhen(item.publishedAt) ? ` · ${formatWhen(item.publishedAt)}` : ""]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-medium",
							children: item.title
						}),
						item.summary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 line-clamp-2 text-sm text-muted",
							children: item.summary
						}) : null
					]
				}) }, item.link))
			})
		]
	});
}
//#endregion
export { News as component };
