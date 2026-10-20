export type Category = {
  id: string;
  name: string;
  blurb: string;
  image: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  karatId?: string;
  weightChi?: number;
  silverGram?: number;
  fixedPrice?: number;
  images: string[];
  summary: string;
  points: string[];
};

export const categories: Category[] = [
  {
    id: "nhan-9999",
    name: "Vàng nhẫn 9999",
    blurb: "Nhẫn trơn đúng tuổi, dễ tích trữ và mua bán lại.",
    image: "/media/ring-plain.jpg",
  },
  {
    id: "nhan-cuoi",
    name: "Nhẫn cưới",
    blurb: "Cặp trơn, cặp đính đá, vàng 610 và vàng trắng.",
    image: "/media/wedding-bands.jpg",
  },
  {
    id: "day-chuyen",
    name: "Dây chuyền",
    blurb: "Dây xoắn, dây kiểu, mặt trái tim và mặt oval.",
    image: "/media/rope-chain.jpg",
  },
  {
    id: "lac-vong",
    name: "Lắc & vòng",
    blurb: "Lắc tay nữ, lắc bé và vòng đá mắt mèo.",
    image: "/media/bracelet.jpg",
  },
  {
    id: "bong-tai",
    name: "Bông tai",
    blurb: "Nụ đá và khuyên trơn, nhẹ trên tai.",
    image: "/media/studs.jpg",
  },
  {
    id: "da-quy",
    name: "Kim cương & đá quý",
    blurb: "Hột theo nước, giác cắt và giấy kiểm định.",
    image: "/media/diamonds.jpg",
  },
  {
    id: "tre-em",
    name: "Trang sức trẻ em",
    blurb: "Bộ xích, lắc và charm nhỏ cho bé.",
    image: "/media/kids-set.jpg",
  },
  {
    id: "vang-trang",
    name: "Vàng trắng & bạch kim",
    blurb: "Sắc lạnh, hợp nhẫn cưới và gắn hột.",
    image: "/media/white-gold.jpg",
  },
  {
    id: "qua-tang",
    name: "Quà tặng vàng",
    blurb: "Hoa hồng vàng 999 và món nhỏ để biếu.",
    image: "/media/gold-rose.jpg",
  },
  {
    id: "thiet-ke",
    name: "Thiết kế theo yêu cầu",
    blurb: "Làm mới từ mẫu khách đưa hoặc từ vàng cũ.",
    image: "/media/workshop.jpg",
  },
];

