import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

export default function Home() {
  // Plocka 3 verk att visa som "preview" på hemsidan
  const previewWorks = [
    products.find((p) => p.slug === "speaking-in-colour"),
    products.find((p) => p.slug === "madonna"),
    products.find((p) => p.slug === "matopos"),
  ].filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div>
      {/* HERO — video-redo (placeholder med poster-bild tills Cecilia laddar upp video) */}
      <section className="relative bg-ink text-paper overflow-hidden">
        <div className="absolute inset-0">
          {/* Här går video in när Cecilia skickar fil:
              <video autoPlay muted loop playsInline poster="/art/matopos.png" className="w-full h-full object-cover opacity-50">
                <source src="/cecilia-intro.mp4" type="video/mp4" />
              </video>
          */}
          <Image
            src="/art/matopos.png"
            alt=""
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <p className="text-accent uppercase tracking-[0.3em] text-xs font-semibold">
            Cecilia Kristoffersson · Bulawayo 1971 · södra Sverige
          </p>
          <h1 className="font-serif text-5xl md:text-7xl mt-5 leading-[1.05] max-w-3xl">
            I am a <em>mother artist</em>.
          </h1>
          <p className="mt-6 max-w-xl text-paper/85 text-lg leading-relaxed">
            Storskaliga akrylmålningar om feminin kraft, förfädernas minne och
            berättelsens återtagande.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/butik"
              className="px-7 py-3 bg-accent text-white rounded-full font-medium hover:bg-accentSoft transition"
            >
              Se verken
            </Link>
            <Link
              href="/utstallningar"
              className="px-7 py-3 border border-paper/30 text-paper rounded-full font-medium hover:bg-paper hover:text-ink transition"
            >
              Utställningar
            </Link>
          </div>
        </div>
      </section>

      {/* OM CECILIA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-ink/5">
            <Image
              src="/art/the-three-graces.png"
              alt="Verk av Cecilia K."
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">
              Om konstnären
            </p>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-tight">
              Cecilia Kristoffersson
            </h2>
            <div className="mt-7 space-y-4 text-ink/80 leading-relaxed">
              <p>
                Cecilia är en samtida konstnär som målar storskaliga akrylmålningar om
                <strong> feminin kraft, förfädernas minne och berättelsens återtagande</strong>.
              </p>
              <p>
                Uppvuxen i Zimbabwe, bosatt i södra Sverige sedan 1986. 20 år som
                internationell bildkonstpedagog möter färgexplosionerna på duken.
              </p>
              <p className="font-serif italic text-lg border-l-4 border-accent pl-5 py-1">
                &quot;In a world cluttered by noise, art is the only pure thing left.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PREVIEW AV VERK */}
      <section className="bg-warm py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8 border-b border-ink/15 pb-4">
            <div>
              <p className="text-accent uppercase tracking-[0.2em] text-xs font-semibold">Aktuellt</p>
              <h2 className="font-serif text-4xl mt-2">Senaste verken</h2>
            </div>
            <Link href="/butik" className="text-sm text-accent hover:underline font-medium">
              Se hela samlingen →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewWorks.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.slug}`}
                className="group block bg-white rounded-xl overflow-hidden border border-ink/10 hover:border-ink/30 transition"
              >
                <div className="relative aspect-[4/5] bg-ink/5">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-ink/50 uppercase tracking-wider">{p.year}</p>
                  <h3 className="font-serif text-xl mt-1 italic">{p.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFEST */}
      <section className="bg-ink text-paper py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">Cecilias ord</p>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">Who holds the brush?</h2>
          <p className="mt-8 font-serif italic text-xl leading-relaxed text-paper/85">
            &quot;My truth is that I paint the stories of women, my daughters in particular.
            Knowing that they stand in a lineage of women who are and were unheard.
            The heavy weight of this ancestral burden stops with us.&quot;
          </p>
          <p className="mt-6 text-paper/60">— Cecilia Kristoffersson</p>
        </div>
      </section>
    </div>
  );
}
