import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as useMarket } from "./router-B23PCRo4.mjs";
import { a as perChi, c as silverPerGram, d as vnd, n as GRAM_PER_LUONG, o as rowPerLuong, r as GRAM_PER_TROY_OZ, t as BOARD } from "./quotes-CKswpMqF.mjs";
import { a as WorldCards, i as QuoteTable, n as PriceStatus, o as changeFromSeries, t as LiveBrief } from "./live-brief-BpqINoNo.mjs";
import { t as SHOP } from "./shop-PiakRdz_.mjs";
import { t as SiteFrame } from "./frame-C8JjSUtC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gia-vang-DHW7G6HD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MarketChart({ daily, fx }) {
	const [charts, setCharts] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let stop = false;
		import("../_libs/recharts+[...].mjs").then((n) => n.t).then((mod) => {
			if (!stop) setCharts(mod);
		});
		return () => {
			stop = true;
		};
	}, []);
	if (daily.length < 2) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-muted",
		children: "Chưa đủ điểm để vẽ 6 tháng gần đây."
	});
	const data = daily.map((point) => ({
		label: new Intl.DateTimeFormat("vi-VN", {
			day: "2-digit",
			month: "2-digit"
		}).format(/* @__PURE__ */ new Date(point.t * 1e3)),
		luong: Math.round(point.c * fx / GRAM_PER_TROY_OZ * GRAM_PER_LUONG)
	}));
	if (!charts) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-72 rounded-card bg-paper-2",
		"aria-hidden": "true"
	});
	const { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } = charts;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-72 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
				data,
				margin: {
					top: 8,
					right: 8,
					left: 0,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						stroke: "var(--color-line)",
						vertical: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "label",
						tick: {
							fill: "var(--color-muted)",
							fontSize: 11
						},
						interval: 14,
						axisLine: false,
						tickLine: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						tick: {
							fill: "var(--color-muted)",
							fontSize: 11
						},
						axisLine: false,
						tickLine: false,
						width: 72,
						tickFormatter: (value) => `${Math.round(value / 1e6)}tr`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						formatter: (value) => [`${new Intl.NumberFormat("vi-VN").format(Number(value))} đ`, "Quy đổi / lượng"],
						contentStyle: {
							background: "var(--color-card)",
							border: "1px solid var(--color-line)",
							borderRadius: 12,
							fontSize: 13
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
						type: "monotone",
						dataKey: "luong",
						stroke: "var(--color-brass-deep)",
						fill: "var(--color-brass-soft)",
						strokeWidth: 2
					})
				]
			})
		})
	});
}
function GiaVang() {
	const { data, status } = useMarket();
	const spot = data?.spot ?? null;
	const change = changeFromSeries(data?.intraday ?? [], data?.daily ?? []);
	const [karat, setKarat] = (0, import_react.useState)(BOARD[0]?.id ?? "nhan9999");
	const [chi, setChi] = (0, import_react.useState)("1");
	const estimate = (0, import_react.useMemo)(() => {
		if (!spot) return null;
		const row = BOARD.find((item) => item.id === karat);
		const weight = Number(chi.replace(",", "."));
		if (!row || !Number.isFinite(weight) || weight <= 0) return null;
		const quote = rowPerLuong(spot, row);
		return {
			buy: perChi(quote.buy) * weight,
			sell: perChi(quote.sell) * weight,
			name: row.name
		};
	}, [
		spot,
		karat,
		chi
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-12 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-brass-deep",
				children: "CẬP NHẬT LIÊN TỤC"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 max-w-2xl font-display text-5xl leading-tight",
				children: "Giá vàng, bạc theo giờ thị trường"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 max-w-2xl text-sm text-muted",
				children: [
					"Số thế giới lấy từ thị trường quốc tế và tỷ giá USD. Bảng tuổi vàng là ước tính của Minh Phát để khách theo dõi trước khi đến ",
					SHOP.address,
					". Xác nhận giá qua Zalo ",
					SHOP.zaloDisplay,
					" trước khi chuyển tiền."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceStatus, {
					status,
					notice: data?.notice ?? null,
					updatedAt: spot?.updatedAt
				})
			}),
			spot ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorldCards, {
						spot,
						change
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteTable, { spot }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 lg:grid-cols-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-card border border-line bg-card p-5 lg:col-span-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-3xl",
									children: "Sáu tháng, quy đổi theo tỷ giá hiện tại"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: "Đường giá là đóng cửa vàng thế giới đổi ra đồng một lượng. Tỷ giá lấy mức hôm nay, không phải tỷ giá từng ngày trong quá khứ."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketChart, {
										daily: data?.daily ?? [],
										fx: spot.fx
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "rounded-card border border-line bg-paper-2 p-5 lg:col-span-2",
							onSubmit: (event) => event.preventDefault(),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-3xl",
									children: "Tính nhanh theo chỉ"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mt-4 block text-sm",
									htmlFor: "karat",
									children: "Tuổi vàng"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									id: "karat",
									value: karat,
									onChange: (event) => setKarat(event.target.value),
									className: "mt-1 w-full rounded-2xl border border-line bg-card px-3 py-3",
									children: BOARD.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: row.id,
										children: row.name
									}, row.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mt-4 block text-sm",
									htmlFor: "chi",
									children: "Số chỉ"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "chi",
									inputMode: "decimal",
									value: chi,
									onChange: (event) => setChi(event.target.value),
									className: "mt-1 w-full rounded-2xl border border-line bg-card px-3 py-3"
								}),
								estimate ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-5 space-y-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", { children: ["Mua vào ", estimate.name] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-medium",
											children: vnd(estimate.buy)
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Bán ra" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-medium",
											children: vnd(estimate.sell)
										})]
									})]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm text-muted",
									children: "Nhập số chỉ lớn hơn 0."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 text-xs text-muted",
									children: [
										"Chưa gồm công chế tác nếu làm mới. Bạc thế giới hiện ",
										spot ? vnd(silverPerGram(spot)) : "—",
										" một gram."
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveBrief, {})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 rounded-card border border-line bg-card p-6 text-sm",
				children: [
					"Chưa có số liệu. Gọi ",
					SHOP.zaloDisplay,
					" hoặc ",
					SHOP.shopPhoneDisplay,
					"."
				]
			})
		]
	}) });
}
//#endregion
export { GiaVang as component };
