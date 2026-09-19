import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useChapterContext } from '../contexts/ChapterContext';

interface HeaderProgressProps {
  currentChapter?: string;
}

const NAV_LINKS = [
  { href: '#chuong-1', label: 'C1: Phát hiện', chapter: 1, className: 'hidden md:inline' },
  { href: '#chuong-2', label: 'C2: Căn cứ', chapter: 2, className: 'hidden md:inline' },
  { href: '#chuong-3', label: 'C3: Bản đồ', chapter: 3, className: 'hidden md:inline' },
  { href: '#chuong-4', label: 'C4: Showbiz', chapter: 4, className: 'hidden lg:inline' },
  { href: '#chapter-5-interactive', label: 'C5: Đại án 227', chapter: 5, className: '' },
  { href: '#chuong-6-ban-an', label: 'C6: Bản án', chapter: 6, className: 'hidden lg:inline' },
  { href: '#chuong-7-ket-luan', label: 'C7: Phán quyết', chapter: 7, className: '' },
];

export const HeaderProgress: React.FC<HeaderProgressProps> = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { activeChapter } = useChapterContext();

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
    <motion.header
      initial={{ y: -48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#fff]/95 backdrop-blur-xs border-b border-[#E0DDD5]"
    >
      <div className="w-full h-1 bg-[#E0DDD5]">
        <motion.div
          className="h-full bg-[#7a1f1f]"
          id="read-progress-bar"
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1, ease: 'linear' }}
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
          {NAV_LINKS.map((link) => {
            const isActive = link.chapter === activeChapter;
            return (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -1 }}
                whileTap={{ y: 0, scale: 0.96 }}
                className={`hover:text-[#7a1f1f] transition-colors inline-block ${
                  isActive ? 'text-[#7a1f1f] font-bold' : ''
                } ${link.className}`}
              >
                {link.label}
              </motion.a>
            );
          })}
        </div>
      </div>
    </motion.header>
  );
};
