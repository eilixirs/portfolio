"use client";

import { createContext, useState, use } from "react";
import type { PortfolioItem } from "@/data/portfolio";

interface PortfolioState {
  selectedItem: PortfolioItem | null;
  isModalOpen: boolean;
}

interface PortfolioActions {
  openModal: (item: PortfolioItem) => void;
  closeModal: () => void;
}

interface PortfolioMeta {
  items: PortfolioItem[];
}

interface PortfolioContextValue {
  state: PortfolioState;
  actions: PortfolioActions;
  meta: PortfolioMeta;
}

export const PortfolioContext = createContext<PortfolioContextValue | null>(
  null
);

export function usePortfolio() {
  const context = use(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}

interface PortfolioProviderProps {
  children: React.ReactNode;
  items: PortfolioItem[];
}

export function PortfolioProvider({ children, items }: PortfolioProviderProps) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const state: PortfolioState = {
    selectedItem,
    isModalOpen: selectedItem !== null,
  };

  const actions: PortfolioActions = {
    openModal: (item) => setSelectedItem(item),
    closeModal: () => setSelectedItem(null),
  };

  const meta: PortfolioMeta = {
    items,
  };

  return (
    <PortfolioContext value={{ state, actions, meta }}>
      {children}
    </PortfolioContext>
  );
}
