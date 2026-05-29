import Link from "next/link";
import Image from "next/image";
import { products, getYears } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const years = getYears();

  return (
    <div>
      {/* HEM — kombinerad hero + presentation */}
      <section className="max-w-6xl mx-auto px-6 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-ink/5">
            <Image
              src="/art/matopos.png"
              alt="Verk av Cecilia K. — Matopos (2025)"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">
              Köp tavlor direkt från konstnären
            </p>
            <h1 className="font-serif text-5xl md:text-6xl mt-3 leading-[1.05]">
              Art by <em>Cecilia K.</em>
            </h1>
            <p className="text-ink/60 mt-3 italic">Cecilia Kristoffersson · Bulawayo 1971 · södra Sverige</p>

            <div className="mt-7 space-y-4 text-ink/80 leading-relaxed">
              <p>
                Cecilia är en samtida konstnär som målar storskaliga akrylmålningar om
                <strong> feminin kraft, förfädernas minne och berättelsens återtagande</strong>.
              </p>
              <p>
                Hennes uppväxt i Zimbabwe och 20 år som internationell bildkonstpedagog
                möts i färgexplosionerna på duken. Verken har visats i kulturhus, gallerier
                och i hennes egen trädgård — från Helsingborg till Stockholm.
              </p>
              <p className="font-serif italic text-lg border-l-4 border-accent pl-5 py-1">
                &quot;I am a mother artist.&quot;
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3 items-center">
              <a
                href="#galleri"
                className="px-7 py-3 bg-accent text-white rounded-full font-medium hover:bg-accentSoft transition"
              >
                Se galleriet →
              </a>
              <span className="text-ink/55 text-sm">
                Original · Plexiglas · Canvas · Poster
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERI — alla verk per år */}
      <section id="galleri" className="max-w-6xl mx-auto px-6 py-10 scroll-mt-20">
        <div className="text-center mb-12 border-t border-ink/10 pt-12">
          <p className="text-accent uppercase tracking-[0.2em] text-xs font-semibold">Galleri</p>
          <h2 className="font-serif text-4xl mt-2">Verk per år</h2>
        </div>
        {years.map((year) => {
          const items = products.filter((p) => p.year === year);
          return (
            <div key={year} id={`ar-${year}`} className="mb-12 scroll-mt-20">
              <div className="flex items-end justify-between mb-6 border-b border-ink/10 pb-3">
                <h3 className="font-serif text-3xl">{year}</h3>
                <p className="text-sm text-ink/50">{items.length} verk</p>
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
      <section className="bg-ink/5 border-y border-ink/10 mt-8">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <p className="font-serif text-xl">Äkthetsintyg ingår</p>
            <p className="text-sm text-ink/60 mt-2">Signerat av Cecilia. Original numreras separat.</p>
          </div>
          <div>
            <p className="font-serif text-xl">Försäkrad leverans</p>
            <p className="text-sm text-ink/60 mt-2">Original packas av professionell konsthandlare.</p>
          </div>
          <div>
            <p className="font-serif text-xl">Trygg betalning</p>
            <p className="text-sm text-ink/60 mt-2">Kort och Klarna via Stripe — färdigintegrerat.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
