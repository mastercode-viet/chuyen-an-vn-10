import React from 'react';
import { motion } from 'motion/react';
import { ShowbizCase } from '../types';
import { useActiveChapter } from '../hooks/useActiveChapter';
import { fadeUp, staggerContainer, viewportOnce, easeOut } from '../lib/motion';
import chidan from '../assets/chidan.png';
import antay from '../assets/antay.png';
import phuong from '../assets/phuong.png';

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
    image: chidan,
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
    image: antay,
  },
  {
    id: 'trucphuong',
    name: 'Nguyễn Đỗ Trúc Phương và Hải Anh',
    alias: '"Cô tiên từ thiện"',
    year: '1994',
    role: 'Nhân vật hoạt động thiện nguyện mạng xã hội',
    crime: 'Tổ chức sử dụng trái phép chất ma túy',
    location: 'Chung cư cao cấp tại TP.HCM',
    date: '11/2024',
    consequence: 'Vỡ mộng hình tượng thiện nguyện mạng xã hội, gây chấn động dư luận',
    image: phuong,
  },
];

export const Chapter4Showbiz: React.FC = () => {
  const isActive = useActiveChapter(4);

  return (
    <section id="chuong-4" className="w-full py-20 bg-[#fff] border-b border-[#E0DDD5]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={easeOut}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-xs text-[#7a1f1f] px-2 py-0.5 bg-red-100 uppercase tracking-wider font-semibold">
            MỤC LỤC: 04/07
          </span>
          <span className="font-mono text-xs text-gray-600 font-medium">
            ĐIỂM NÓNG DƯ LUẬN // VĂN HÓA THẦN TƯỢNG VỠ MỘNG
          </span>
        </motion.div>
        <motion.h2
          initial="hidden"
          animate="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={easeOut}
          className={`font-headline-lg text-4xl md:text-5xl font-bold uppercase tracking-tight text-center mb-4 transition-colors duration-300 ${
          isActive ? 'text-[#7a1f1f] drop-shadow-lg' : 'text-[#1B1B1F]'
        }`}>
          Chương 4: Nhánh rẽ Showbiz &amp; Sự sa ngã của người nổi tiếng
        </motion.h2>
        <motion.p
          initial="hidden"
          animate="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={{ ...easeOut, delay: 0.1 }}
          className="font-body-lead text-[1.25rem] text-[#1F2A44] w-full mb-12"
        >
          Khi đường dây bị bóc tách tận gốc, danh sách khách hàng VIP và mắt xích tổ chức sử dụng trái phép ma túy đã để lộ những cái tên đình đám trên mạng xã hội và làng giải trí.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          id="showbiz-grid"
        >
          {SHOWBIZ_CASES.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              transition={easeOut}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group relative aspect-[3/4] overflow-hidden bg-[#1B1B1F] border border-[#E0DDD5] border-l-4 border-l-[#7a1f1f] cursor-pointer"
            >
              {/* Ảnh nền */}
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Nhãn góc trên */}
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 z-10">
                <span className="px-2 py-0.5 bg-red-900/90 text-white font-mono text-[11px] font-bold">
                  ĐÃ BẮT TẠM GIAM
                </span>
                <span className="font-mono text-xs text-white/80">{item.date}</span>
              </div>

              {/* Tên + alias luôn hiện ở dưới */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <h3 className="font-title-editorial text-2xl font-bold  text-white mb-1  ">
                  {item.name}
                </h3>
                <p className="font-mono text-xs text-[#f0a0a0] font-semibold">
                  ({item.alias} {item.year !== '2023 - 2024' ? `- Sinh năm ${item.year}` : ''})
                </p>

                {/* Chi tiết chỉ hiện khi hover */}
                <div className="max-h-0 group-hover:max-h-96 opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-out">
                  <div className="space-y-2 mt-4 pt-4 border-t border-dashed border-white/30 text-xs text-white/90">
                    <p>
                      <strong className="text-white">Vai trò:</strong> {item.role}.
                    </p>
                    <p>
                      <strong className="text-white">Tội danh:</strong> {item.crime}.
                    </p>
                    <p>
                      <strong className="text-white">Địa điểm:</strong> {item.location}.
                    </p>
                    {item.consequence && (
                      <p>
                        <strong className="text-white">Hệ quả:</strong> {item.consequence}.
                      </p>
                    )}
                  </div>
                  <div className="pt-3 mt-3 border-t border-dashed border-white/20 font-mono text-[10px] text-white/60 uppercase tracking-wider">
                    HỒ SƠ KHÁM XÉT // TAND &amp; CÔNG AN TP.HCM
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
