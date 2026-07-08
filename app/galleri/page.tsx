import Image from "next/image";
import { products, getYears } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Galleri — Art by Cecilia K.",
  description: "Galleriet — signerade postrar, fine art prints, canvas och plexiglastryck direkt från konstnären.",
};

export default function GalleriPage() {
  const years = getYears();

  return (
    <div>
      {/* HERO med bakgrundsbild */}
      <section className="relative bg-ink text-paper overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/art/multi-eve.png"
            alt=""
            fill
            priority
            className="object-cover opacity-45"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">Galleri</p>
          <h1 className="font-serif text-5xl md:text-7xl mt-3 leading-[1.05]">
            Verken — <em>direkt från konstnären</em>
          </h1>
          <p className="mt-5 max-w-xl text-paper/85 text-lg leading-relaxed">
            Original, plexiglas, canvas eller poster. Klarna och kort.
            Hemma hos dig inom 5–10 dagar.
          </p>
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
      <section className="bg-ink/5 border-y border-ink/10">
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
