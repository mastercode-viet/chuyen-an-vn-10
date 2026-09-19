import React from 'react';
import { motion } from 'motion/react';
import { useActiveChapter } from '../hooks/useActiveChapter';
import { fadeUp, viewportOnce, easeOut } from '../lib/motion';
import vn10Done from '../assets/vn10-done.mp4';

export const Chapter1Discovery: React.FC = () => {
  const isActive = useActiveChapter(1);

  return (
    <section id="chuong-1" className="w-full py-20 bg-[#fff] border-b border-[#E0DDD5]">
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
            MỤC LỤC: 01/07
          </span>
          <span className="font-mono text-xs text-gray-600 font-medium">
            BIÊN BẢN HIỆN TRƯỜNG // HẢI QUAN TÂN SƠN NHẤT
          </span>
        </motion.div>
        <motion.h2
          initial="hidden"
          animate="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={easeOut}
          className={`font-headline-lg text-4xl md:text-5xl font-bold uppercase tracking-tight text-center mb-8 transition-colors duration-300 ${
          isActive ? 'text-[#7a1f1f] drop-shadow-lg' : 'text-[#1B1B1F]'
        }`}>
          Chương 1: Phát hiện
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Visual X-ray Screen */}
          <motion.div
            initial="hidden"
            animate="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={easeOut}
            className="lg:col-span-8 bg-white p-4 border border-[#1B1B1F]"
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E0DDD5] text-xs font-mono">
              <span className="text-[#7a1f1f] font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 inline-block animate-pulse" /> HỒ SƠ TANG VẬT
              </span>
              <span className="text-gray-500">08:45 AM - 16/03/2023 - SÂN BAY QUỐC TẾ TÂN SƠN NHẤT</span>
            </div>

            <div className="relative aspect-video bg-[#1B1B1F] border border-[#1B1B1F] overflow-hidden">
              <video
                src={vn10Done}
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-3 flex items-center justify-between text-xs font-mono text-gray-600">
              <span>Dữ liệu bàn giao: Chi cục Hải quan cửa khẩu SBQT Tân Sơn Nhất</span>
              <span className="text-[#7a1f1f] font-semibold">TRẠNG THÁI: TẠM GIỮ KHẨN CẤP</span>
            </div>
          </motion.div>

          {/* Text report excerpt */}
          <motion.div
            initial="hidden"
            animate="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ ...easeOut, delay: 0.15 }}
            className="lg:col-span-4 bg-white p-6 border border-[#E0DDD5] border-l-4 border-l-[#7a1f1f]"
          >
            <div className="font-mono text-xs text-[#7a1f1f] uppercase tracking-widest mb-3 font-semibold">
              TRÍCH LỤC BIÊN BẢN SỰ CỐ
            </div>
            <blockquote className="font-body-regular text-[#1B1B1F] mb-6  leading-relaxed text-sm">
              Ngày 16/3/2023, Chi cục Hải quan cửa khẩu sân bay quốc tế Tân Sơn Nhất phát hiện hơn 11 kg Ketamine và MDMA trong hành lý của 4 nữ tiếp viên trên chuyến bay VN10 từ Pháp về TP.HCM. Vụ việc sau đó được chuyển cho Cơ quan Cảnh sát điều tra Công an TP.HCM để điều tra, làm rõ.
            </blockquote>
            <div className="space-y-3 pt-4 border-t border-[#E0DDD5] text-gray-600 font-mono text-xs">
              <div className="flex justify-between">
                <span>Định lượng Thuốc lắc (MDMA):</span>
                <span className="font-bold text-[#1B1B1F]">8.400 gam</span>
              </div>
              <div className="flex justify-between">
                <span>Định lượng Ketamine:</span>
                <span className="font-bold text-[#1B1B1F]">3.087,8 gam</span>
              </div>
              <div className="flex justify-between">
                <span>Địa điểm trung chuyển:</span>
                <span className="font-bold text-[#1B1B1F]">Sân bay CDG (Paris)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
