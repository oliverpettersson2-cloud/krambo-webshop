"use client";

import { useState } from "react";
import type { Product, Format } from "@/lib/products";
import AddToCartButton from "./AddToCartButton";
import { useLang } from "@/components/LanguageProvider";

export default function FormatPicker({ product }: { product: Product }) {
  const [selectedId, setSelectedId] = useState<string>(product.formats[0].id);
  const selected = product.formats.find((f) => f.id === selectedId)!;
  const { t } = useLang();

  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-ink/50">{t("format.pick")}</p>
      <div className="mt-3 space-y-2">
        {product.formats.map((f: Format) => {
          const isSel = f.id === selectedId;
          return (
            <button
              key={f.id}
              onClick={() => setSelectedId(f.id)}
              className={`w-full text-left border rounded-xl p-4 transition ${
                isSel ? "border-ink bg-ink/5" : "border-ink/15 hover:border-ink/30"
              }`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <div>
                  <p className="font-medium">{f.name}</p>
                  <p className="text-sm text-ink/60 mt-1">{f.description}</p>
                  <p className="text-xs text-ink/50 mt-1">{f.leadTime}</p>
                </div>
                <p className="font-semibold whitespace-nowrap">{f.priceSEK.toLocaleString("sv-SE")} kr</p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-6">
        <AddToCartButton product={product} format={selected} />
      </div>
    </div>
  );
}
