"use client";

import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import { useLang } from "@/components/LanguageProvider";

export default function Home() {
  const { t } = useLang();

  const otherWorks = [
    products.find((p) => p.slug === "adam"),
    products.find((p) => p.slug === "obsidian"),
    products.find((p) => p.slug === "jikinya"),
  ].filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div>
      {/* HERO */}
      <section className="relative bg-ink text-paper overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/art/eden.jpg" alt="" fill className="object-cover opacity-50" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
          <p className="text-accent uppercase tracking-[0.3em] text-xs font-semibold">{t("home.tagline")}</p>
          <h1 className="font-serif text-5xl md:text-7xl mt-5 leading-[1.05] max-w-3xl">
            I am a <em>mother artist</em>.
          </h1>
          <p className="mt-6 max-w-xl text-paper/85 text-lg leading-relaxed">{t("home.intro")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/galleri" className="px-7 py-3 bg-accent text-white rounded-full font-medium hover:bg-accentSoft transition">
              {t("home.cta.gallery")}
            </Link>
            <Link href="/utstallningar" className="px-7 py-3 border border-paper/30 text-paper rounded-full font-medium hover:bg-paper hover:text-ink transition">
              {t("home.cta.exhibitions")}
            </Link>
          </div>
        </div>
      </section>

      {/* WHO HOLDS THE BRUSH */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="rounded-xl overflow-hidden bg-white md:sticky md:top-24">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/art/the-three-graces.jpg" alt="The Three Graces" className="w-full h-auto block" />
          </div>
          <div>
            <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">{t("brush.eyebrow")}</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-tight">{t("brush.h2")}</h2>
            <div className="mt-7 space-y-5 text-ink/80 leading-relaxed">
              <p>{t("brush.p1")}</p>
              <p>{t("brush.p2")}</p>
              <p>{t("brush.p3")}</p>
              <p>{t("brush.p4")}</p>
            </div>
            <div className="mt-8">
              <Link href="/intervju" className="inline-flex items-center gap-2 text-accent font-medium hover:underline">
                {t("brush.readInterview")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EVENING GARDEN */}
      <section className="bg-warm py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div>
              <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">{t("garden.eyebrow")}</p>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-tight">{t("garden.h2")}</h2>
              <p className="mt-6 text-ink/80 leading-relaxed text-lg">{t("garden.p1")}</p>
              <p className="mt-5 text-ink/65 leading-relaxed italic">{t("garden.quote")}</p>
              <Link href="/utstallningar" className="inline-block mt-8 px-7 py-3 bg-ink text-paper rounded-full font-medium hover:bg-accent transition">
                {t("garden.cta")}
              </Link>
            </div>
            <figure className="md:order-last">
              <div className="rounded-xl overflow-hidden bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/art/phenomenal.jpg" alt="Phenomenal" className="w-full h-auto block" />
              </div>
              <figcaption className="mt-3 text-sm text-ink/65 italic text-center md:text-left">
                <span className="font-serif text-base text-ink not-italic">Phenomenal</span>
                <span className="mx-2 text-ink/30">·</span>2023
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* MANIFEST */}
      <section className="bg-ink text-paper py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <figure className="md:sticky md:top-24">
              <div className="rounded-xl overflow-hidden bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/art/i-rise.jpg" alt="I Rise" className="w-full h-auto block" />
              </div>
              <figcaption className="mt-3 text-sm text-paper/60 italic text-center md:text-left">
                <span className="font-serif text-base text-paper not-italic">I Rise</span>
                <span className="mx-2 text-paper/30">·</span>2023
              </figcaption>
            </figure>
            <div>
              <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">{t("manifest.eyebrow")}</p>
              <h2 className="font-serif text-4xl md:text-5xl mt-4">{t("manifest.h2")}</h2>
              <div className="mt-8 space-y-5 text-paper/85 leading-relaxed font-serif italic">
                <p>{t("manifest.p1")}</p>
                <p>{t("manifest.p2")}</p>
                <p>{t("manifest.p3")}</p>
              </div>
              <p className="mt-6 text-paper/60 font-serif">— Cecilia Kristoffersson</p>
            </div>
          </div>
        </div>
      </section>

      {/* ANDRA UTVALDA VERK */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">{t("other.eyebrow")}</p>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">{t("other.h2")}</h2>
        </div>
        <div className="columns-1 md:columns-3 gap-7">
          {otherWorks.map((p) => (
            <Link key={p.id} href={`/products/${p.slug}`} className="group block break-inside-avoid mb-7">
              <div className="rounded-xl overflow-hidden bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.name} className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-700" />
              </div>
              <div className="mt-4">
                <p className="text-xs text-ink/50 uppercase tracking-wider">{p.year}</p>
                <h3 className="font-serif text-2xl mt-1 italic group-hover:text-accent transition">{p.name}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Köp-CTA */}
        <div className="mt-16 text-center border-t border-ink/10 pt-12">
          <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">{t("buy.eyebrow")}</p>
          <h3 className="font-serif text-3xl md:text-4xl mt-3">{t("buy.h2")}</h3>
          <p className="mt-5 text-ink/70 max-w-xl mx-auto leading-relaxed">{t("buy.p")}</p>
          <Link href="/galleri" className="inline-block mt-8 px-8 py-3.5 bg-ink text-paper rounded-full font-medium hover:bg-accent transition text-base">
            {t("buy.cta")}
          </Link>
        </div>
      </section>

      {/* SAMARBETEN */}
      <section className="bg-warm py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">{t("collab.eyebrow")}</p>
            <h2 className="font-serif text-4xl mt-3">{t("collab.h2")}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-white rounded-xl p-6 border border-ink/10">
              <p className="text-xs uppercase tracking-widest text-ink/50">{t("collab.pub")}</p>
              <h3 className="font-serif text-2xl mt-2"><em>Past, Future, Present</em></h3>
              <p className="text-sm text-ink/65 mt-2">
                Bussey, M. &amp; Kristoffersson, C. (2024). Anticipatory Aesthetics &amp; Phenomenologies of Grace.
              </p>
              <a href="https://journals.sagepub.com/doi/10.1177/19467567241249718" target="_blank" rel="noopener" className="inline-block mt-4 text-sm text-accent hover:underline font-medium">
                {t("collab.readMore")}
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-ink/50">{t("collab.coauthor")}</p>
              <h3 className="font-serif text-2xl mt-2">Marcus Bussey, PhD</h3>
              <p className="text-ink/70 mt-3 leading-relaxed">
                Senior Lecturer, History and Futures, University of the Sunshine Coast, Australia.
              </p>
              <p className="mt-5 text-xs uppercase tracking-widest text-ink/50">{t("collab.work")}</p>
              <h3 className="font-serif text-xl mt-2 italic">Past, Future, Present (2023)</h3>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold text-center">{t("contact.eyebrow")}</p>
        <h2 className="font-serif text-4xl md:text-5xl mt-3 text-center">{t("contact.h2")}</h2>
        <p className="text-center text-ink/70 mt-5 leading-relaxed max-w-2xl mx-auto">{t("contact.p")}</p>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="border border-ink/15 rounded-xl p-6 bg-white">
            <p className="text-xs uppercase tracking-widest text-ink/50">{t("contact.curator")}</p>
            <p className="font-serif text-2xl mt-2">Magnus Florin</p>
            <a href="mailto:k.magnus.florin@gmail.com" className="block mt-4 text-accent hover:underline">
              k.magnus.florin@gmail.com
            </a>
            <a href="tel:+46708734215" className="block mt-1 text-ink/70 hover:text-ink">
              +46 708 73 42 15
            </a>
            <p className="text-xs text-ink/50 mt-3">{t("contact.curatorHint")}</p>
          </div>

          <div className="border border-ink/15 rounded-xl p-6 bg-white">
            <p className="text-xs uppercase tracking-widest text-ink/50">{t("contact.artist")}</p>
            <p className="font-serif text-2xl mt-2">Cecilia Kristoffersson</p>
            <a href="mailto:cecilia@constcollection.com" className="block mt-4 text-accent hover:underline break-all">
              cecilia@constcollection.com
            </a>
            <p className="text-xs text-ink/50 mt-3">{t("contact.artistHint")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
