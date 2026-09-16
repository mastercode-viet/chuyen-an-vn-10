import { useChapterContext } from '../contexts/ChapterContext';

export const useActiveChapter = (chapterNumber: number) => {
  const { activeChapter } = useChapterContext();
  return activeChapter === chapterNumber;
};
