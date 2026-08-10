"use client";

import { availableFormats, type Product } from "@/lib/products";
import AddToCartButton from "./AddToCartButton";
import { useLang } from "@/components/LanguageProvider";

/**
 * Alla format visas samtidigt — en rullista döljer sortimentet på mobil
 * (man ser bara det valda värdet och tror att det är allt som finns).
 * Valet styrs utifrån så att media och format hålls i synk åt båda håll.
 */
export default function FormatPicker({
  product,
  selectedId,
  onSelect,
}: {
  product: Product;
  selectedId: string;
  onSelect: (formatId: string) => void;
}) {
  const formats = availableFormats(product);
  const selected = formats.find((f) => f.id === selectedId) ?? formats[0];
  const { t, lang } = useLang();

  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-ink/50">{t("format.pick")}</p>

      <div className="mt-3 space-y-2">
        {formats.map((f) => {
          const isSel = f.id === selected.id;
          return (
            <button
              key={f.id}
              onClick={() => onSelect(f.id)}
              aria-pressed={isSel}
              className={`w-full text-left border rounded-xl p-4 transition ${
                isSel ? "border-ink bg-ink/5 ring-1 ring-ink/20" : "border-ink/15 hover:border-ink/40"
              }`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-medium">{f.name[lang]}</p>
                <p className="font-semibold whitespace-nowrap">{f.priceSEK.toLocaleString("sv-SE")} kr</p>
              </div>
              <p className="text-sm text-ink/60 mt-1">{f.description[lang]}</p>
              <p className="text-xs text-ink/50 mt-1">{f.leadTime[lang]}</p>
            </button>
          );
        })}
      </div>

      <div className="mt-5">
        <AddToCartButton product={product} format={selected} />
      </div>
    </div>
  );
}
