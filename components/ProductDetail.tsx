"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { availableFormats, type Product } from "@/lib/products";
import FormatPicker from "@/components/FormatPicker";
import ProductMedia, { type MediaKind } from "@/components/ProductMedia";
import { useLang } from "@/components/LanguageProvider";

const STORY_CLAMP_LIMIT = 420; // längre historier viks med "Läs mer" så formaten inte trycks ner

export default function ProductDetail({ product }: { product: Product }) {
  const { t, lang } = useLang();
  const formats = availableFormats(product);
  const [media, setMedia] = useState<MediaKind>(product.poster ? "poster" : "image");
  const [formatId, setFormatId] = useState<string>(formats[0].id);
  const [storyOpen, setStoryOpen] = useState(false);
  const mediaRef = useRef<HTMLDivElement>(null);

  const mediaForFormat = (id: string): MediaKind =>
    id === "plexi-15x20" && product.video ? "video" : id.startsWith("poster") && product.poster ? "poster" : "image";

  // Format valt → visa rätt bild och lyft upp verket i synfältet
  const handleFormatSelect = (id: string) => {
    setFormatId(id);
    setMedia(mediaForFormat(id));
    mediaRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Bild vald → hoppa till motsvarande format, så media och pris alltid hör ihop
  const handleMediaSelect = (kind: MediaKind) => {
    setMedia(kind);
    const match = formats.find((f) => mediaForFormat(f.id) === kind);
    if (match && match.id !== formatId) setFormatId(match.id);
  };

  const story = product.story[lang];
  const isLong = story.length > STORY_CLAMP_LIMIT;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <Link href="/shop" className="text-sm text-ink/60 hover:text-ink">{t("product.back")}</Link>
      <div className="grid md:grid-cols-2 gap-12 mt-6">
        <div ref={mediaRef} className="scroll-mt-24">
          <ProductMedia product={product} active={media} onChange={handleMediaSelect} />
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-ink/50">Cecilia Kristoffersson · {product.year}</p>
          <h1 className="text-3xl md:text-4xl font-semibold mt-2 italic">{product.name}</h1>

          {/* Verkets historia — direkt under rubriken */}
          <div className="mt-5">
            <p className={`text-ink/75 leading-relaxed whitespace-pre-line ${isLong && !storyOpen ? "line-clamp-4" : ""}`}>
              {story}
            </p>
            {isLong && (
              <button
                onClick={() => setStoryOpen((v) => !v)}
                className="mt-2 text-sm text-accent hover:underline font-medium"
              >
                {storyOpen ? t("product.readLess") : t("product.readMore")} {storyOpen ? "↑" : "→"}
              </button>
            )}
            <p className="text-sm text-ink/50 mt-4">{product.originalSpec[lang]}</p>
            <p className="text-sm text-ink/60 mt-2 border-l-2 border-gold/60 pl-3">
              {t("product.original.rule")}{" "}
              <Link href="/utstallningar" className="underline underline-offset-4 hover:text-ink">
                {lang === "en" ? "See exhibitions" : "Se utställningar"} →
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <FormatPicker product={product} selectedId={formatId} onSelect={handleFormatSelect} />
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
