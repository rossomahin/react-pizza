import { create } from "zustand";

type sortType = "popularity" | "price" | "alphabet";

interface SortStore {
  sortType: sortType;
  setSortType: (type: sortType) => void;
}

export const useSortStore = create<SortStore>((set) => ({
    sortType: "popularity",
    setSortType: (type) => set({ sortType: type }),
}))