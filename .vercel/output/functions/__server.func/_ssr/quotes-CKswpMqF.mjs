//#region node_modules/.nitro/vite/services/ssr/assets/quotes-CKswpMqF.js
var GRAM_PER_TROY_OZ = 31.1034768;
var GRAM_PER_LUONG = 37.5;
/**
* Chênh lệch VND/lượng cộng vào (giá thế giới × tuổi) ,
* hiệu chỉnh theo mặt bằng niêm yết trong nước ngày 19/10/2026.
* Đây là mức tham khảo, trượt theo giá thế giới — không phải bảng SJC chính thức.
*/
var BOARD = [
	{
		id: "nhan9999",
		name: "Vàng nhẫn 9999",
		purity: .9999,
		buyPremium: 74e5,
		sellPremium: 122e5,
		hint: "Dòng mua bán phổ biến tại quầy"
	},
	{
		id: "nt24",
		name: "Nữ trang 24K",
		purity: .9999,
		buyPremium: 7e6,
		sellPremium: 119e5,
		hint: "99,99%"
	},
	{
		id: "nt99",
		name: "Nữ trang 99%",
		purity: .99,
		buyPremium: 48e5,
		sellPremium: 118e5,
		hint: "23,76K"
	},
	{
		id: "k18",
		name: "Vàng 18K",
		purity: .75,
		buyPremium: -7e5,
		sellPremium: 91e5,
		hint: "75%"
	},
	{
		id: "k680",
		name: "Vàng 680",
		purity: .68,
		buyPremium: -155e4,
		sellPremium: 825e4,
		hint: "68%"
	},
	{
		id: "k610",
		name: "Vàng 610",
		purity: .61,
		buyPremium: -24e5,
		sellPremium: 74e5,
		hint: "61% — dòng trang sức phổ biến"
	},
	{
		id: "k14",
		name: "Vàng 14K",
		purity: .583,
		buyPremium: -27e5,
		sellPremium: 71e5,
		hint: "58,3%"
	},
	{
		id: "k10",
		name: "Vàng 10K",
		purity: .417,
		buyPremium: -47e5,
		sellPremium: 51e5,
		hint: "41,7%"
	}
];
function vnd(value) {
	return `${new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 0 }).format(Math.round(value))} đ`;
}
function usd(value) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 2
	}).format(value);
}
function worldPerLuong(vndPerGram) {
	return vndPerGram * GRAM_PER_LUONG;
}
function rowPerLuong(spot, row) {
	const base = worldPerLuong(spot.vndPerGram) * row.purity;
	return {
		buy: base + row.buyPremium,
		sell: base + row.sellPremium
	};
}
function perChi(perLuong) {
	return perLuong / 10;
}
function silverPerGram(spot) {
	return spot.silverUsdOz * spot.fx / GRAM_PER_TROY_OZ;
}
function silverPerLuong(spot) {
	return silverPerGram(spot) * GRAM_PER_LUONG;
}
function findRow(id) {
	return BOARD.find((row) => row.id === id);
}
function signedPct(value) {
	return `${value > 0 ? "+" : ""}${value.toFixed(2)}%`;
}
//#endregion
export { perChi as a, silverPerGram as c, vnd as d, worldPerLuong as f, findRow as i, silverPerLuong as l, GRAM_PER_LUONG as n, rowPerLuong as o, GRAM_PER_TROY_OZ as r, signedPct as s, BOARD as t, usd as u };
