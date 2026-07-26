"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/lib/products";
import FormatPicker from "@/components/FormatPicker";
import ProductMedia, { type MediaKind } from "@/components/ProductMedia";
import { useLang } from "@/components/LanguageProvider";

export default function ProductDetail({ product }: { product: Product }) {
  const { t } = useLang();
  const [media, setMedia] = useState<MediaKind>("image");
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <Link href="/galleri" className="text-sm text-ink/60 hover:text-ink">{t("product.back")}</Link>
      <div className="grid md:grid-cols-2 gap-12 mt-6">
        <div>
          <ProductMedia product={product} active={media} onChange={setMedia} />
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-ink/50">Cecilia Kristoffersson · {product.year}</p>
          <h1 className="text-3xl md:text-4xl font-semibold mt-2 italic">{product.name}</h1>
          <p className="text-ink/70 mt-6 leading-relaxed">{product.longDescription}</p>

          <div className="mt-8">
            <FormatPicker
              product={product}
              onSelect={(id) => setMedia(id === "plexi-15x20" ? "video" : "image")}
            />
          </div>

          <ul className="mt-10 space-y-2 text-sm text-ink/60 border-t border-ink/10 pt-6">
            <li>✓ {t("product.trust.1")}</li>
            <li>✓ {t("product.trust.2")}</li>
            <li>✓ {t("product.trust.3")}</li>
            <li>✓ {t("product.trust.4")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
