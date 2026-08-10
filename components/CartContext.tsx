"use client";

import { createContext, useCallback, useContext, useEffect, useState, ReactNode } from "react";
import { getProductById, getFormat } from "@/lib/products";

export type CartItem = { productId: string; formatId: string; qty: number };

type CartCtx = {
  items: CartItem[];
  add: (productId: string, formatId: string, qty?: number) => void;
  remove: (productId: string, formatId: string) => void;
  setQty: (productId: string, formatId: string, qty: number) => void;
  clear: () => void;
  count: number;
  /** true när korgen laddats från localStorage — innan dess kan den inte tömmas säkert */
  hydrated: boolean;
};

const Ctx = createContext<CartCtx | null>(null);

const STORAGE_KEY = "webshop_cart_v2";

function sameLine(a: CartItem, productId: string, formatId: string) {
  return a.productId === productId && a.formatId === formatId;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        // Rensa spökposter: rader vars produkt/format inte längre finns räknas annars
        // i badgen men syns aldrig i listan.
        const parsed: CartItem[] = JSON.parse(raw);
        const valid = parsed.filter((i) => {
          if (!i || typeof i.qty !== "number" || i.qty <= 0) return false;
          const product = getProductById(i.productId);
          return !!product && !!getFormat(product, i.formatId);
        });
        setItems(valid);
      }
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const add = (productId: string, formatId: string, qty = 1) =>
    setItems((prev) => {
      const found = prev.find((i) => sameLine(i, productId, formatId));
      if (found) return prev.map((i) => (sameLine(i, productId, formatId) ? { ...i, qty: i.qty + qty } : i));
      return [...prev, { productId, formatId, qty }];
    });

  const remove = (productId: string, formatId: string) =>
    setItems((prev) => prev.filter((i) => !sameLine(i, productId, formatId)));

  const setQty = (productId: string, formatId: string, qty: number) =>
    setItems((prev) =>
      qty <= 0
        ? prev.filter((i) => !sameLine(i, productId, formatId))
        : prev.map((i) => (sameLine(i, productId, formatId) ? { ...i, qty } : i))
    );

  // Bail out om korgen redan är tom — annars ger varje anrop en ny array,
  // vilket triggar en ny render och kan skapa en oändlig loop hos anroparen.
  const clear = useCallback(() => setItems((prev) => (prev.length === 0 ? prev : [])), []);

  const count = items.reduce((sum, i) => sum + i.qty, 0);

  return <Ctx.Provider value={{ items, add, remove, setQty, clear, count, hydrated }}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
