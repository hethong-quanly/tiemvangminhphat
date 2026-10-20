import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useMarket } from "./router-B23PCRo4.mjs";
import { a as perChi, d as vnd, f as worldPerLuong, l as silverPerLuong, o as rowPerLuong, s as signedPct, t as BOARD, u as usd } from "./quotes-CKswpMqF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/live-brief-BpqINoNo.js
var import_jsx_runtime = require_jsx_runtime();
function changeFromSeries(intraday, daily) {
	if (intraday.length > 2) {
		const first = intraday[0]?.p ?? 0;
		const last = intraday[intraday.length - 1]?.p ?? 0;
		if (first > 0) return (last - first) / first * 100;
	}
	if (daily.length > 2) {
		const prev = daily[daily.length - 2]?.c ?? 0;
		const last = daily[daily.length - 1]?.c ?? 0;
		if (prev > 0) return (last - prev) / prev * 100;
	}
	return 0;
}
function PriceTicker({ spot, change }) {
	if (!spot) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-y border-line bg-paper-2 px-4 py-3 text-sm text-muted",
		children: "Đang nối bảng giá thế giới…"
	});
	const items = [
		`Vàng thế giới ${usd(spot.usdOz)}/oz`,
		`Quy đổi ${vnd(worldPerLuong(spot.vndPerGram))}/lượng`,
		`Bạc ${usd(spot.silverUsdOz)}/oz`,
		`Tỷ lệ vàng/bạc ${spot.ratio.toFixed(1)}`,
		`Phiên ${signedPct(change)}`,
		`USD ${new Intl.NumberFormat("vi-VN").format(Math.round(spot.fx))} đ`
	];
	const loop = [...items, ...items];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-hidden border-y border-line bg-ink text-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "ticker-track flex w-max gap-8 py-3",
			children: loop.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm tracking-wide text-brass-soft",
				children: item
			}, `${item}-${index}`))
		})
	});
}
function WorldCards({ spot, change }) {
	const luong = worldPerLuong(spot.vndPerGram);
	const up = change >= 0;
	const cards = [
		{
			label: "Vàng thế giới",
			value: usd(spot.usdOz),
			note: `${signedPct(change)} trong phiên gần`
		},
		{
			label: "Quy đổi / lượng",
			value: vnd(luong),
			note: "37,5g · giá thuần, chưa cộng chênh trong nước"
		},
		{
			label: "Quy đổi / chỉ",
			value: vnd(luong / 10),
			note: "3,75g vàng nguyên chất"
		},
		{
			label: "Bạc thế giới",
			value: usd(spot.silverUsdOz),
			note: `${vnd(silverPerLuong(spot))} / lượng bạc`
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
		children: cards.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "rounded-card border border-line bg-card p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-wide text-muted",
					children: card.label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-display text-3xl text-ink",
					children: card.value
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `mt-2 text-sm ${card.label === "Vàng thế giới" ? up ? "text-up" : "text-down" : "text-muted"}`,
					children: card.note
				})
			]
		}, card.label))
	});
}
function QuoteTable({ spot, compact = false }) {
	const rows = compact ? BOARD.slice(0, 4) : BOARD;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-card border border-line bg-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full text-left text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "bg-paper-2 text-xs tracking-wide text-muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-4 py-3 font-medium",
						children: "Loại"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-4 py-3 font-medium",
						children: "Mua vào"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-4 py-3 font-medium",
						children: "Bán ra"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "hidden px-4 py-3 font-medium md:table-cell",
						children: "Bán / chỉ"
					})
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((row) => {
				const quote = rowPerLuong(spot, row);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-line",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-medium",
								children: row.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-muted",
								children: row.hint
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 text-down",
							children: vnd(quote.buy)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-4 py-3 font-medium",
							children: vnd(quote.sell)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "hidden px-4 py-3 text-muted md:table-cell",
							children: vnd(perChi(quote.sell))
						})
					]
				}, row.id);
			}) })]
		}), compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-line px-4 py-3 text-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/gia-vang",
				className: "text-brass-deep",
				children: "Xem đủ tuổi vàng và biểu đồ"
			})
		}) : null]
	});
}
function PriceStatus({ status, notice, updatedAt }) {
	const time = updatedAt ? new Intl.DateTimeFormat("vi-VN", {
		hour: "2-digit",
		minute: "2-digit",
		day: "2-digit",
		month: "2-digit",
		timeZone: "Asia/Ho_Chi_Minh"
	}).format(new Date(updatedAt)) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "text-sm text-muted",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "live-dot mr-2 inline-block size-2 rounded-full bg-brass align-middle",
				"aria-hidden": "true"
			}),
			status === "loading" && "Đang lấy giá thế giới…",
			status === "error" && (notice ?? "Không lấy được giá lúc này. Gọi quầy hoặc nhắn Zalo để chốt."),
			status === "ready" && `Cập nhật ${time ?? "vừa xong"} · tự làm mới mỗi phút · giá tham khảo`
		]
	});
}
function LiveBrief() {
	const { data, status } = useMarket();
	const spot = data?.spot;
	if (!spot) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-card border border-line bg-card p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-brass-deep",
				children: "BẢN TIN MINH PHÁT"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl",
				children: "Đang lấy giá để viết bản tin"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: status === "error" ? "Nguồn giá chưa trả lời. Các bài dưới đây vẫn đọc được, còn số liệu sẽ hiện khi đường truyền thông." : "Bảng tự làm mới mỗi phút, kể cả ngoài giờ quầy."
			})
		]
	});
	const change = changeFromSeries(data?.intraday ?? [], data?.daily ?? []);
	const direction = change > .05 ? "nhích lên" : change < -.05 ? "hạ" : "đi ngang";
	const luong = worldPerLuong(spot.vndPerGram);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-card border border-line bg-ink p-6 text-paper md:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-brass-soft",
				children: "BẢN TIN 24/24"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-2 font-display text-4xl leading-tight",
				children: [
					"Vàng thế giới ",
					direction,
					" ",
					signedPct(change)
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 max-w-2xl text-sm leading-relaxed text-paper/85",
				children: [
					"Lúc cập nhật, một ounce vàng ở ",
					usd(spot.usdOz),
					", quy đổi khoảng ",
					vnd(luong),
					" một lượng vàng nguyên chất và ",
					vnd(luong / 10),
					" một chỉ. Bạc thế giới ",
					usd(spot.silverUsdOz),
					" một ounce, khoảng",
					" ",
					vnd(silverPerLuong(spot)),
					" một lượng bạc. Tỷ lệ vàng/bạc là ",
					spot.ratio.toFixed(1),
					" — tức đang đổi một ounce vàng lấy chừng ",
					spot.ratio.toFixed(0),
					" ounce bạc. Kim cương không có một giá sàn theo lượng; từng viên vẫn chốt theo nước, độ sạch và giấy kiểm định tại quầy."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-xs text-brass-soft",
				children: "Bản tin do Minh Phát viết từ số liệu thị trường, không chép báo. Giá quầy cộng thêm chênh trong nước."
			})
		]
	});
}
//#endregion
export { WorldCards as a, QuoteTable as i, PriceStatus as n, changeFromSeries as o, PriceTicker as r, LiveBrief as t };
