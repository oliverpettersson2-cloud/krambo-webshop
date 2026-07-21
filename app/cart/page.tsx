"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartContext";
import { getProductById, getFormat } from "@/lib/products";
import { useLang } from "@/components/LanguageProvider";

export default function CartPage() {
  const { items, setQty, remove, clear } = useCart();
  const [loading, setLoading] = useState(false);
  const { t } = useLang();

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
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || t("cart.error.generic"));
        setLoading(false);
      }
    } catch (e) {
      alert(t("cart.error.stripe"));
      setLoading(false);
    }
  }

  if (lines.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-semibold">{t("cart.empty.h")}</h1>
        <p className="text-ink/60 mt-3">{t("cart.empty.p")}</p>
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 bg-ink text-paper rounded-full font-medium hover:bg-accent transition"
        >
          {t("cart.empty.cta")}
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-semibold">{t("cart.h1")}</h1>

      <div className="mt-8 space-y-4">
        {lines.map((l) => (
          <div
            key={`${l.productId}-${l.formatId}`}
            className="flex gap-4 items-center bg-white border border-ink/10 rounded-xl p-3"
          >
            <div className="relative w-20 h-20 bg-ink/5 rounded-lg overflow-hidden shrink-0">
              <Image src={l.product.image} alt={l.product.name} fill className="object-cover" sizes="80px" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium italic truncate">{l.product.name}</p>
              <p className="text-sm text-ink/60">{l.format.name} · {l.format.priceSEK.toLocaleString("sv-SE")} {t("cart.perUnit")}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQty(l.productId, l.formatId, l.qty - 1)}
                className="w-8 h-8 rounded-full border border-ink/15 hover:bg-ink hover:text-paper"
              >−</button>
              <span className="w-6 text-center">{l.qty}</span>
              <button
                onClick={() => setQty(l.productId, l.formatId, l.qty + 1)}
                className="w-8 h-8 rounded-full border border-ink/15 hover:bg-ink hover:text-paper"
              >+</button>
            </div>
            <p className="w-28 text-right font-semibold">
              {l.lineTotal.toLocaleString("sv-SE")} kr
            </p>
            <button onClick={() => remove(l.productId, l.formatId)} className="text-ink/40 hover:text-accent">✕</button>
          </div>
        ))}
      </div>

      <div className="mt-8 border-t border-ink/10 pt-6 flex flex-col md:flex-row justify-between gap-6">
        <button onClick={clear} className="text-sm text-ink/60 hover:text-accent self-start">
          {t("cart.clear")}
        </button>
        <div className="md:text-right">
          <p className="text-sm text-ink/60">{t("cart.totalVat")}</p>
          <p className="text-3xl font-semibold mt-1">{total.toLocaleString("sv-SE")} kr</p>
          <button
            onClick={checkout}
            disabled={loading}
            className="mt-4 px-8 py-3 bg-accent text-white rounded-full font-medium hover:bg-ink transition disabled:opacity-50"
          >
            {loading ? t("cart.checkoutLoading") : t("cart.checkout")}
          </button>
        </div>
      </div>
    </div>
  );
}
