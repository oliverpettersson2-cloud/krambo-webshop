"use client";

import Image from "next/image";
import { products, getYears } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { useLang } from "@/components/LanguageProvider";

export default function GalleriPage() {
  const years = getYears();
  const { t } = useLang();

  return (
    <div>
      {/* HERO */}
      <section className="relative bg-ink text-paper overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/art/multi-eve.png" alt="" fill priority className="object-cover opacity-45" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">{t("galleri.eyebrow")}</p>
          <h1 className="font-serif text-5xl md:text-7xl mt-3 leading-[1.05]">{t("galleri.h1")}</h1>
          <p className="mt-5 max-w-xl text-paper/85 text-lg leading-relaxed">{t("galleri.intro")}</p>
        </div>
      </section>

      {/* GALLERI PER ÅR */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {years.map((year) => {
          const items = products.filter((p) => p.year === year);
          return (
            <div key={year} id={`ar-${year}`} className="mb-12 scroll-mt-20">
              <div className="flex items-end justify-between mb-6 border-b border-ink/10 pb-3">
                <h2 className="font-serif text-3xl">{year}</h2>
                <p className="text-sm text-ink/50">{items.length} {t("galleri.works")}</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {items.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* TRUST */}
      <section className="bg-ink/5 border-y border-ink/10">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <p className="font-serif text-xl">{t("galleri.trust.h1")}</p>
            <p className="text-sm text-ink/60 mt-2">{t("galleri.trust.p1")}</p>
          </div>
          <div>
            <p className="font-serif text-xl">{t("galleri.trust.h2")}</p>
            <p className="text-sm text-ink/60 mt-2">{t("galleri.trust.p2")}</p>
          </div>
          <div>
            <p className="font-serif text-xl">{t("galleri.trust.h3")}</p>
            <p className="text-sm text-ink/60 mt-2">{t("galleri.trust.p3")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
