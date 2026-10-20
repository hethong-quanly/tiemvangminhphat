import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { a as useMarket, c as categories, d as products, s as articles } from "./router-B23PCRo4.mjs";
import { a as WorldCards, i as QuoteTable, n as PriceStatus, o as changeFromSeries, r as PriceTicker, t as LiveBrief } from "./live-brief-BpqINoNo.mjs";
import { t as SHOP } from "./shop-PiakRdz_.mjs";
import { t as SiteFrame } from "./frame-C8JjSUtC.mjs";
import { t as ProductCard } from "./product-card-BGlyUi4D.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BA9WqElT.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const { data, status } = useMarket();
	const spot = data?.spot ?? null;
	const change = changeFromSeries(data?.intraday ?? [], data?.daily ?? []);
	const featured = products.filter((item) => [
		"nhan-tron-9999-1-chi",
		"cap-nhan-cuoi-tron-610",
		"day-xoan-610",
		"nhan-kim-cuong",
		"lac-be-tho",
		"hoa-hong-vang-999"
	].includes(item.slug));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between bg-ink px-5 py-10 text-paper md:px-10 md:py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs tracking-widest text-brass-soft",
						children: ["CẦN THƠ · TỪ ", SHOP.since]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-5xl leading-none md:text-7xl",
							children: ["Vàng đúng tuổi.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block italic text-brass-soft",
								children: "Giữ chữ tín."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 max-w-md text-sm leading-relaxed text-paper/80",
							children: [
								SHOP.legal,
								" tại ",
								SHOP.address,
								". Minh Phát bán vàng nhẫn, trang sức, đá quý và nhận làm theo mẫu — đúng tuổi, đúng cân."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/gia-vang",
								className: "rounded-full bg-brass px-5 py-3 text-sm text-ink",
								children: "Xem bảng giá"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/san-pham",
								className: "rounded-full border border-brass-soft px-5 py-3 text-sm text-paper",
								children: "Bộ sưu tập"
							})]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-10 text-sm text-paper/70",
						children: SHOP.motto
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/media/hero-interior.jpg",
				alt: "Không gian tủ kính của Tiệm Vàng Minh Phát",
				className: "h-80 w-full object-cover md:h-full md:min-h-96"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceTicker, {
			spot,
			change
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-14 md:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-brass-deep",
					children: "GIÁ VÀNG 24/24"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl",
					children: "Bảng theo giá thế giới"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceStatus, {
					status,
					notice: data?.notice ?? null,
					updatedAt: spot?.updatedAt
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: spot ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorldCards, {
						spot,
						change
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteTable, {
						spot,
						compact: true
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-card border border-line bg-card p-6 text-sm text-muted",
					children: [
						"Bảng sẽ hiện khi có số liệu. Trong lúc đó, nhắn Zalo ",
						SHOP.zaloDisplay,
						" để hỏi giá tại quầy."
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-14 md:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-brass-deep",
							children: "BỘ SƯU TẬP"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-4xl",
							children: "Từng loại, nhiều ảnh"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/san-pham",
							className: "text-sm text-brass-deep",
							children: "Tất cả mẫu"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-2 gap-3 md:grid-cols-5",
						children: categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/san-pham",
							search: { loai: category.id },
							className: "group relative aspect-square overflow-hidden rounded-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: category.image,
								alt: "",
								className: "h-full w-full object-cover transition duration-300 group-hover:scale-105"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute inset-x-0 bottom-0 bg-ink/80 px-3 py-3 text-sm text-paper",
								children: category.name
							})]
						}, category.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: featured.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.slug))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-4 md:px-6",
			children: [
				["Tư vấn tận quầy", "Nói rõ tuổi vàng, cân và công trước khi khách quyết."],
				["Làm từ 2013", "Địa chỉ quen của Ninh Kiều, người đại diện Tôn Hồng Tài."],
				["Gửi hàng cả nước", "Chốt mẫu và tiền qua Zalo, rồi gửi đi tỉnh."],
				["Làm theo mẫu", "Mang vàng cũ hoặc ảnh mẫu, thợ làm lại tại xưởng."]
			].map(([title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-2xl",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: body
			})] }, title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-14 md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveBrief, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-4 md:grid-cols-3",
					children: articles.slice(0, 3).map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/tin-tuc/$slug",
						params: { slug: article.slug },
						className: "overflow-hidden rounded-card border border-line bg-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: article.image,
							alt: "",
							className: "h-40 w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-brass-deep",
									children: article.kicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-1 font-display text-2xl leading-tight",
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/tin-tuc",
					className: "mt-4 inline-flex items-center gap-1 text-sm text-brass-deep",
					children: ["Tin vàng, bạc, kim cương ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "grid lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/media/storefront.jpg",
				alt: "Mặt tiền tiệm buổi tối",
				className: "h-72 w-full object-cover lg:h-full"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-paper-2 px-5 py-10 md:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-brass-deep",
						children: "LIÊN HỆ 24/24"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl",
						children: "Quầy đóng, Zalo vẫn mở"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 max-w-md text-sm text-muted",
						children: [
							"Cửa tiệm ",
							SHOP.hours,
							". Ngoài giờ, nhắn ",
							SHOP.zaloName,
							" để hỏi mẫu, giá và giữ món. Máy bàn",
							" ",
							SHOP.shopPhoneDisplay,
							" nghe trong giờ mở cửa."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: SHOP.zaloUrl,
							className: "rounded-full bg-ink px-5 py-3 text-sm text-paper",
							children: "Nhắn Zalo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/lien-he",
							className: "rounded-full border border-ink px-5 py-3 text-sm",
							children: "Xem địa chỉ"
						})]
					})
				]
			})]
		})
	] });
}
//#endregion
export { Home as component };