export const products: Product[] = [
  {
    slug: "nhan-tron-9999-1-chi",
    name: "Nhẫn trơn 9999 — 1 chỉ",
    category: "nhan-9999",
    karatId: "nhan9999",
    weightChi: 1,
    images: ["/media/ring-plain.jpg", "/media/wedding-bands.jpg", "/media/workshop.jpg"],
    summary: "Nhẫn vàng 9999 bề mặt bóng, trọng lượng 1 chỉ (3,75g). Dòng khách hay chọn để dành.",
    points: ["Tuổi 9999", "1 chỉ = 3,75g", "Mua bán lại theo bảng vàng nhẫn trong ngày", "Có thể xin khắc chữ tại quầy"],
  },
  {
    slug: "nhan-tron-9999-5-phan",
    name: "Nhẫn trơn 9999 — 5 phân",
    category: "nhan-9999",
    karatId: "nhan9999",
    weightChi: 0.5,
    images: ["/media/ring-plain.jpg", "/media/gold-rose.jpg"],
    summary: "Nửa chỉ vàng 9999, phù hợp tích lũy dần hoặc tặng người thân.",
    points: ["5 phân = 1,875g", "Dễ đeo hằng ngày", "Giá bám bảng vàng nhẫn"],
  },
  {
    slug: "nhan-tron-9999-2-chi",
    name: "Nhẫn trơn 9999 — 2 chỉ",
    category: "nhan-9999",
    karatId: "nhan9999",
    weightChi: 2,
    images: ["/media/signet.jpg", "/media/ring-plain.jpg"],
    summary: "Nhẫn bản dày hơn, 2 chỉ vàng 9999, dành cho khách muốn gom một món.",
    points: ["2 chỉ = 7,5g", "Bản vừa tay nam và nữ", "Cân đối trước khi giao"],
  },
  {
    slug: "cap-nhan-cuoi-tron-610",
    name: "Cặp nhẫn cưới trơn 610",
    category: "nhan-cuoi",
    karatId: "k610",
    weightChi: 2,
    images: ["/media/wedding-bands.jpg", "/media/workshop.jpg", "/media/ring-plain.jpg"],
    summary: "Cặp nhẫn cưới vàng 610, lòng nhẵn, ước tính khoảng 2 chỉ cho cả cặp. Chỉnh size tại tiệm.",
    points: ["Vàng 610 (61%)", "Đo ni tay miễn phí", "Khắc tên và ngày cưới", "Làm trong ngày nếu còn phôi"],
  },
  {
    slug: "cap-nhan-cuoi-dinh-da",
    name: "Cặp nhẫn cưới đính đá",
    category: "nhan-cuoi",
    karatId: "k610",
    weightChi: 1.6,
    images: ["/media/diamond-ring.jpg", "/media/wedding-bands.jpg", "/media/diamonds.jpg"],
    summary: "Một chiếc trơn, một chiếc đính hột. Phần vàng ước tính 1,6 chỉ; tiền hột tính riêng theo size.",
    points: ["Chọn nước hột tại quầy", "Có thể nâng size hột", "Giá trên web là phần vàng, chưa gồm hột"],
  },
  {
    slug: "nhan-nam-mat-tron",
    name: "Nhẫn nam mặt trơn",
    category: "nhan-cuoi",
    karatId: "k610",
    weightChi: 1.5,
    images: ["/media/signet.jpg", "/media/ring-plain.jpg", "/media/workshop.jpg"],
    summary: "Nhẫn nam mặt oval trơn, khoảng 1,5 chỉ vàng 610. Có thể khắc ký tự riêng.",
    points: ["Bản dày, dễ đeo", "Chưa khắc sẵn chữ", "Làm theo size tay"],
  },
  {
    slug: "hoa-hong-vang-999",
    name: "Hoa hồng vàng 999 — 1 phân",
    category: "qua-tang",
    karatId: "nt24",
    weightChi: 0.1,
    images: ["/media/gold-rose.jpg", "/media/heart.jpg", "/media/ring-plain.jpg"],
    summary: "Hoa hồng vàng 999 khoảng 1 phân, món quà nhỏ tiệm hay giới thiệu.",
    points: ["1 phân = 0,375g", "Vàng 999", "Gói hộp khi biếu"],
  },
  {
    slug: "day-xoan-610",
    name: "Dây chuyền xoắn 610",
    category: "day-chuyen",
    karatId: "k610",
    weightChi: 2.5,
    images: ["/media/rope-chain.jpg", "/media/curb-chain.jpg", "/media/heart.jpg"],
    summary: "Dây xoắn kiểu Ý, vàng 610, khoảng 2,5 chỉ. Có thể rút ngắn theo cổ.",
    points: ["Khóa chắc", "Nhiều độ dài", "Đeo riêng hoặc kèm mặt"],
  },
  {
    slug: "day-mat-trai-tim",
    name: "Dây mặt trái tim",
    category: "day-chuyen",
    karatId: "k610",
    weightChi: 1.2,
    images: ["/media/heart.jpg", "/media/curb-chain.jpg", "/media/rope-chain.jpg"],
    summary: "Dây mì kèm mặt trái tim trơn, khoảng 1,2 chỉ vàng 610.",
    points: ["Mặt không đính đá", "Phù hợp tặng", "Đổi độ dài dây được"],
  },
  {
    slug: "day-kieu-mat-oval",
    name: "Dây kiểu mặt oval",
    category: "day-chuyen",
    karatId: "k610",
    weightChi: 2,
    images: ["/media/curb-chain.jpg", "/media/rope-chain.jpg", "/media/bracelet.jpg"],
    summary: "Dây mắt xích kèm mặt oval trơn, khoảng 2 chỉ. Mẫu đeo ban ngày.",
    points: ["Vàng 610", "Mặt nhẵn", "Có bán lẻ dây hoặc mặt"],
  },
  {
    slug: "lac-tay-nu-610",
    name: "Lắc tay nữ 610",
    category: "lac-vong",
    karatId: "k610",
    weightChi: 2,
    images: ["/media/bracelet.jpg", "/media/rabbit.jpg", "/media/kids-set.jpg"],
    summary: "Lắc tay mắt lúa mạch, khoảng 2 chỉ vàng 610. Chỉnh size cổ tay tại tiệm.",
    points: ["Khóa hộp", "Bản vừa", "Đánh bóng miễn phí lần đầu"],
  },
  {
    slug: "lac-be-tho",
    name: "Lắc bé thỏ",
    category: "tre-em",
    karatId: "k610",
    weightChi: 0.6,
    images: ["/media/rabbit.jpg", "/media/kids-set.jpg", "/media/bracelet.jpg"],
    summary: "Lắc trẻ em charm thỏ nhỏ, khoảng 6 phân vàng 610. Tiệm có bán lẻ từng món trong bộ.",
    points: ["Nhẹ tay bé", "Charm thỏ", "Chọn size  theo tuổi"],
  },
  {
    slug: "bo-tre-em-610",
    name: "Bộ trẻ em 610",
    category: "tre-em",
    karatId: "k610",
    weightChi: 1.2,
    images: ["/media/kids-set.jpg", "/media/rabbit.jpg", "/media/studs.jpg"],
    summary: "Bộ dây, lắc và bông nhỏ. Ước tính 1,2 chỉ cho cả bộ, có thể mua từng món.",
    points: ["Bán lẻ được", "Vàng 610", "Gói hộp sẵn"],
  },
  {
    slug: "vong-da-mat-meo",
    name: "Vòng đá mắt mèo",
    category: "da-quy",
    fixedPrice: 150_000,
    images: ["/media/cateye.jpg", "/media/diamonds.jpg", "/media/silver.jpg"],
    summary: "Vòng hạt mắt mèo xanh nhạt. Tiệm thường còn ni 49, 52, 53, 54. Giá đá, không tính theo tuổi vàng.",
    points: ["Xanh dương nhạt", "Nhiều size cổ tay", "Giá tham khảo từ 150.000đ / vòng"],
  },
  {
    slug: "bong-tai-nu",
    name: "Bông tai nụ",
    category: "bong-tai",
    karatId: "k610",
    weightChi: 0.4,
    images: ["/media/studs.jpg", "/media/diamonds.jpg", "/media/hoops.jpg"],
    summary: "Đôi nụ vàng gắn hột nhỏ. Phần vàng khoảng 4 phân; tiền hột xem trực tiếp.",
    points: ["Nhẹ", "Đeo mỗi ngày", "Kiểm tra khóa bướm trước khi giao"],
  },
  {
    slug: "bong-tai-khoen",
    name: "Bông tai khuyên 610",
    category: "bong-tai",
    karatId: "k610",
    weightChi: 0.8,
    images: ["/media/hoops.jpg", "/media/studs.jpg", "/media/bracelet.jpg"],
    summary: "Đôi khuyên trơn cỡ vừa, khoảng 8 phân vàng 610.",
    points: ["Khuyên kín", "Không đính đá", "Đánh bóng được"],
  },
  {
    slug: "nhan-kim-cuong",
    name: "Nhẫn kim cương",
    category: "da-quy",
    karatId: "k18",
    weightChi: 0.5,
    images: ["/media/diamond-ring.jpg", "/media/diamonds.jpg", "/media/studs.jpg"],
    summary: "Nhẫn vàng 18K gắn một viên tròn. Giá web chỉ là phần vàng thân nhẫn; viên tính theo ly, nước và giấy.",
    points: ["Xem viên dưới đèn", "Có giấy thì đối chiếu mã", "Đổi size trong ngày"],
  },
  {
    slug: "cap-nhan-vang-trang",
    name: "Cặp nhẫn vàng trắng",
    category: "vang-trang",
    karatId: "k18",
    weightChi: 1.6,
    images: ["/media/white-gold.jpg", "/media/wedding-bands.jpg", "/media/diamond-ring.jpg"],
    summary: "Cặp nhẫn cưới sắc trắng, vàng 18K, khoảng 1,6 chỉ cả cặp. Có viền milgrain nếu khách chọn.",
    points: ["18K vàng trắng", "Si mạ rhodium khi làm mới", "Đo ni miễn phí"],
  },
  {
    slug: "day-bac",
    name: "Dây bạc",
    category: "lac-vong",
    silverGram: 8,
    images: ["/media/silver.jpg", "/media/rope-chain.jpg", "/media/cateye.jpg"],
    summary: "Dây bạc khoảng 8g. Giá tham khảo theo bạc thế giới cộng công, chốt qua Zalo trong ngày.",
    points: ["Bạc 925 khi có tem", "Dễ oxi hóa, tiệm hướng dẫn bảo quản", "Không cộng vào bảng vàng"],
  },
  {
    slug: "thiet-ke-theo-yeu-cau",
    name: "Thiết kế theo yêu cầu",
    category: "thiet-ke",
    images: ["/media/workshop.jpg", "/media/hero-interior.jpg", "/media/gold-rose.jpg"],
    summary: "Mang vàng cũ hoặc chọn mẫu. Thợ chốt tuổi, trọng lượng và công trước khi làm.",
    points: ["Nhận vàng cũ", "Vẽ mẫu đơn giản tại quầy", "Hẹn ngày lấy rõ ràng", "Ship toàn quốc sau khi chốt"],
  },
];

export function categoryById(id: string) {
  return categories.find((item) => item.id === id);
}

export function productBySlug(slug: string) {
  return products.find((item) => item.slug === slug);
}

export function productsIn(category: string) {
  if (category === "tat-ca") return products;
  return products.filter((item) => item.category === category);
}
