import React from 'react';

export const Chapter1Discovery: React.FC = () => {
  return (
    <section id="chuong-1" className="w-full py-20 bg-[#F9F7F1] border-b border-[#E0DDD5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#7a1f1f] px-2 py-0.5 bg-red-100 uppercase tracking-wider font-semibold">
            MỤC LỤC: 01/07
          </span>
          <span className="font-mono text-xs text-gray-600 font-medium">
            BIÊN BẢN HIỆN TRƯỜNG // HẢI QUAN TÂN SƠN NHẤT
          </span>
        </div>
        <h2 className="font-headline-lg text-4xl md:text-5xl text-[#7a1f1f] font-bold tracking-tight mb-8">
          Chương 1: Phát hiện
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Visual X-ray Screen */}
          <div className="lg:col-span-8 bg-white p-4 border border-[#1B1B1F]">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E0DDD5] text-xs font-mono">
              <span className="text-[#7a1f1f] font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 inline-block animate-pulse" /> HỒ SƠ TANG VẬT
              </span>
              <span className="text-gray-500">08:45 AM - 16/03/2023 - SÂN BAY QUỐC TẾ TÂN SƠN NHẤT</span>
            </div>

            <div className="relative aspect-video bg-[#1B1B1F] flex flex-col justify-between p-6 border border-[#1B1B1F] overflow-hidden">
              <div className="flex justify-between items-start z-10">
                <div className="bg-red-950 border border-red-500 px-3 py-1 text-xs font-mono text-red-200">
                  SOI CHIẾU AN NINH MÁY BƯU KIỆN
                </div>
                <div className="text-right text-xs font-mono text-gray-400">
                  CHUYẾN BAY VN10 // CDG-SGN
                </div>
              </div>

              {/* Scanning visual crosshairs / grid */}
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:16px_16px]" />

              <div className="my-auto text-center z-10">
                <p className="font-mono text-red-400 text-sm tracking-widest uppercase font-bold">
                  CẢNH BÁO TẠP CHẤT ĐẶC BIỆT TRONG RUỘT KEM ĐÁNH RĂNG
                </p>
                <p className="font-mono text-xs text-gray-300 mt-2">
                  154 tuýp Signal có phản ứng dương tính với hợp chất MDMA &amp; Ketamine
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-700 text-center font-mono text-xs text-gray-300 z-10">
                <div>KHỐI LƯỢNG: 11.487g</div>
                <div>KIỂM ĐỊNH: VIỆN KHHS</div>
                <div>KẾT QUẢ: DƯƠNG TÍNH</div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs font-mono text-gray-600">
              <span>Dữ liệu bàn giao: Chi cục Hải quan cửa khẩu SBQT Tân Sơn Nhất</span>
              <span className="text-[#7a1f1f] font-semibold">TRẠNG THÁI: TẠM GIỮ KHẨN CẤP</span>
            </div>
          </div>

          {/* Text report excerpt */}
          <div className="lg:col-span-4 bg-white p-6 border border-[#E0DDD5] border-l-4 border-l-[#7a1f1f]">
            <div className="font-mono text-xs text-[#7a1f1f] uppercase tracking-widest mb-3 font-semibold">
              TRÍCH LỤC BIÊN BẢN SỰ CỐ
            </div>
            <blockquote className="font-body-regular text-[#1B1B1F] mb-6 italic leading-relaxed text-sm">
              "Ngày 16/3/2023, Chi cục Hải quan cửa khẩu sân bay quốc tế Tân Sơn Nhất phát hiện hơn 11 kg Ketamine và MDMA trong hành lý của 4 nữ tiếp viên trên chuyến bay VN10 từ Pháp về TP.HCM. Vụ việc sau đó được chuyển cho Cơ quan Cảnh sát điều tra Công an TP.HCM để điều tra, làm rõ."
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
          </div>
        </div>
      </div>
    </section>
  );
};
