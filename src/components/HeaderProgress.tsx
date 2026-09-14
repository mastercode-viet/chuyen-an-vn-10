import React, { useEffect, useState } from 'react';

interface HeaderProgressProps {
  currentChapter?: string;
}

export const HeaderProgress: React.FC<HeaderProgressProps> = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F9F7F1]/95 backdrop-blur-xs border-b border-[#E0DDD5]">
      <div className="w-full h-1 bg-[#E0DDD5]">
        <div
          className="h-full bg-[#7a1f1f] transition-all duration-100 ease-out"
          id="read-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 bg-[#7a1f1f] text-white font-bold text-[10px] tracking-widest uppercase">
            HỒ SƠ ĐIỀU TRA
          </span>
          <span className="hidden sm:inline text-gray-700 font-semibold tracking-wider">
            CHUYÊN ÁN VN10 // BỘ CÔNG AN
          </span>
        </div>
        <div className="flex items-center gap-4 text-[11px] text-gray-600">
          <a href="#chuong-1" className="hover:text-[#7a1f1f] transition-colors hidden md:inline">C1: Phát hiện</a>
          <a href="#chuong-2" className="hover:text-[#7a1f1f] transition-colors hidden md:inline">C2: Căn cứ</a>
          <a href="#chuong-3" className="hover:text-[#7a1f1f] transition-colors hidden md:inline">C3: Bản đồ</a>
          <a href="#chuong-4" className="hover:text-[#7a1f1f] transition-colors hidden lg:inline">C4: Showbiz</a>
          <a href="#chapter-5-interactive" className="hover:text-[#7a1f1f] transition-colors">C5: Đại án 227</a>
          <a href="#chuong-7-ket-luan" className="hover:text-[#7a1f1f] transition-colors font-bold text-[#7a1f1f]">C7: Phán quyết</a>
        </div>
      </div>
    </header>
  );
};
