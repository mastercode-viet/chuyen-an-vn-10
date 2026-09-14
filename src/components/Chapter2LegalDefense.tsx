import React, { useState } from 'react';
import { LegalArgument } from '../types';

const ARGUMENTS: LegalArgument[] = [
  {
    id: 1,
    tag: 'LUẬN ĐIỂM 01: CẢM QUAN THÔNG THƯỜNG',
    category: 'CĂN CỨ KHOA HỌC HÌNH SỰ',
    title: 'Sự ngụy trang vượt qua "cảm quan thông thường"',
    badge: 'VẬT CHỨNG HÌNH SỰ',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBqcr63av71MCfnmZD9tA6s2RpZXFVhCStcECadQ2zY0cz-vX7-E3fNVj2Hm_4vjUnlyQCiq4PeGWoOOPdfIX3WheFqQPfg2AelfydMPP-A3GYmdG9JS3cWsv9AuU8wYd7mJdq9lTOfrx7NUK4c3ihQgbDBfhzkxb3dxMELB3NApkdg6e5yubgiV6O55_fBDZ9V3hn16i-AwgHyDMCs1VTP-8KxX-U6no53zjtl8Yjk6bs8MBF_4xPZQZ0H7PAK-bKEiOk',
    imageAlt: 'Luận điểm 01: Cảm quan thông thường',
    caption:
      'Hơn 11kg ma túy nén chặt trong ruột 157 tuýp Signal nguyên vẹn, không thể nhận biết bằng mắt thường.',
    description:
      'Ma túy được đối tượng tinh vi bơm nén trực tiếp vào bên trong 157 tuýp kem đánh răng Signal nguyên vẹn. Vỏ hộp, bao bì bên ngoài và nắp tuýp hoàn toàn không có dấu vết cạy mở hay biểu hiện rách nát bất thường. Bằng mắt thường và cảm quan nghề nghiệp thông thường của người nhận vận chuyển hộ hàng hóa tiêu dùng, 4 nữ tiếp viên hoàn toàn không thể phát hiện tạp chất ma túy giấu kín bên trong ruột kem.',
    specs: [
      { label: 'Số tuýp kiểm tra tổng thể:', value: '327 tuýp Signal' },
      { label: 'Số tuýp chứa ma túy nén:', value: '157 tuýp', highlight: true },
      { label: 'Phương thức ngụy trang:', value: 'Bơm ép kín ruột kem' },
    ],
  },
  {
    id: 2,
    tag: 'LUẬN ĐIỂM 02: CƯỚC PHÍ THẬT',
    category: 'ĐỐI CHIẾU KINH TẾ & THỊ TRƯỜNG',
    title: 'Cước phí "thật" cho một cú lừa',
    badge: 'BIÊN BẢN ĐỐI CHIẾU',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCzkoad8zGmUdFEqsuSM9KtLK4g1oJfn9QAMmc7iwvfjsV1WKOr8Cw2R0eRZrhHi58HSNqMYfbJyR2ND4yrhHnZE9O_breMH-A2LJph-xiowqYvjeAXNAEF3FP2TgO4v7rCFk-mBkyerJwLUs3YFF1--lRFcS6qBdywB6mM3-_Dm0rO0P40hRFM3mboKDYk6uyBaNoFxeyJlHkcPJ6vpLUpwyhDgrramnRwzBJgoKaTuvabIHIcpNFYSSczQxMj3Uep1oE',
    imageAlt: 'Luận điểm 02: Cước phí thật',
    caption:
      'Mức cước vận chuyển 6,5 Euro/kg hoàn toàn chuẩn xác theo giá thị trường xách tay hàng không thương mại.',
    description:
      'Tiền công thỏa thuận là 6,5 Euro/kg (tương đương khoảng 169.000 VNĐ/kg) - mức giá hoàn toàn trùng khớp với định mức thị trường giao nhận hàng xách tay tiêu dùng từ Pháp về Việt Nam thời điểm đó. Không hề có bất kỳ khoản thù lao chênh lệch bất thường, không có phụ phí hay khoản chi đặc biệt nào gợi mở nghi vấn vận chuyển hàng cấm hay "tiền công chịu rủi ro".',
    specs: [
      { label: 'Đơn giá vận chuyển thỏa thuận:', value: '6,5 Euro / kg' },
      { label: 'Quy đổi tiền đồng:', value: '~169.000 VNĐ / kg' },
      { label: 'Đánh giá tài chính:', value: 'Khớp chuẩn khung thị trường', highlight: true },
    ],
  },
  {
    id: 3,
    tag: 'LUẬN ĐIỂM 03: TÍNH ĐỘC LẬP',
    category: 'TRINH SÁT VIỄN THÔNG // ĐỘC LẬP MẠNG LƯỚI',
    title: 'Sự độc lập với mạng lưới tội phạm',
    badge: 'TRÍCH XUẤT VIỄN THÔNG',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCjk0ptaH7OfVieoNeHILc7FtJfcBi-trdgAygU-sxduuy_VBtzzMoEqYJhrNlOPlCLlDdEV9zcKzPBzi9HUGLSZmRcDJ408RCxltcuAXAyk8YKFbdLSQbh5cjYNMxmw2lIh2MTuE7Lw7OUlx6qNk4zhxpI5QR1Cscd7c9L8c3LgoxclVWW8w4V58ruh0o_0RkZvV_tQytojuv-Im3FIdVwIhhl_oVNKf6I6mTrXYvF9wHpQxTb8NvtJk0XuPyy9QX3etU',
    imageAlt: 'Luận điểm 03: Tính độc lập',
    caption:
      'Toàn bộ dữ liệu điện thoại và dòng tiền xác nhận 4 tiếp viên không liên hệ ngầm với nhóm tội phạm.',
    description:
      'Kiểm tra kỹ thuật viễn thông chuyên sâu, trích xuất dữ liệu thiết bị liên lạc, đối soát tài khoản ngân hàng và lịch sử biến động số dư khẳng định: 4 tiếp viên không hề quen biết, không có liên hệ mật thiết, không trao đổi mật mã/ám hiệu và không nhận bất kỳ lợi ích tài chính mờ ám nào từ trùm cầm đầu Hà Danh Nậm hay các chân rết tiếp nhận nội địa như Hoàng Sỹ Thắng, Bùi Văn Ánh.',
    specs: [
      { label: 'Rà soát thiết bị & tin nhắn:', value: 'Không phát hiện ám hiệu' },
      { label: 'Dòng tiền tài khoản:', value: 'Minh bạch tuyệt đối' },
      { label: 'Quan hệ đường dây:', value: 'Hoàn toàn độc lập', highlight: true },
    ],
  },
  {
    id: 4,
    tag: 'LUẬN ĐIỂM 04: SỰ KIỆN BẤT NGỜ',
    category: 'ĐIỀU 20 BỘ LUẬT HÌNH SỰ',
    title: '"Sự kiện bất ngờ" - Lằn ranh quyết định',
    badge: 'ĐIỀU 20 BỘ LUẬT HÌNH SỰ',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBjWWvvJelp8f8eiWhv1wdD45aPB9EkA0fXPnNN8SWKy8fhHmRy4mRtpV-ub02IJ8vZUaeSLSX9FXGxsgv4xsAj6KrpDKwmwYNPOFqry56oG2VKF2R_UvkYCNAj3Gyb36Yqho-dTVi5_8Y492MdMPDuULdXzMg6eEg28uLewm21skBMSR0qsAFJaJ76OlElHPt5eyknkdm7SWZErF1tRgoCDS9nCI-BTqVq5iDDOPZZFhVF1Yd-0JA41Ia8JEX4KEa2GGI',
    imageAlt: 'Luận điểm 04: Sự kiện bất ngờ',
    caption:
      'Hoàn tất thủ tục điều tra, xác định yếu tố "Sự kiện bất ngờ" và ra quyết định trả tự do.',
    description:
      'Hành vi nhận vận chuyển hàng hóa của 4 tiếp viên thuộc trọn vẹn phạm trù "Sự kiện bất ngờ" (Điều 20 BLHS) do hoàn toàn không có lỗi cố ý, không thể thấy trước và không bắt buộc phải thấy trước hậu quả ma túy giấu tinh vi bên trong. Quyết định trả tự do kịp thời tuân thủ nguyên tắc thượng tôn pháp luật: "Không làm oan người vô tội", đồng thời tạo tiền đề để cơ quan điều tra tập trung toàn lực bóc gỡ các nhánh ngầm phía sau.',
    specs: [
      { label: 'Chế định áp dụng:', value: 'Điều 20 BLHS (Sự kiện bất ngờ)' },
      { label: 'Yếu tố cấu thành tội phạm:', value: 'Không có lỗi cố ý' },
      { label: 'Kết luận tố tụng:', value: 'Trả tự do, không khởi tố', highlight: true },
    ],
  },
];

