import React, { createContext, useContext, useState, useEffect } from 'react';

interface ChapterContextType {
  activeChapter: number | null;
}

const ChapterContext = createContext<ChapterContextType>({ activeChapter: null });

export const ChapterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);

  useEffect(() => {
    const chapterIds = ['chuong-1', 'chuong-2', 'chuong-3', 'chuong-4', 'chapter-5-interactive', 'chuong-6-ban-an', 'chuong-7-ket-luan'];
    const visibleSections = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            const chapterNum = parseInt(id.match(/\d+/)?.[0] || '0', 10);
            visibleSections.set(id, chapterNum);
          } else {
            visibleSections.delete(id);
          }
        });

        // Set the active chapter to the first visible one
        if (visibleSections.size > 0) {
          const firstVisible = Array.from(visibleSections.values()).sort()[0];
          setActiveChapter(firstVisible);
        }
      },
      {
        threshold: [0, 0.25, 0.5],
        rootMargin: '-100px 0px -60% 0px',
      }
    );

    chapterIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <ChapterContext.Provider value={{ activeChapter }}>{children}</ChapterContext.Provider>;
};

export const useChapterContext = () => {
  const context = useContext(ChapterContext);
  if (!context) {
    throw new Error('useChapterContext must be used within ChapterProvider');
  }
  return context;
};
