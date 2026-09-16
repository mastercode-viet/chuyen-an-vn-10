import React from 'react';

export const CoverHero: React.FC = () => {
  return (
    <section
      id="cover"
      className="relative w-full pt-20 pb-20 bg-[#F9F7F1] text-[#1B1B1F] border-b-2 border-[#7a1f1f]"
    >
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col justify-between min-h-[720px]">
        {/* Top Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 pb-6 border-b border-[#E0DDD5]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 bg-[#7a1f1f] text-white font-mono text-[11px] uppercase tracking-widest font-semibold">
              CHUYÊN ÁN VN10
            </span>
            <span className="font-mono text-xs text-[#1F2A44] font-semibold tracking-wider">
              [C04 - BỘ CÔNG AN // 2023 - 2024]
            </span>
          </div>
          <div className="flex items-center gap-4 font-mono text-xs text-gray-600">
            <span className="inline-flex items-center gap-1.5 text-[#7a1f1f] font-semibold">
              <span className="w-2 h-2 bg-red-700 inline-block animate-ping" />
              GIẢI MẬT TOÀN DIỆN
            </span>
          </div>
        </div>

        {/* Central Headlines */}
        <div className="my-auto py-10">
          <div className="inline-block mb-4 px-3 py-1 bg-[#ECE8DF] border border-[#D5D0C5] text-[#1F2A44] font-mono text-[11px] uppercase tracking-widest font-bold">
            Báo cáo điều tra chuyên sâu độc quyền
          </div>
          <h1 className="font-display-hero text-4xl sm:text-5xl md:text-[68px] leading-[1.08] text-[#1B1B1F] tracking-tight max-w-5xl">
            VN10: <span className="text-[#7a1f1f] italic">TỪ 4 TIẾP VIÊN</span> ĐẾN ĐẠI ÁN MA TÚY 227 BỊ CÁO
          </h1>
          <p className="mt-8 font-body-lead text-[1.25rem] text-[#1F2A44] max-w-3xl leading-relaxed font-normal">
            Một tuýp kem đánh răng bất thường tại Tân Sơn Nhất đã hé lộ đường dây ma túy xuyên quốc gia hoạt động hơn 3 năm, kéo theo cả showbiz Việt vào vòng lao lý.
          </p>

          {/* Key Metric Blocks */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-[#E0DDD5]">
            <div className="bg-white p-5 border-l-4 border-[#7a1f1f] border border-[#E0DDD5]">
              <span className="font-mono text-xs text-gray-500 block uppercase">Vật chứng ban đầu</span>
              <span className="font-mono text-[28px] text-[#7a1f1f] font-bold flex items-baseline gap-1">
                154 <span className="text-sm font-normal text-gray-600">tuýp kem</span>
              </span>
            </div>
            <div className="bg-white p-5 border-l-4 border-[#1F2A44] border border-[#E0DDD5]">
              <span className="font-mono text-xs text-gray-500 block uppercase">Chuyên án mở rộng</span>
              <span className="font-mono text-[28px] text-[#1F2A44] font-bold flex items-baseline gap-1">
                323 <span className="text-sm font-normal text-gray-600">đường dây</span>
              </span>
            </div>
            <div className="bg-white p-5 border-l-4 border-amber-600 border border-[#E0DDD5]">
              <span className="font-mono text-xs text-gray-500 block uppercase">Số bị can khởi tố</span>
              <span className="font-mono text-[28px] text-amber-700 font-bold flex items-baseline gap-1">
                1.100+ <span className="text-sm font-normal text-gray-600">đối tượng</span>
              </span>
            </div>
            <div className="bg-white p-5 border-l-4 border-red-700 border border-[#E0DDD5]">
              <span className="font-mono text-xs text-gray-500 block uppercase">Giai đoạn xét xử 1</span>
              <span className="font-mono text-[28px] text-red-700 font-bold flex items-baseline gap-1">
                227 <span className="text-sm font-normal text-gray-600">bị cáo</span>
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 text-gray-600 border-t border-[#E0DDD5]">
          <a
            href="#chuong-1"
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#7a1f1f] hover:bg-[#5b060c] text-white font-mono text-xs uppercase tracking-widest transition-colors cursor-pointer"
          >
            <span>TIẾP CẬN TÀI LIỆU CHƯƠNG 1</span>
            <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
          </a>
          <div className="flex items-center gap-2 font-mono text-xs text-[#1F2A44] font-semibold">
           
          </div>
        </div>
      </div>
    </section>
  );
};
