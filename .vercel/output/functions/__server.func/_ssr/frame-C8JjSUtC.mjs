import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, i as MessageCircle, r as Phone, t as X } from "../_libs/lucide-react.mjs";
import { n as clockLabel, r as shopIsOpen, t as SHOP } from "./shop-PiakRdz_.mjs";
import { t as cn } from "./cn-Ccejyh36.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/frame-C8JjSUtC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactDock() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink text-paper md:inset-x-auto md:right-5 md:bottom-5 md:w-auto md:rounded-full md:border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-stretch md:max-w-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: SHOP.zaloUrl,
				className: "flex flex-1 items-center justify-center gap-2 px-4 py-3 text-sm md:rounded-l-full md:px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
					className: "size-4",
					"aria-hidden": "true"
				}), "Zalo 24/24"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: `tel:+84${SHOP.zalo.slice(1)}`,
				className: "flex flex-1 items-center justify-center gap-2 border-l border-white/15 px-4 py-3 text-sm md:rounded-r-full md:px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
						className: "size-4",
						"aria-hidden": "true"
					}),
					"Gọi ",
					SHOP.zaloDisplay
				]
			})]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line bg-ink text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl",
							children: "Minh Phát"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-sm text-sm text-brass-soft",
							children: SHOP.motto
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-paper/80",
							children: SHOP.legal
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-paper/70",
							children: ["MST ", SHOP.taxId]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-brass-soft",
						children: "ĐẾN TIỆM"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm",
						children: SHOP.address
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-paper/70",
						children: SHOP.addressNote
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm",
						children: ["Quầy ", SHOP.hours]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-brass-soft",
						children: "24/24"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "mt-3 block text-sm",
						href: SHOP.zaloUrl,
						children: [
							"Zalo ",
							SHOP.zaloName,
							" · ",
							SHOP.zaloDisplay
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "mt-2 block text-sm",
						href: `tel:+84${SHOP.shopPhone.slice(1)}`,
						children: ["Máy bàn ", SHOP.shopPhoneDisplay]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "mt-2 block text-sm",
						href: SHOP.facebook,
						children: "Facebook tiệm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/lien-he",
						className: "mt-4 inline-block text-sm text-brass-soft",
						children: "Gửi lời nhắn"
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto max-w-6xl px-4 py-4 text-xs leading-relaxed text-paper/60 md:px-6",
				children: "Giá trên trang là mức tham khảo, tự trượt theo giá vàng và bạc thế giới cùng chênh lệch thị trường hiệu chỉnh ngày 19/10/2026. Không phải bảng niêm yết SJC. Giá mua bán chính thức được xác nhận tại quầy hoặc qua Zalo."
			})
		})]
	});
}
var links = [
	{
		to: "/",
		label: "Trang chủ",
		exact: true
	},
	{
		to: "/gia-vang",
		label: "Giá vàng",
		exact: false
	},
	{
		to: "/san-pham",
		label: "Sản phẩm",
		exact: false
	},
	{
		to: "/tin-tuc",
		label: "Tin tức",
		exact: false
	},
	{
		to: "/gioi-thieu",
		label: "Về tiệm",
		exact: false
	},
	{
		to: "/lien-he",
		label: "Liên hệ",
		exact: false
	}
];
function SiteHeader() {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const [now, setNow] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setNow(/* @__PURE__ */ new Date());
		const timer = window.setInterval(() => setNow(/* @__PURE__ */ new Date()), 3e4);
		return () => window.clearInterval(timer);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	const openNow = now ? shopIsOpen(now) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 md:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-11 shrink-0 place-items-center rounded-full border border-brass font-display text-lg text-brass-deep",
							children: "MP"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-xl tracking-wide text-ink",
								children: "Minh Phát"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted",
								children: "Vàng · Cần Thơ"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "ml-auto hidden items-center gap-1 lg:flex",
						"aria-label": "Chính",
						children: links.map((item) => {
							const active = item.exact ? pathname === item.to : pathname === item.to || pathname.startsWith(`${item.to}/`);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: cn("rounded-full px-3 py-2 text-sm text-ink-soft", active && "bg-ink text-paper"),
								children: item.label
							}, item.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:+84${SHOP.zalo.slice(1)}`,
						className: "ml-auto hidden items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm text-paper lg:ml-2 lg:inline-flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							className: "size-4",
							"aria-hidden": "true"
						}), SHOP.zaloDisplay]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "ml-auto grid size-11 place-items-center rounded-full border border-line lg:hidden",
						"aria-expanded": open,
						"aria-label": open ? "Đóng menu" : "Mở menu",
						onClick: () => setOpen((value) => !value),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-line/80 bg-paper-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-2 text-xs text-muted md:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("live-dot size-2 rounded-full", openNow === false ? "bg-brass" : "bg-up"),
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [now ? `${clockLabel(now)} · Cần Thơ · ${openNow ? "Quầy đang mở" : "Ngoài giờ quầy"}` : "Giờ Cần Thơ", " · Zalo trực 24/24"] })]
				})
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "border-t border-line bg-paper px-4 py-3 lg:hidden",
				"aria-label": "Di động",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-1",
					children: links.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "block rounded-card px-3 py-3 text-base",
						children: item.label
					}) }, item.to))
				})
			}) : null
		]
	});
}
function SiteFrame({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "pb-24 md:pb-0",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactDock, {})
		]
	});
}
//#endregion
export { SiteFrame as t };
