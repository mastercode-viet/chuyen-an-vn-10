import React from 'react';
import { ShowbizCase } from '../types';

const SHOWBIZ_CASES: ShowbizCase[] = [
  {
    id: 'chidan',
    name: 'Nguyễn Trung Hiếu',
    alias: 'Ca sĩ Chi Dân',
    year: '1989',
    role: 'Ca sĩ, nhạc sĩ nổi tiếng',
    crime: 'Tổ chức sử dụng trái phép chất ma túy',
    location: 'Căn hộ chung cư tại Quận Tân Bình, TP.HCM',
    date: '11/2024',
    consequence: 'Bị bắt quả tang khi đang cùng bạn bè tụ tập sử dụng ma túy',
  },
  {
    id: 'antay',
    name: 'Andrea Aybar Carmona',
    alias: 'Người mẫu An Tây',
    year: '1995',
    role: 'Người mẫu, diễn viên, người có sức ảnh hưởng (KOL)',
    crime: 'Tàng trữ & Tổ chức sử dụng trái phép chất ma túy',
    location: 'Căn hộ tại TP Thủ Đức, TP.HCM',
    date: '11/2024',
    consequence: 'Xét nghiệm dương tính với chất ma túy, thu giữ tang vật tại nơi ở',
  },
  {
    id: 'trucphuong',
    name: 'Nguyễn Đỗ Trúc Phương',
    alias: '"Cô tiên từ thiện"',
    year: '1994',
    role: 'Nhân vật hoạt động thiện nguyện mạng xã hội',
    crime: 'Tổ chức sử dụng trái phép chất ma túy',
    location: 'Chung cư cao cấp tại TP.HCM',
    date: '11/2024',
    consequence: 'Vỡ mộng hình tượng thiện nguyện mạng xã hội, gây chấn động dư luận',
  },
  {
    id: 'tudiem',
    name: 'Mạng lưới cung ứng VIP',
    alias: 'Tụ điểm giải trí & Khách VIP',
    year: '2023 - 2024',
    role: 'Các quán bar, lounge, căn hộ dịch vụ cao cấp',
    crime: 'Mua bán lẻ, chứa chấp và tổ chức bay lắc',
    location: 'TP.HCM, Bình Dương và các tỉnh lân cận',
    date: 'Toàn tuyến',
    consequence: 'Bóc gỡ hàng chục ổ nhóm cung cấp hàng cho người nổi tiếng và giới trẻ',
  },
];

export const Chapter4Showbiz: React.FC = () => {
  return (
    <section id="chuong-4" className="w-full py-20 bg-[#F9F7F1] border-b border-[#E0DDD5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#7a1f1f] px-2 py-0.5 bg-red-100 uppercase tracking-wider font-semibold">
            MỤC LỤC: 04/07
          </span>
          <span className="font-mono text-xs text-gray-600 font-medium">
            ĐIỂM NÓNG DƯ LUẬN // VĂN HÓA THẦN TƯỢNG VỠ MỘNG
          </span>
        </div>
        <h2 className="font-headline-lg text-3xl md:text-4xl text-[#7a1f1f] font-bold tracking-tight mb-4">
          Chương 4: Nhánh rẽ Showbiz &amp; Sự sa ngã của người nổi tiếng
        </h2>
        <p className="font-body-lead text-base md:text-lg text-[#4a5568] max-w-3xl mb-12">
          Khi đường dây bị bóc tách tận gốc, danh sách khách hàng VIP và mắt xích tổ chức sử dụng trái phép ma túy đã để lộ những cái tên đình đám trên mạng xã hội và làng giải trí.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="showbiz-grid">
          {SHOWBIZ_CASES.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 border border-[#E0DDD5] border-l-4 border-l-[#7a1f1f] hover:border-[#1B1B1F] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2 py-0.5 bg-red-100 text-red-900 font-mono text-[11px] font-bold">
                    ĐÃ BẮT TẠM GIAM
                  </span>
                  <span className="font-mono text-xs text-gray-500">{item.date}</span>
                </div>
                <h3 className="font-title-editorial text-xl font-bold text-[#1B1B1F] mb-1">
                  {item.name}
                </h3>
                <p className="font-mono text-xs text-[#7a1f1f] font-semibold mb-4">
                  ({item.alias} {item.year !== '2023 - 2024' ? `- Sinh năm ${item.year}` : ''})
                </p>
                <div className="space-y-2 mb-6 text-xs text-[#4a5568]">
                  <p>
                    <strong className="text-[#1B1B1F]">Tội danh:</strong> {item.crime}.
                  </p>
                  <p>
                    <strong className="text-[#1B1B1F]">Địa điểm:</strong> {item.location}.
                  </p>
                  {item.consequence && (
                    <p>
                      <strong className="text-[#1B1B1F]">Hệ quả:</strong> {item.consequence}.
                    </p>
                  )}
                </div>
              </div>
              <div className="pt-3 border-t border-dashed border-[#E0DDD5] font-mono text-[10px] text-gray-500 uppercase tracking-wider">
                HỒ SƠ KHÁM XÉT // TAND &amp; CÔNG AN TP.HCM
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
