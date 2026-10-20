export type Article = {
  slug: string;
  title: string;
  kicker: string;
  dek: string;
  image: string;
  minutes: number;
  sections: { heading?: string; paragraphs: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "cach-doc-bang-gia",
    title: "Cách đọc bảng giá vàng Minh Phát",
    kicker: "Bảng giá",
    dek: "Lượng, chỉ, phân và vì sao giá trên web luôn ghi là tham khảo.",
    image: "/media/hero-interior.jpg",
    minutes: 4,
    sections: [
      {
        paragraphs: [
          "Ở tiệm, khách hỏi giá theo lượng, chỉ hoặc phân. Một lượng bằng 10 chỉ, một chỉ bằng 3,75 gram, một phân bằng một phần mười chỉ.",
          "Bảng trên website lấy giá vàng thế giới từng phút, quy ra đồng theo tỷ giá USD, rồi cộng mức chênh thường thấy của từng tuổi vàng. Con số tự chạy 24 giờ, nhưng giá giao dịch là giá niêm yết tại quầy hoặc giá Zalo xác nhận ở thời điểm mua.",
        ],
      },
      {
        heading: "Mua vào và bán ra",
        paragraphs: [
          "Bán ra là giá tiệm bán cho khách. Mua vào là giá tiệm thu lại. Chênh giữa hai cột là spread, không phải “phí giấu”. Với nữ trang, spread dày hơn vàng nhẫn vì có công và vì tuổi vàng thấp hơn thì khả năng tiêu thụ lại khác.",
          "Khi cân, tiệm trừ khấu hao nếu món móp, mất khóa hoặc không đủ tuổi so với tem. Khách nên xem cân và tem cùng lúc.",
        ],
      },
    ],
  },
  {
    slug: "phan-biet-tuoi-vang",
    title: "9999, 18K và 610 khác nhau chỗ nào",
    kicker: "Tuổi vàng",
    dek: "Cùng một chỉ nhưng số vàng nguyên chất bên trong không giống nhau.",
    image: "/media/ring-plain.jpg",
    minutes: 5,
    sections: [
      {
        paragraphs: [
          "Vàng 9999 gần như nguyên chất. Mềm, dễ xước, hợp nhẫn trơn để dành. Vàng 18K còn 75% vàng, cứng hơn, hay dùng khi gắn đá. Vàng 610 còn 61% vàng, là dòng trang sức tiệm bán nhiều vì đeo bền và giá một món dễ chịu hơn.",
        ],
      },
      {
        heading: "Đừng so giá một chỉ 610 với một chỉ 9999",
        paragraphs: [
          "Một chỉ 610 không chứa cùng lượng vàng với một chỉ 9999. Bảng giá Minh Phát đã nhân theo tỷ lệ tuổi, rồi cộng công bán ra. Vì vậy cột 610 thấp hơn cột nhẫn 9999 là đúng, không phải tiệm “bán rẻ”.",
          "Tem trên món nên đọc cùng giấy hoặc hóa đơn. Nếu làm mới từ vàng cũ, thợ nói rõ tuổi đầu vào và tuổi món ra.",
        ],
      },
    ],
  },
  {
    slug: "vang-trong-nuoc-va-the-gioi",
    title: "Vì sao giá trong nước lệch giá thế giới",
    kicker: "Thị trường",
    dek: "Giá ounce là giá quốc tế. Giá quầy còn có tỷ giá, nguồn cung và chính sách từng hiệu.",
    image: "/media/storefront.jpg",
    minutes: 4,
    sections: [
      {
        paragraphs: [
          "Giá thế giới công bố theo USD một ounce (khoảng 31,1 gram). Muốn ra tiền đồng một lượng, phải nhân tỷ giá và đổi đơn vị. Chỉ riêng bước này, bảng đã chạy cả đêm khi sàn quốc tế mở.",
          "Giá nhẫn và nữ trang trong nước thường cao hơn giá quy đổi thuần, vì có chi phí nhập, tồn kho và chênh mua bán. Vàng miếng thương hiệu lớn còn có phần chênh riêng, không phải lúc nào cũng đi cùng chiều với thế giới trong một phiên.",
        ],
      },
      {
        heading: "Minh Phát công bố thế nào",
        paragraphs: [
          "Trang này tách hai lớp: giá thế giới là số liệu thị trường, bảng tuổi vàng là ước tính để khách theo dõi trước khi đến. Chốt mua bán vẫn bằng lời tại quầy hoặc tin nhắn Zalo, vì giá có thể đổi trong lúc khách đang trên đường.",
        ],
      },
    ],
  },
  {
    slug: "bac-va-ty-le-vang-bac",
    title: "Bạc thế giới và tỷ lệ vàng/bạc",
    kicker: "Bạc",
    dek: "Bạc chạy nhanh hơn vàng. Tỷ lệ cho biết đang mất bao nhiêu ounce bạc để đổi một ounce vàng.",
    image: "/media/silver.jpg",
    minutes: 4,
    sections: [
      {
        paragraphs: [
          "Bạc dùng cả trong trang sức lẫn công nghiệp, nên giá dao động mạnh hơn vàng. Trên bảng Minh Phát, bạc thế giới hiện theo USD/ounce và quy ra đồng theo gram, lượng.",
          "Tỷ lệ vàng/bạc là giá một ounce vàng chia cho một ounce bạc. Tỷ lệ tăng nghĩa là vàng đắt lên so với bạc, hoặc bạc yếu đi. Đây là thước so sánh, không phải lời khuyên mua.",
        ],
      },
      {
        heading: "Bạc tại tiệm",
        paragraphs: [
          "Dây bạc và vòng đá không lấy giá từ cột vàng. Bạc 925 dễ ngả màu; tiệm lau đánh rồi hướng dẫn khách giữ trong túi kín khi không đeo. Giá món bạc chốt theo trọng lượng và công trong ngày.",
        ],
      },
    ],
  },
  {
    slug: "kim-cuong-bon-c",
    title: "Kim cương không có một giá niêm yết",
    kicker: "Kim cương",
    dek: "Cùng nhìn tròn, hai viên có thể lệch giá rất xa vì nước, độ sạch, giác cắt và trọng lượng.",
    image: "/media/diamonds.jpg",
    minutes: 5,
    sections: [
      {
        paragraphs: [
          "Vàng có tuổi và cân. Kim cương thì tính từng viên. Bốn yếu tố hay được gọi là 4C: carat (ly), color (nước), clarity (độ sạch), cut (giác cắt). Giác cắt quyết định độ sáng nhiều hơn người mua vẫn nghĩ.",
          "Thị trường thế giới có chỉ số và báo giá sỉ, nhưng cửa hàng lẻ không treo một con số “kim cương hôm nay” theo kiểu lượng vàng. Minh Phát xem viên với khách, đối chiếu giấy nếu có, rồi báo giá phần hột tách khỏi phần vàng.",
        ],
      },
      {
        heading: "Khi chọn tại tiệm",
        paragraphs: [
          "Nên nhìn viên dưới đèn trắng và nghiêng để thấy điểm tối trong đá. Viên nhỏ trên bông tai nụ khác viên đặt trên nhẫn. Nếu chưa chốt, cứ nhắn Zalo ảnh mẫu — ngoài giờ quầy vẫn có người trả lời.",
        ],
      },
    ],
  },
  {
    slug: "mua-vang-cuoi-o-can-tho",
    title: "Chọn nhẫn cưới ở Ninh Kiều",
    kicker: "Tại tiệm",
    dek: "Đo ni, chọn tuổi vàng, rồi mới nói chuyện đá.",
    image: "/media/wedding-bands.jpg",
    minutes: 3,
    sections: [
      {
        paragraphs: [
          "Khách cưới hay đến 24 Ngô Quyền vào buổi chiều. Việc đầu tiên là đo ni, vì size hai người ít khi giống nhau. Vàng 610 đeo bền với giá dễ chia; vàng trắng 18K hợp nếu muốn gắn hột.",
          "Tiệm khắc tên sau khi khách duyệt chữ. Nếu cần gấp trong tuần lễ cưới, nói ngày lấy ngay từ đầu để thợ xếp phôi. Ship tỉnh khác được, nhưng nhẫn cưới nên đo tay trực tiếp trước khi gửi.",
        ],
      },
    ],
  },
];

export function articleBySlug(slug: string) {
  return articles.find((item) => item.slug === slug);
}
