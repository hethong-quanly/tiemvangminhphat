export const GRAM_PER_TROY_OZ = 31.1034768;
export const GRAM_PER_LUONG = 37.5;
export const CHI_PER_LUONG = 10;

export type Spot = {
  usdOz: number;
  vndPerGram: number;
  silverUsdOz: number;
  ratio: number;
  fx: number;
  updatedAt: string;
};

export type BoardRow = {
  id: string;
  name: string;
  purity: number;
  buyPremium: number;
  sellPremium: number;
  hint: string;
};

/**
 * Chênh lệch VND/lượng cộng vào (giá thế giới × tuổi) ,
 * hiệu chỉnh theo mặt bằng niêm yết trong nước ngày 19/10/2026.
 * Đây là mức tham khảo, trượt theo giá thế giới — không phải bảng SJC chính thức.
 */
export const BOARD: BoardRow[] = [
  {
    id: "nhan9999",
    name: "Vàng nhẫn 9999",
    purity: 0.9999,
    buyPremium: 7_400_000,
    sellPremium: 12_200_000,
    hint: "Dòng mua bán phổ biến tại quầy",
  },
  {
    id: "nt24",
    name: "Nữ trang 24K",
    purity: 0.9999,
    buyPremium: 7_000_000,
    sellPremium: 11_900_000,
    hint: "99,99%",
  },
  {
    id: "nt99",
    name: "Nữ trang 99%",
    purity: 0.99,
    buyPremium: 4_800_000,
    sellPremium: 11_800_000,
    hint: "23,76K",
  },
  {
    id: "k18",
    name: "Vàng 18K",
    purity: 0.75,
    buyPremium: -700_000,
    sellPremium: 9_100_000,
    hint: "75%",
  },
  {
    id: "k680",
    name: "Vàng 680",
    purity: 0.68,
    buyPremium: -1_550_000,
    sellPremium: 8_250_000,
    hint: "68%",
  },
  {
    id: "k610",
    name: "Vàng 610",
    purity: 0.61,
    buyPremium: -2_400_000,
    sellPremium: 7_400_000,
    hint: "61% — dòng trang sức phổ biến",
  },
  {
    id: "k14",
    name: "Vàng 14K",
    purity: 0.583,
    buyPremium: -2_700_000,
    sellPremium: 7_100_000,
    hint: "58,3%",
  },
  {
    id: "k10",
    name: "Vàng 10K",
    purity: 0.417,
    buyPremium: -4_700_000,
    sellPremium: 5_100_000,
    hint: "41,7%",
  },
];

export function vnd(value: number) {
  return `${new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 0 }).format(Math.round(value))} đ`;
}

export function usd(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);
}

export function worldPerLuong(vndPerGram: number) {
  return vndPerGram * GRAM_PER_LUONG;
}

export function rowPerLuong(spot: Spot, row: BoardRow) {
  const base = worldPerLuong(spot.vndPerGram) * row.purity;
  return {
    buy: base + row.buyPremium,
    sell: base + row.sellPremium,
  };
}

export function perChi(perLuong: number) {
  return perLuong / CHI_PER_LUONG;
}

export function silverPerGram(spot: Spot) {
  return (spot.silverUsdOz * spot.fx) / GRAM_PER_TROY_OZ;
}

export function silverPerLuong(spot: Spot) {
  return silverPerGram(spot) * GRAM_PER_LUONG;
}

export function findRow(id: string) {
  return BOARD.find((row) => row.id === id);
}

export function signedPct(value: number) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
}
