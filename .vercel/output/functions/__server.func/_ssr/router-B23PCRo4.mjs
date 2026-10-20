import { i as __toESM } from "../_runtime.mjs";
import { S as require_jsx_runtime, Y as require_react, _ as lazyRouteComponent, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { n as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-C-u9Iv9h.js
var categories = [
	{
		id: "nhan-9999",
		name: "Vàng nhẫn 9999",
		blurb: "Nhẫn trơn đúng tuổi, dễ tích trữ và mua bán lại.",
		image: "/media/ring-plain.jpg"
	},
	{
		id: "nhan-cuoi",
		name: "Nhẫn cưới",
		blurb: "Cặp trơn, cặp đính đá, vàng 610 và vàng trắng.",
		image: "/media/wedding-bands.jpg"
	},
	{
		id: "day-chuyen",
		name: "Dây chuyền",
		blurb: "Dây xoắn, dây kiểu, mặt trái tim và mặt oval.",
		image: "/media/rope-chain.jpg"
	},
	{
		id: "lac-vong",
		name: "Lắc & vòng",
		blurb: "Lắc tay nữ, lắc bé và vòng đá mắt mèo.",
		image: "/media/bracelet.jpg"
	},
	{
		id: "bong-tai",
		name: "Bông tai",
		blurb: "Nụ đá và khuyên trơn, nhẹ trên tai.",
		image: "/media/studs.jpg"
	},
	{
		id: "da-quy",
		name: "Kim cương & đá quý",
		blurb: "Hột theo nước, giác cắt và giấy kiểm định.",
		image: "/media/diamonds.jpg"
	},
	{
		id: "tre-em",
		name: "Trang sức trẻ em",
		blurb: "Bộ xích, lắc và charm nhỏ cho bé.",
		image: "/media/kids-set.jpg"
	},
	{
		id: "vang-trang",
		name: "Vàng trắng & bạch kim",
		blurb: "Sắc lạnh, hợp nhẫn cưới và gắn hột.",
		image: "/media/white-gold.jpg"
	},
	{
		id: "qua-tang",
		name: "Quà tặng vàng",
		blurb: "Hoa hồng vàng 999 và món nhỏ để biếu.",
		image: "/media/gold-rose.jpg"
	},
	{
		id: "thiet-ke",
		name: "Thiết kế theo yêu cầu",
		blurb: "Làm mới từ mẫu khách đưa hoặc từ vàng cũ.",
		image: "/media/workshop.jpg"
	}
];
var products = [
	{
		slug: "nhan-tron-9999-1-chi",
		name: "Nhẫn trơn 9999 — 1 chỉ",
		category: "nhan-9999",
		karatId: "nhan9999",
		weightChi: 1,
		images: [
			"/media/ring-plain.jpg",
			"/media/wedding-bands.jpg",
			"/media/workshop.jpg"
		],
		summary: "Nhẫn vàng 9999 bề mặt bóng, trọng lượng 1 chỉ (3,75g). Dòng khách hay chọn để dành.",
		points: [
			"Tuổi 9999",
			"1 chỉ = 3,75g",
			"Mua bán lại theo bảng vàng nhẫn trong ngày",
			"Có thể xin khắc chữ tại quầy"
		]
	},
	{
		slug: "nhan-tron-9999-5-phan",
		name: "Nhẫn trơn 9999 — 5 phân",
		category: "nhan-9999",
		karatId: "nhan9999",
		weightChi: .5,
		images: ["/media/ring-plain.jpg", "/media/gold-rose.jpg"],
		summary: "Nửa chỉ vàng 9999, phù hợp tích lũy dần hoặc tặng người thân.",
		points: [
			"5 phân = 1,875g",
			"Dễ đeo hằng ngày",
			"Giá bám bảng vàng nhẫn"
		]
	},
	{
		slug: "nhan-tron-9999-2-chi",
		name: "Nhẫn trơn 9999 — 2 chỉ",
		category: "nhan-9999",
		karatId: "nhan9999",
		weightChi: 2,
		images: ["/media/signet.jpg", "/media/ring-plain.jpg"],
		summary: "Nhẫn bản dày hơn, 2 chỉ vàng 9999, dành cho khách muốn gom một món.",
		points: [
			"2 chỉ = 7,5g",
			"Bản vừa tay nam và nữ",
			"Cân đối trước khi giao"
		]
	},
	{
		slug: "cap-nhan-cuoi-tron-610",
		name: "Cặp nhẫn cưới trơn 610",
		category: "nhan-cuoi",
		karatId: "k610",
		weightChi: 2,
		images: [
			"/media/wedding-bands.jpg",
			"/media/workshop.jpg",
			"/media/ring-plain.jpg"
		],
		summary: "Cặp nhẫn cưới vàng 610, lòng nhẵn, ước tính khoảng 2 chỉ cho cả cặp. Chỉnh size tại tiệm.",
		points: [
			"Vàng 610 (61%)",
			"Đo ni tay miễn phí",
			"Khắc tên và ngày cưới",
			"Làm trong ngày nếu còn phôi"
		]
	},
	{
		slug: "cap-nhan-cuoi-dinh-da",
		name: "Cặp nhẫn cưới đính đá",
		category: "nhan-cuoi",
		karatId: "k610",
		weightChi: 1.6,
		images: [
			"/media/diamond-ring.jpg",
			"/media/wedding-bands.jpg",
			"/media/diamonds.jpg"
		],
		summary: "Một chiếc trơn, một chiếc đính hột. Phần vàng ước tính 1,6 chỉ; tiền hột tính riêng theo size.",
		points: [
			"Chọn nước hột tại quầy",
			"Có thể nâng size hột",
			"Giá trên web là phần vàng, chưa gồm hột"
		]
	},
	{
		slug: "nhan-nam-mat-tron",
		name: "Nhẫn nam mặt trơn",
		category: "nhan-cuoi",
		karatId: "k610",
		weightChi: 1.5,
		images: [
			"/media/signet.jpg",
			"/media/ring-plain.jpg",
			"/media/workshop.jpg"
		],
		summary: "Nhẫn nam mặt oval trơn, khoảng 1,5 chỉ vàng 610. Có thể khắc ký tự riêng.",
		points: [
			"Bản dày, dễ đeo",
			"Chưa khắc sẵn chữ",
			"Làm theo size tay"
		]
	},
	{
		slug: "hoa-hong-vang-999",
		name: "Hoa hồng vàng 999 — 1 phân",
		category: "qua-tang",
		karatId: "nt24",
		weightChi: .1,
		images: [
			"/media/gold-rose.jpg",
			"/media/heart.jpg",
			"/media/ring-plain.jpg"
		],
		summary: "Hoa hồng vàng 999 khoảng 1 phân, món quà nhỏ tiệm hay giới thiệu.",
		points: [
			"1 phân = 0,375g",
			"Vàng 999",
			"Gói hộp khi biếu"
		]
	},
	{
		slug: "day-xoan-610",
		name: "Dây chuyền xoắn 610",
		category: "day-chuyen",
		karatId: "k610",
		weightChi: 2.5,
		images: [
			"/media/rope-chain.jpg",
			"/media/curb-chain.jpg",
			"/media/heart.jpg"
		],
		summary: "Dây xoắn kiểu Ý, vàng 610, khoảng 2,5 chỉ. Có thể rút ngắn theo cổ.",
		points: [
			"Khóa chắc",
			"Nhiều độ dài",
			"Đeo riêng hoặc kèm mặt"
		]
	},
	{
		slug: "day-mat-trai-tim",
		name: "Dây mặt trái tim",
		category: "day-chuyen",
		karatId: "k610",
		weightChi: 1.2,
		images: [
			"/media/heart.jpg",
			"/media/curb-chain.jpg",
			"/media/rope-chain.jpg"
		],
		summary: "Dây mì kèm mặt trái tim trơn, khoảng 1,2 chỉ vàng 610.",
		points: [
			"Mặt không đính đá",
			"Phù hợp tặng",
			"Đổi độ dài dây được"
		]
	},
	{
		slug: "day-kieu-mat-oval",
		name: "Dây kiểu mặt oval",
		category: "day-chuyen",
		karatId: "k610",
		weightChi: 2,
		images: [
			"/media/curb-chain.jpg",
			"/media/rope-chain.jpg",
			"/media/bracelet.jpg"
		],
		summary: "Dây mắt xích kèm mặt oval trơn, khoảng 2 chỉ. Mẫu đeo ban ngày.",
		points: [
			"Vàng 610",
			"Mặt nhẵn",
			"Có bán lẻ dây hoặc mặt"
		]
	},
	{
		slug: "lac-tay-nu-610",
		name: "Lắc tay nữ 610",
		category: "lac-vong",
		karatId: "k610",
		weightChi: 2,
		images: [
			"/media/bracelet.jpg",
			"/media/rabbit.jpg",
			"/media/kids-set.jpg"
		],
		summary: "Lắc tay mắt lúa mạch, khoảng 2 chỉ vàng 610. Chỉnh size cổ tay tại tiệm.",
		points: [
			"Khóa hộp",
			"Bản vừa",
			"Đánh bóng miễn phí lần đầu"
		]
	},
	{
		slug: "lac-be-tho",
		name: "Lắc bé thỏ",
		category: "tre-em",
		karatId: "k610",
		weightChi: .6,
		images: [
			"/media/rabbit.jpg",
			"/media/kids-set.jpg",
			"/media/bracelet.jpg"
		],
		summary: "Lắc trẻ em charm thỏ nhỏ, khoảng 6 phân vàng 610. Tiệm có bán lẻ từng món trong bộ.",
		points: [
			"Nhẹ tay bé",
			"Charm thỏ",
			"Chọn size  theo tuổi"
		]
	},
	{
		slug: "bo-tre-em-610",
		name: "Bộ trẻ em 610",
		category: "tre-em",
		karatId: "k610",
		weightChi: 1.2,
		images: [
			"/media/kids-set.jpg",
			"/media/rabbit.jpg",
			"/media/studs.jpg"
		],
		summary: "Bộ dây, lắc và bông nhỏ. Ước tính 1,2 chỉ cho cả bộ, có thể mua từng món.",
		points: [
			"Bán lẻ được",
			"Vàng 610",
			"Gói hộp sẵn"
		]
	},
	{
		slug: "vong-da-mat-meo",
		name: "Vòng đá mắt mèo",
		category: "da-quy",
		fixedPrice: 15e4,
		images: [
			"/media/cateye.jpg",
			"/media/diamonds.jpg",
			"/media/silver.jpg"
		],
		summary: "Vòng hạt mắt mèo xanh nhạt. Tiệm thường còn ni 49, 52, 53, 54. Giá đá, không tính theo tuổi vàng.",
		points: [
			"Xanh dương nhạt",
			"Nhiều size cổ tay",
			"Giá tham khảo từ 150.000đ / vòng"
		]
	},
	{
		slug: "bong-tai-nu",
		name: "Bông tai nụ",
		category: "bong-tai",
		karatId: "k610",
		weightChi: .4,
		images: [
			"/media/studs.jpg",
			"/media/diamonds.jpg",
			"/media/hoops.jpg"
		],
		summary: "Đôi nụ vàng gắn hột nhỏ. Phần vàng khoảng 4 phân; tiền hột xem trực tiếp.",
		points: [
			"Nhẹ",
			"Đeo mỗi ngày",
			"Kiểm tra khóa bướm trước khi giao"
		]
	},
	{
		slug: "bong-tai-khoen",
		name: "Bông tai khuyên 610",
		category: "bong-tai",
		karatId: "k610",
		weightChi: .8,
		images: [
			"/media/hoops.jpg",
			"/media/studs.jpg",
			"/media/bracelet.jpg"
		],
		summary: "Đôi khuyên trơn cỡ vừa, khoảng 8 phân vàng 610.",
		points: [
			"Khuyên kín",
			"Không đính đá",
			"Đánh bóng được"
		]
	},
	{
		slug: "nhan-kim-cuong",
		name: "Nhẫn kim cương",
		category: "da-quy",
		karatId: "k18",
		weightChi: .5,
		images: [
			"/media/diamond-ring.jpg",
			"/media/diamonds.jpg",
			"/media/studs.jpg"
		],
		summary: "Nhẫn vàng 18K gắn một viên tròn. Giá web chỉ là phần vàng thân nhẫn; viên tính theo ly, nước và giấy.",
		points: [
			"Xem viên dưới đèn",
			"Có giấy thì đối chiếu mã",
			"Đổi size trong ngày"
		]
	},
	{
		slug: "cap-nhan-vang-trang",
		name: "Cặp nhẫn vàng trắng",
		category: "vang-trang",
		karatId: "k18",
		weightChi: 1.6,
		images: [
			"/media/white-gold.jpg",
			"/media/wedding-bands.jpg",
			"/media/diamond-ring.jpg"
		],
		summary: "Cặp nhẫn cưới sắc trắng, vàng 18K, khoảng 1,6 chỉ cả cặp. Có viền milgrain nếu khách chọn.",
		points: [
			"18K vàng trắng",
			"Si mạ rhodium khi làm mới",
			"Đo ni miễn phí"
		]
	},
	{
		slug: "day-bac",
		name: "Dây bạc",
		category: "lac-vong",
		silverGram: 8,
		images: [
			"/media/silver.jpg",
			"/media/rope-chain.jpg",
			"/media/cateye.jpg"
		],
		summary: "Dây bạc khoảng 8g. Giá tham khảo theo bạc thế giới cộng công, chốt qua Zalo trong ngày.",
		points: [
			"Bạc 925 khi có tem",
			"Dễ oxi hóa, tiệm hướng dẫn bảo quản",
			"Không cộng vào bảng vàng"
		]
	},
	{
		slug: "thiet-ke-theo-yeu-cau",
		name: "Thiết kế theo yêu cầu",
		category: "thiet-ke",
		images: [
			"/media/workshop.jpg",
			"/media/hero-interior.jpg",
			"/media/gold-rose.jpg"
		],
		summary: "Mang vàng cũ hoặc chọn mẫu. Thợ chốt tuổi, trọng lượng và công trước khi làm.",
		points: [
			"Nhận vàng cũ",
			"Vẽ mẫu đơn giản tại quầy",
			"Hẹn ngày lấy rõ ràng",
			"Ship toàn quốc sau khi chốt"
		]
	}
];
function categoryById(id) {
	return categories.find((item) => item.id === id);
}
function productBySlug(slug) {
	return products.find((item) => item.slug === slug);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/articles-BiLy968V.js
var articles = [
	{
		slug: "cach-doc-bang-gia",
		title: "Cách đọc bảng giá vàng Minh Phát",
		kicker: "Bảng giá",
		dek: "Lượng, chỉ, phân và vì sao giá trên web luôn ghi là tham khảo.",
		image: "/media/hero-interior.jpg",
		minutes: 4,
		sections: [{ paragraphs: ["Ở tiệm, khách hỏi giá theo lượng, chỉ hoặc phân. Một lượng bằng 10 chỉ, một chỉ bằng 3,75 gram, một phân bằng một phần mười chỉ.", "Bảng trên website lấy giá vàng thế giới từng phút, quy ra đồng theo tỷ giá USD, rồi cộng mức chênh thường thấy của từng tuổi vàng. Con số tự chạy 24 giờ, nhưng giá giao dịch là giá niêm yết tại quầy hoặc giá Zalo xác nhận ở thời điểm mua."] }, {
			heading: "Mua vào và bán ra",
			paragraphs: ["Bán ra là giá tiệm bán cho khách. Mua vào là giá tiệm thu lại. Chênh giữa hai cột là spread, không phải “phí giấu”. Với nữ trang, spread dày hơn vàng nhẫn vì có công và vì tuổi vàng thấp hơn thì khả năng tiêu thụ lại khác.", "Khi cân, tiệm trừ khấu hao nếu món móp, mất khóa hoặc không đủ tuổi so với tem. Khách nên xem cân và tem cùng lúc."]
		}]
	},
	{
		slug: "phan-biet-tuoi-vang",
		title: "9999, 18K và 610 khác nhau chỗ nào",
		kicker: "Tuổi vàng",
		dek: "Cùng một chỉ nhưng số vàng nguyên chất bên trong không giống nhau.",
		image: "/media/ring-plain.jpg",
		minutes: 5,
		sections: [{ paragraphs: ["Vàng 9999 gần như nguyên chất. Mềm, dễ xước, hợp nhẫn trơn để dành. Vàng 18K còn 75% vàng, cứng hơn, hay dùng khi gắn đá. Vàng 610 còn 61% vàng, là dòng trang sức tiệm bán nhiều vì đeo bền và giá một món dễ chịu hơn."] }, {
			heading: "Đừng so giá một chỉ 610 với một chỉ 9999",
			paragraphs: ["Một chỉ 610 không chứa cùng lượng vàng với một chỉ 9999. Bảng giá Minh Phát đã nhân theo tỷ lệ tuổi, rồi cộng công bán ra. Vì vậy cột 610 thấp hơn cột nhẫn 9999 là đúng, không phải tiệm “bán rẻ”.", "Tem trên món nên đọc cùng giấy hoặc hóa đơn. Nếu làm mới từ vàng cũ, thợ nói rõ tuổi đầu vào và tuổi món ra."]
		}]
	},
	{
		slug: "vang-trong-nuoc-va-the-gioi",
		title: "Vì sao giá trong nước lệch giá thế giới",
		kicker: "Thị trường",
		dek: "Giá ounce là giá quốc tế. Giá quầy còn có tỷ giá, nguồn cung và chính sách từng hiệu.",
		image: "/media/storefront.jpg",
		minutes: 4,
		sections: [{ paragraphs: ["Giá thế giới công bố theo USD một ounce (khoảng 31,1 gram). Muốn ra tiền đồng một lượng, phải nhân tỷ giá và đổi đơn vị. Chỉ riêng bước này, bảng đã chạy cả đêm khi sàn quốc tế mở.", "Giá nhẫn và nữ trang trong nước thường cao hơn giá quy đổi thuần, vì có chi phí nhập, tồn kho và chênh mua bán. Vàng miếng thương hiệu lớn còn có phần chênh riêng, không phải lúc nào cũng đi cùng chiều với thế giới trong một phiên."] }, {
			heading: "Minh Phát công bố thế nào",
			paragraphs: ["Trang này tách hai lớp: giá thế giới là số liệu thị trường, bảng tuổi vàng là ước tính để khách theo dõi trước khi đến. Chốt mua bán vẫn bằng lời tại quầy hoặc tin nhắn Zalo, vì giá có thể đổi trong lúc khách đang trên đường."]
		}]
	},
	{
		slug: "bac-va-ty-le-vang-bac",
		title: "Bạc thế giới và tỷ lệ vàng/bạc",
		kicker: "Bạc",
		dek: "Bạc chạy nhanh hơn vàng. Tỷ lệ cho biết đang mất bao nhiêu ounce bạc để đổi một ounce vàng.",
		image: "/media/silver.jpg",
		minutes: 4,
		sections: [{ paragraphs: ["Bạc dùng cả trong trang sức lẫn công nghiệp, nên giá dao động mạnh hơn vàng. Trên bảng Minh Phát, bạc thế giới hiện theo USD/ounce và quy ra đồng theo gram, lượng.", "Tỷ lệ vàng/bạc là giá một ounce vàng chia cho một ounce bạc. Tỷ lệ tăng nghĩa là vàng đắt lên so với bạc, hoặc bạc yếu đi. Đây là thước so sánh, không phải lời khuyên mua."] }, {
			heading: "Bạc tại tiệm",
			paragraphs: ["Dây bạc và vòng đá không lấy giá từ cột vàng. Bạc 925 dễ ngả màu; tiệm lau đánh rồi hướng dẫn khách giữ trong túi kín khi không đeo. Giá món bạc chốt theo trọng lượng và công trong ngày."]
		}]
	},
	{
		slug: "kim-cuong-bon-c",
		title: "Kim cương không có một giá niêm yết",
		kicker: "Kim cương",
		dek: "Cùng nhìn tròn, hai viên có thể lệch giá rất xa vì nước, độ sạch, giác cắt và trọng lượng.",
		image: "/media/diamonds.jpg",
		minutes: 5,
		sections: [{ paragraphs: ["Vàng có tuổi và cân. Kim cương thì tính từng viên. Bốn yếu tố hay được gọi là 4C: carat (ly), color (nước), clarity (độ sạch), cut (giác cắt). Giác cắt quyết định độ sáng nhiều hơn người mua vẫn nghĩ.", "Thị trường thế giới có chỉ số và báo giá sỉ, nhưng cửa hàng lẻ không treo một con số “kim cương hôm nay” theo kiểu lượng vàng. Minh Phát xem viên với khách, đối chiếu giấy nếu có, rồi báo giá phần hột tách khỏi phần vàng."] }, {
			heading: "Khi chọn tại tiệm",
			paragraphs: ["Nên nhìn viên dưới đèn trắng và nghiêng để thấy điểm tối trong đá. Viên nhỏ trên bông tai nụ khác viên đặt trên nhẫn. Nếu chưa chốt, cứ nhắn Zalo ảnh mẫu — ngoài giờ quầy vẫn có người trả lời."]
		}]
	},
	{
		slug: "mua-vang-cuoi-o-can-tho",
		title: "Chọn nhẫn cưới ở Ninh Kiều",
		kicker: "Tại tiệm",
		dek: "Đo ni, chọn tuổi vàng, rồi mới nói chuyện đá.",
		image: "/media/wedding-bands.jpg",
		minutes: 3,
		sections: [{ paragraphs: ["Khách cưới hay đến 24 Ngô Quyền vào buổi chiều. Việc đầu tiên là đo ni, vì size hai người ít khi giống nhau. Vàng 610 đeo bền với giá dễ chia; vàng trắng 18K hợp nếu muốn gắn hột.", "Tiệm khắc tên sau khi khách duyệt chữ. Nếu cần gấp trong tuần lễ cưới, nói ngày lấy ngay từ đầu để thợ xếp phôi. Ship tỉnh khác được, nhưng nhẫn cưới nên đo tay trực tiếp trước khi gửi."] }]
	}
];
function articleBySlug(slug) {
	return articles.find((item) => item.slug === slug);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-B23PCRo4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* Path-based preview hosts serve the dev server under `/{port_id}/` and strip
* that prefix before forwarding, so SSR sees `/` while the browser URL keeps the
* prefix. TanStack Start resets `basepath` on hydration, so a `rewrite` keeps
* client routing and generated links aligned with the public URL.
*/
var PATH_BASED_PREVIEW_HOSTS = /* @__PURE__ */ new Set([
	"preview.grok.genai.mil",
	"preview.grok.mil",
	"preview.grokgsac.com"
]);
var PORT_ID_PREFIX = /^\/hds-[a-z0-9]+-\d+-[a-z0-9]+(?=\/|$)/i;
function previewPathPrefix(hostname, pathname) {
	if (!PATH_BASED_PREVIEW_HOSTS.has(hostname.toLowerCase())) return void 0;
	return PORT_ID_PREFIX.exec(pathname)?.[0];
}
function prefixRewrite(prefix) {
	return {
		input: ({ url }) => {
			if (url.pathname === prefix) url.pathname = "/";
			else if (url.pathname.startsWith(`${prefix}/`)) url.pathname = url.pathname.slice(prefix.length);
			return url;
		},
		output: ({ url }) => {
			url.pathname = `${prefix}${url.pathname}`;
			return url;
		}
	};
}
function previewPathRewrite() {
	if (typeof window === "undefined") return void 0;
	const prefix = previewPathPrefix(window.location.hostname, window.location.pathname);
	return prefix ? prefixRewrite(prefix) : void 0;
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getMarket = createServerFn({ method: "GET" }).handler(createSsrRpc("6fdfbdff8b779cdd80db4492138674f9ab3498f6077332c5892ed94e3f737172"));
var MarketContext = (0, import_react.createContext)({
	data: null,
	status: "loading"
});
function MarketProvider({ children }) {
	const [state, setState] = (0, import_react.useState)({
		data: null,
		status: "loading"
	});
	(0, import_react.useEffect)(() => {
		let stop = false;
		const load = async () => {
			try {
				const data = await getMarket();
				if (stop) return;
				setState({
					data,
					status: data.spot ? "ready" : "error"
				});
			} catch {
				if (!stop) setState((prev) => ({
					data: prev.data,
					status: "error"
				}));
			}
		};
		load();
		const timer = window.setInterval(() => void load(), 6e4);
		return () => {
			stop = true;
			window.clearInterval(timer);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketContext.Provider, {
		value: state,
		children
	});
}
function useMarket() {
	return (0, import_react.useContext)(MarketContext);
}
var styles_default = "/assets/styles-BPyZZuIE.css";
var Route$10 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Tiệm Vàng Minh Phát Cần Thơ" },
			{
				name: "description",
				content: "Tiệm Vàng Minh Phát — 24 Ngô Quyền, Ninh Kiều, Cần Thơ. Bảng giá vàng cập nhật liên tục, trang sức theo loại, liên hệ Zalo 24/24."
			},
			{
				name: "theme-color",
				content: "#14110E"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&display=swap"
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "vi",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$9 = () => import("./routes-BA9WqElT.mjs");
var Route$9 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Tiệm Vàng Minh Phát Cần Thơ" }, {
		name: "description",
		content: "Vàng đúng tuổi tại 24 Ngô Quyền, Ninh Kiều. Bảng giá cập nhật liên tục, trang sức theo loại, Zalo trực 24/24."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./gia-vang-DHW7G6HD.mjs");
var Route$8 = createFileRoute("/gia-vang")({
	head: () => ({ meta: [{ title: "Bảng giá vàng hôm nay — Minh Phát Cần Thơ" }, {
		name: "description",
		content: "Giá vàng thế giới, bạc và bảng tuổi vàng tham khảo, tự cập nhật suốt ngày."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./gioi-thieu-Cc_TkBV-.mjs");
var Route$7 = createFileRoute("/gioi-thieu")({
	head: () => ({ meta: [{ title: "Về tiệm — Minh Phát Cần Thơ" }, {
		name: "description",
		content: "Công ty TNHH Kinh doanh Vàng Minh Phát, 24 Ngô Quyền, Ninh Kiều. Lấy chữ tín làm nền."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./lien-he-DDip_YG7.mjs");
var Route$6 = createFileRoute("/lien-he")({
	head: () => ({ meta: [{ title: "Liên hệ 24/24 — Tiệm Vàng Minh Phát" }, {
		name: "description",
		content: "Zalo Mỹ Nhiên trực cả ngày. Quầy 24 Ngô Quyền mở 8 giờ đến 20 giờ."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./san-pham-CDON93pL.mjs");
var Route$5 = createFileRoute("/san-pham")({
	validateSearch: (search) => {
		const raw = typeof search.loai === "string" ? search.loai : void 0;
		if (!raw || raw === "tat-ca") return {};
		return categories.some((item) => item.id === raw) ? { loai: raw } : {};
	},
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./tin-tuc-D6lvTeph.mjs");
var Route$4 = createFileRoute("/tin-tuc")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./san-pham.index-BHcYr3zz.mjs");
var Route$3 = createFileRoute("/san-pham/")({
	head: () => ({ meta: [{ title: "Sản phẩm — Tiệm Vàng Minh Phát" }, {
		name: "description",
		content: "Nhẫn 9999, nhẫn cưới, dây, lắc, bông tai, kim cương và trang sức trẻ em."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./san-pham._slug-CYDn1XHM.mjs");
var Route$2 = createFileRoute("/san-pham/$slug")({
	head: ({ params }) => {
		const product = productBySlug(params.slug);
		return { meta: [{ title: product ? `${product.name} — Minh Phát` : "Sản phẩm — Minh Phát" }, {
			name: "description",
			content: product?.summary ?? "Mẫu trang sức tại Tiệm Vàng Minh Phát."
		}] };
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./tin-tuc.index-dVrTI_Za.mjs");
var Route$1 = createFileRoute("/tin-tuc/")({
	head: () => ({ meta: [{ title: "Tin vàng, bạc, kim cương — Minh Phát" }, {
		name: "description",
		content: "Bản tin giá tự cập nhật và bài Minh Phát viết về vàng, bạc, kim cương, kèm tin báo chí."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./tin-tuc._slug-DbLwukRn.mjs");
var Route = createFileRoute("/tin-tuc/$slug")({
	head: ({ params }) => {
		const article = articleBySlug(params.slug);
		return { meta: [{ title: article ? `${article.title} — Minh Phát` : "Tin tức — Minh Phát" }, {
			name: "description",
			content: article?.dek ?? "Bài viết của Tiệm Vàng Minh Phát."
		}] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$9.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$10
});
var GiaVangRoute = Route$8.update({
	id: "/gia-vang",
	path: "/gia-vang",
	getParentRoute: () => Route$10
});
var GioiThieuRoute = Route$7.update({
	id: "/gioi-thieu",
	path: "/gioi-thieu",
	getParentRoute: () => Route$10
});
var LienHeRoute = Route$6.update({
	id: "/lien-he",
	path: "/lien-he",
	getParentRoute: () => Route$10
});
var SanPhamRoute = Route$5.update({
	id: "/san-pham",
	path: "/san-pham",
	getParentRoute: () => Route$10
});
var TinTucRoute = Route$4.update({
	id: "/tin-tuc",
	path: "/tin-tuc",
	getParentRoute: () => Route$10
});
var SanPhamIndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => SanPhamRoute
});
var SanPhamSlugRoute = Route$2.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => SanPhamRoute
});
var TinTucIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => TinTucRoute
});
var TinTucSlugRoute = Route.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => TinTucRoute
});
var SanPhamRouteChildren = {
	SanPhamSlugRoute,
	SanPhamIndexRoute
};
var SanPhamRouteWithChildren = SanPhamRoute._addFileChildren(SanPhamRouteChildren);
var TinTucRouteChildren = {
	TinTucSlugRoute,
	TinTucIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	GiaVangRoute,
	GioiThieuRoute,
	LienHeRoute,
	SanPhamRoute: SanPhamRouteWithChildren,
	TinTucRoute: TinTucRoute._addFileChildren(TinTucRouteChildren)
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		rewrite: previewPathRewrite(),
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { useMarket as a, categories as c, products as d, Route$5 as i, categoryById as l, Route as n, articleBySlug as o, Route$2 as r, articles as s, router_exports as t, productBySlug as u };
