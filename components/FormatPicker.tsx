"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";
import AddToCartButton from "./AddToCartButton";
import { useLang } from "@/components/LanguageProvider";

export default function FormatPicker({
  product,
  onSelect,
}: {
  product: Product;
  onSelect?: (formatId: string) => void;
}) {
  const [selectedId, setSelectedId] = useState<string>(product.formats[0].id);
  const selected = product.formats.find((f) => f.id === selectedId)!;
  const { t, lang } = useLang();

  return (
    <div>
      <label htmlFor={`format-${product.id}`} className="text-xs uppercase tracking-wider text-ink/50">
        {t("format.pick")}
      </label>

      {/* Rullista istället för kortlista — kompakt, och valet speglas direkt i median ovanför */}
      <div className="relative mt-2">
        <select
          id={`format-${product.id}`}
          value={selectedId}
          onChange={(e) => {
            setSelectedId(e.target.value);
            onSelect?.(e.target.value);
          }}
          className="w-full appearance-none border border-ink/20 rounded-xl bg-white px-4 py-3.5 pr-10 font-medium text-ink cursor-pointer focus:outline-none focus:border-accent"
        >
          {product.formats.map((f) => (
            <option key={f.id} value={f.id}>
              {f.name[lang]} — {f.priceSEK.toLocaleString("sv-SE")} kr
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink/50 text-sm">▼</span>
      </div>

      {/* Detaljer för valt format */}
      <div className="mt-3 bg-white border border-ink/10 rounded-xl p-4">
        <div className="flex items-baseline justify-between gap-3">
          <p className="font-medium">{selected.name[lang]}</p>
          <p className="font-semibold whitespace-nowrap">{selected.priceSEK.toLocaleString("sv-SE")} kr</p>
        </div>
        <p className="text-sm text-ink/60 mt-1">{selected.description[lang]}</p>
        <p className="text-xs text-ink/50 mt-1">{selected.leadTime[lang]}</p>
      </div>

      <div className="mt-5">
        <AddToCartButton product={product} format={selected} />
      </div>
    </div>
  );
}
