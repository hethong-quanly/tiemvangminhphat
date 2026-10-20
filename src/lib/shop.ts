export const SHOP = {
  name: "Tiệm Vàng Minh Phát",
  legal: "Công ty TNHH Kinh doanh Vàng Minh Phát",
  taxId: "1801296551",
  owner: "Tôn Hồng Tài",
  since: "2013",
  motto: "Lấy chữ tín làm nền tảng phát triển",
  address: "Số 24 Ngô Quyền, Phường Ninh Kiều, TP. Cần Thơ",
  addressNote: "Địa chỉ quen thuộc cũ: phường Tân An, quận Ninh Kiều",
  mapQuery: "24 Ngô Quyền, Ninh Kiều, Cần Thơ",
  hours: "8:00 – 20:00, tất cả các ngày",
  zaloName: "Mỹ Nhiên",
  zalo: "0934924374",
  zaloDisplay: "0934 924 374",
  shopPhone: "02923819048",
  shopPhoneDisplay: "0292 381 9048",
  extraPhone: "0909780872",
  extraPhoneDisplay: "0909 780 872",
  facebook: "https://www.facebook.com/TiemVangMinhPhatCT/",
  zaloUrl: "https://zalo.me/0934924374",
} as const;

export function vnClock(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Ho_Chi_Minh",
    hour: "numeric",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const rawHour = Number(parts.find((part) => part.type === "hour")?.value ?? "0");
  const minute = parts.find((part) => part.type === "minute")?.value ?? "00";
  const hour = rawHour === 24 ? 0 : rawHour;
  return {
    open: hour >= 8 && hour < 20,
    label: `${String(hour).padStart(2, "0")}:${minute.padStart(2, "0")}`,
  };
}

export function shopIsOpen(now = new Date()) {
  return vnClock(now).open;
}

export function clockLabel(now = new Date()) {
  return vnClock(now).label;
}
