"use client";

import { useRef } from "react";
import type { Product } from "@/lib/products";
import ProductImage from "./ProductImage";
import { useLang } from "@/components/LanguageProvider";

export type MediaKind = "image" | "video";

export default function ProductMedia({
  product,
  active,
  onChange,
}: {
  product: Product;
  active: MediaKind;
  onChange: (m: MediaKind) => void;
}) {
  const { t } = useLang();
  const touchX = useRef<number | null>(null);

  if (!product.video) {
    return <ProductImage src={product.image} alt={product.name} />;
  }

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) < 50) return;
    onChange(dx < 0 ? "video" : "image");
  };

  return (
    <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      {active === "image" ? (
        <ProductImage src={product.image} alt={product.name} />
      ) : (
        <video
          key={product.video}
          src={product.video}
          autoPlay
          loop
          muted
          playsInline
          className="max-h-[70vh] w-auto max-w-full mx-auto block rounded-2xl bg-white"
        />
      )}

      <div className="mt-3 flex gap-3">
        <button
          onClick={() => onChange("image")}
          aria-label={product.name}
          className={`relative w-16 h-16 rounded-lg overflow-hidden border transition ${
            active === "image" ? "border-ink" : "border-ink/15 hover:border-ink/40"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.image} alt="" className="w-full h-full object-cover" />
        </button>
        <button
          onClick={() => onChange("video")}
          aria-label={t("product.video")}
          className={`relative w-16 h-16 rounded-lg overflow-hidden border transition ${
            active === "video" ? "border-ink" : "border-ink/15 hover:border-ink/40"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={product.image} alt="" className="w-full h-full object-cover opacity-60" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="bg-ink/70 text-paper rounded-full w-7 h-7 flex items-center justify-center text-[10px] pl-0.5">
              ▶
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}
