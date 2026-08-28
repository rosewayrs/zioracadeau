"use client";

import { create } from "zustand";
import { Product } from "@/lib/types";

interface QuickViewState {
  product: Product | null;
  open: (product: Product) => void;
  close: () => void;
}

export const useQuickView = create<QuickViewState>((set) => ({
  product: null,
  open: (product) => set({ product }),
  close: () => set({ product: null }),
}));
