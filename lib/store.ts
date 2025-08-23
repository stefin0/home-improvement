import { create } from "zustand";

interface HeaderState {
  isPastHero: boolean;
  setIsPastHero: (isPast: boolean) => void;
}

export const useHeaderStore = create<HeaderState>((set) => ({
  isPastHero: false,
  setIsPastHero: (isPast) => set({ isPastHero: isPast }),
}));
