"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useCart } from "./CartContext";
import { getProductById, getFormat } from "@/lib/products";
import { useLang } from "./LanguageProvider";

// Renderas via portal till <body>: headerns backdrop-blur gör annars att
// position:fixed spärras in i headerns 64px höga box.
export default function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, setQty, remove } = useCart();
  const { t, lang } = useLang();
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const lines = items
    .map((i) => {
      const product = getProductById(i.productId);
      if (!product) return null;
      const format = getFormat(product, i.formatId);
      if (!format) return null;
      return { ...i, product, format, lineTotal: format.priceSEK * i.qty };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  const total = lines.reduce((s, l) => s + l.lineTotal, 0);

  async function checkout() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, lang }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || t("cart.error.generic"));
        setLoading(false);
      }
    } catch {
      alert(t("cart.error.stripe"));
      setLoading(false);
    }
  }

  if (!mounted) return null;

  return createPortal(
    <div className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`} aria-hidden={!open}>
      <div
        onClick={onClose}
        style={{ opacity: open ? 1 : 0 }}
        className="absolute inset-0 bg-ink/40 transition-opacity duration-300"
      />
      <aside
        role="dialog"
        aria-label={t("cart.h1")}
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-ink/10 shrink-0">
          <p className="font-serif text-lg">{t("cart.h1")}</p>
          <button onClick={onClose} aria-label={t("drawer.close")} className="w-9 h-9 rounded-full hover:bg-ink/5 text-ink/60 hover:text-ink transition">
            ✕
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 px-6 text-center bg-white">
            <p className="font-serif text-xl text-ink">{t("cart.empty.h")}</p>
            <p className="text-sm text-ink/60">{t("cart.empty.p")}</p>
            <Link
              href="/shop"
              onClick={onClose}
              className="mt-3 px-6 py-3 bg-ink text-white rounded-full text-sm font-medium hover:bg-accent transition"
            >
              {t("cart.empty.cta")} →
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
              {lines.map((l) => (
                <div key={`${l.productId}-${l.formatId}`} className="flex gap-3 items-center bg-white border border-ink/10 rounded-xl p-2.5">
                  <div className="relative w-14 h-14 bg-white rounded-lg overflow-hidden shrink-0">
                    <Image src={l.product.image} alt={l.product.name} fill className="object-contain p-0.5" sizes="56px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium italic text-sm truncate">{l.product.name}</p>
                    <p className="text-xs text-ink/60 truncate">{l.format.name[lang]}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => setQty(l.productId, l.formatId, l.qty - 1)}
                        className="w-9 h-9 text-sm rounded-full border border-ink/15 hover:bg-ink hover:text-paper leading-none"
                      >−</button>
                      <span className="w-5 text-center text-sm">{l.qty}</span>
                      <button
                        onClick={() => setQty(l.productId, l.formatId, l.qty + 1)}
                        className="w-9 h-9 text-sm rounded-full border border-ink/15 hover:bg-ink hover:text-paper leading-none"
                      >+</button>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm font-semibold whitespace-nowrap">{l.lineTotal.toLocaleString("sv-SE")} kr</p>
                    <button onClick={() => remove(l.productId, l.formatId)} aria-label={t("cart.removeLine")} className="w-9 h-9 mt-1 ml-auto flex items-center justify-center rounded-full text-ink/40 hover:text-accent hover:bg-ink/5 text-xs">✕</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-ink/10 px-6 py-4 shrink-0 bg-white">
              <div className="flex items-baseline justify-between">
                <p className="text-sm text-ink/60">{t("cart.totalVat")}</p>
                <p className="text-2xl font-semibold">{total.toLocaleString("sv-SE")} kr</p>
              </div>
              <p className="text-xs text-ink/50 mt-1">{t("cart.shippingNote")}</p>
              <div className="grid grid-cols-2 gap-3 mt-4">
                <Link
                  href="/cart"
                  onClick={onClose}
                  className="px-4 py-3 text-center text-sm rounded-full border border-ink/20 font-medium hover:bg-ink hover:text-paper transition"
                >
                  {t("drawer.viewFull")}
                </Link>
                <button
                  onClick={checkout}
                  disabled={loading}
                  className="px-4 py-3 text-sm bg-accent text-white rounded-full font-medium hover:bg-ink transition disabled:opacity-50"
                >
                  {loading ? t("cart.checkoutLoading") : t("cart.checkout")}
                </button>
              </div>
            </div>
          </>
        )}
      </aside>
    </div>,
    document.body
  );
}
