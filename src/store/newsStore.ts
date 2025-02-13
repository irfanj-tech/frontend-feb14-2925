import { create } from "zustand";
import { persist } from "zustand/middleware";

type News = {
  id: number;
  title: string;
  content: string;
};

type NewsStore = {
  news: News[];
  setNews: (newNews: News[]) => void;
};

const useNewsStore = create<NewsStore>(
  persist(
    (set) => ({
      news: [],
      setNews: (newNews) => set({ news: newNews }),
    }),
    {
      name: "news-storage",
    }
  )
);

export default useNewsStore;