export const Chapter2LegalDefense: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const currentArg = ARGUMENTS.find((a) => a.id === activeTab) || ARGUMENTS[0];

  return (
    <section id="chuong-2" className="w-full py-20 bg-[#F9F7F1] border-b border-[#E0DDD5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#7a1f1f] px-2 py-0.5 bg-red-100 uppercase tracking-wider font-semibold">
            MỤC LỤC: 02/07
          </span>
          <span className="font-mono text-xs text-gray-600 font-medium">
            HỒ SƠ TỐ TỤNG &amp; CĂN CỨ ĐIỀU TRA ĐỘC QUYỀN
          </span>
        </div>
        <h2 className="font-headline-lg text-3xl md:text-4xl text-[#7a1f1f] font-bold tracking-tight mb-3">
          Chương 2: Những căn cứ pháp lý &amp; chứng cứ chứng minh vô can của 4 tiếp viên
        </h2>
        <p className="font-body-lead text-base md:text-lg text-[#4a5568] max-w-4xl mb-8">
          Hệ thống 4 luận điểm mang tính quyết định được Cơ quan Cảnh sát điều tra Công an TP.HCM và Viện Kiểm sát đối chiếu chặt chẽ theo quy định Bộ luật Hình sự, bảo toàn nguyên tắc thượng tôn pháp luật: "Không làm oan người vô tội".
        </p>

        {/* 2-Column Split Box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-[#1B1B1F] bg-[#FFFFFF]">
          {/* Left: Image & Evidence Dossier Card */}
          <div className="p-6 border-b lg:border-b-0 lg:border-r border-[#1B1B1F] flex flex-col justify-between bg-white">
            <div className="relative w-full aspect-[4/3] border border-[#1B1B1F] bg-gray-100 overflow-hidden">
              <img
                src={currentArg.imageSrc}
                alt={currentArg.imageAlt}
                className="w-full h-full object-cover transition-opacity duration-200"
              />
              <div className="absolute bottom-0 inset-x-0 bg-[#1B1B1F] text-white p-3 font-mono text-xs">
                <span className="px-2 py-0.5 bg-[#7a1f1f] text-[10px] font-bold uppercase tracking-wider inline-block mb-1">
                  {currentArg.badge}
                </span>
                <p className="text-gray-200 leading-snug">{currentArg.caption}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between text-xs font-mono text-gray-600 border-t border-[#E0DDD5] pt-3">
              <span className="flex items-center gap-1.5 font-semibold text-[#1B1B1F]">
                <span className="w-2 h-2 bg-red-600 inline-block animate-pulse" /> HỒ SƠ GIẢI MẬT C04 - BỘ CÔNG AN
              </span>
              <span className="text-[#7a1f1f] font-bold">
                LUẬN ĐIỂM 0{activeTab}/04
              </span>
            </div>
          </div>

          {/* Right: Interactive Tabs & Argument Content */}
          <div className="p-6 flex flex-col justify-between bg-[#F9F7F1]">
            <div>
              {/* Tab Selector Buttons */}
              <div className="grid grid-cols-2 gap-2 mb-6" id="c2-tabs-btn-group">
                {ARGUMENTS.map((arg) => {
                  const isActive = arg.id === activeTab;
                  return (
                    <button
                      key={arg.id}
                      type="button"
                      onClick={() => setActiveTab(arg.id)}
                      className={`py-2.5 px-3 border border-[#1B1B1F] text-left text-xs font-mono font-bold transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[#7A1F1F] text-white'
                          : 'bg-white text-[#1B1B1F] hover:bg-[#ECE8DF]'
                      }`}
                    >
                      {arg.tag}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Argument Content */}
              <article className="space-y-4">
                <div className="border-l-4 border-l-[#7a1f1f] pl-4 py-1">
                  <span className="px-2.5 py-0.5 bg-red-100 text-[#7a1f1f] font-mono text-xs uppercase tracking-wider font-bold mb-2 inline-block">
                    {currentArg.category}
                  </span>
                  <h3 className="font-title-editorial text-2xl font-bold text-[#7a1f1f] mb-2">
                    {currentArg.title}
                  </h3>
                </div>
                <p className="font-body-regular text-[#1B1B1F] text-sm leading-relaxed text-justify">
                  {currentArg.description}
                </p>

                {/* Specs Box */}
                <div className="p-4 bg-white border border-[#1B1B1F] font-mono text-xs space-y-2 text-[#1F2A44]">
                  {currentArg.specs.map((spec, i) => (
                    <div
                      key={i}
                      className={`flex justify-between ${
                        i < currentArg.specs.length - 1 ? 'border-b border-[#E0DDD5] pb-1.5' : ''
                      }`}
                    >
                      <span>{spec.label}</span>
                      <strong className={spec.highlight ? 'text-[#7A1F1F] font-bold' : 'text-[#1B1B1F]'}>
                        {spec.value}
                      </strong>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <div className="pt-4 border-t border-[#E0DDD5] flex justify-between items-center text-xs font-mono text-gray-600 mt-6">
              <span>VIỆN KIỂM SÁT NHÂN DÂN TP.HCM</span>
              <span className="font-bold text-[#1F2A44]">THƯỢNG TÔN PHÁP LUẬT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
