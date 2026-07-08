import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

export default function Home() {
  // "Andra utvalda verk" — visar EJ de verk som redan visats sidan om text ovan
  // (Three Graces, Speaking in Colour, Madonna, Matopos är redan med på hemsidan).
  const otherWorks = [
    products.find((p) => p.slug === "the-birth-of-venus"),
    products.find((p) => p.slug === "noma"),
    products.find((p) => p.slug === "lilith-ii"),
  ].filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div>
      {/* HERO — video-redo med poster-fallback */}
      <section className="relative bg-ink text-paper overflow-hidden">
        <div className="absolute inset-0">
          {/* När Cecilia skickar video: lägg /cecilia-intro.mp4 i /public/ och avkommentera:
              <video autoPlay muted loop playsInline poster="/art/matopos.png"
                     className="w-full h-full object-cover opacity-55">
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
            Storskaliga illuminerade akrylmålningar om feminin kraft, förfädernas minne
            och berättelsens återtagande.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/galleri" className="px-7 py-3 bg-accent text-white rounded-full font-medium hover:bg-accentSoft transition">
              Se verken
            </Link>
            <Link href="/utstallningar" className="px-7 py-3 border border-paper/30 text-paper rounded-full font-medium hover:bg-paper hover:text-ink transition">
              Utställningar
            </Link>
          </div>
        </div>
      </section>

      {/* WHO HOLDS THE BRUSH? — biografi-sektion */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-ink/5 md:sticky md:top-24">
            <Image
              src="/art/the-three-graces.png"
              alt="The Three Graces — Cecilia Kristoffersson"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">
              Who holds the brush?
            </p>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-tight">
              Cecilia Kristoffersson
            </h2>
            <div className="mt-7 space-y-5 text-ink/80 leading-relaxed">
              <p>
                Cecilia föddes 1971 i <strong>Bulawayo, Zimbabwe</strong>, och flyttade till södra
                Sverige 1986 när hon var sexton. Hennes far var etnomusikolog —
                stora delar av barndomen tillbringades i bushen, med ljudet av
                traditionella marimbor, mbiror och trummor som bakgrund.
              </p>
              <p>
                Genom hela uppväxten studerade hon dans och bildkonst, en resa som
                fortsatte i Sverige. Som ung vuxen utbildade hon sig till
                bildkonstpedagog och hade sedan en <strong>20-årig karriär som International
                Baccalaureate Workshop Leader</strong>. Under tiden fortsatte hon sin
                konstnärliga praktik och arbetade även som professionell dansare
                vid olika teatrar.
              </p>
              <p>
                Cecilia K. arbetar primärt i <strong>akryl på duk</strong> och utforskar
                kvinnlig kraft, förfädernas minne och berättelsens återtagande.
                I kärnan av hennes verk ligger en mors bön till samhället —
                att lyfta upp och stärka döttrarna.
              </p>
              <p>
                Genom dualistiska bilder projicerade på döttrarnas kroppar
                skapar hon en synergi mellan pose och kommando, skönhet och
                komplexitet. Varje målning kommer till liv inom en handgjord,
                upplyst ram — i samspelet mellan ljus och färg, som ger den
                &quot;ethereal spirit of the paintings&quot; hon själv beskriver.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/intervju"
                className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
              >
                Läs hela intervjun med Cecilia →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EVENING GARDEN EXHIBITIONS — bild höger, text vänster */}
      <section className="bg-warm py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div>
              <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">
                Cecilias signatur-format
              </p>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-tight">
                Evening Garden Exhibitions
              </h2>
              <p className="mt-6 text-ink/80 leading-relaxed text-lg">
                Cecilia är som lyckligast när människor spontant snubblar in i hennes konst.
                Hon föredrar att visa verken i trädgårdar på kvällen — där natten drar för
                himlen, målningarna lyser upp, och en känsla av samvaro väcks.
              </p>
              <p className="mt-5 text-ink/65 leading-relaxed italic">
                &quot;The outdoors becomes not only a backdrop but a collaborator.
                As the night curtains the sky, the paintings light up.&quot;
              </p>
              <Link href="/utstallningar" className="inline-block mt-8 px-7 py-3 bg-ink text-paper rounded-full font-medium hover:bg-accent transition">
                Se alla utställningar →
              </Link>
            </div>
            <figure className="md:order-last">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-ink/5">
                <Image
                  src="/art/speaking-in-colour.png"
                  alt="Speaking in Colour — Cecilia K."
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-ink/65 italic text-center md:text-left">
                <span className="font-serif text-base text-ink not-italic">Speaking in Colour</span>
                <span className="mx-2 text-ink/30">·</span>2025
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* MANIFEST — DEAR FRIENDS, bild vänster, text höger */}
      <section className="bg-ink text-paper py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <figure className="md:sticky md:top-24">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-paper/5">
                <Image
                  src="/art/madonna.png"
                  alt="Madonna — Cecilia K."
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-paper/60 italic text-center md:text-left">
                <span className="font-serif text-base text-paper not-italic">Madonna</span>
                <span className="mx-2 text-paper/30">·</span>2025
              </figcaption>
            </figure>
            <div>
              <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">
                Cecilias ord
              </p>
              <h2 className="font-serif text-4xl md:text-5xl mt-4">Dear friends,</h2>
              <div className="mt-8 space-y-5 text-paper/85 leading-relaxed font-serif italic">
                <p>
                  &quot;In a world cluttered by noise, I believe that art is the only pure
                  thing left. It doesn&apos;t originate from the marketplace or the
                  passing trend. It is its own — a genuine expression, a raw feeling,
                  a painted truth.&quot;
                </p>
                <p>
                  &quot;My truth is that I paint the stories of women, my daughters in
                  particular. Knowing that they stand in a lineage of women who are
                  and were unheard, dismissed and granted the least power in both past
                  and present societies. The heavy weight of this ancestral burden
                  stops with us.&quot;
                </p>
                <p>
                  &quot;My paintings are a beautiful disguise of quiet defiance on their
                  behalf. As a mother artist, my goal is to amplify their voices.
                  The future is surely female. With much love,&quot;
                </p>
              </div>
              <p className="mt-6 text-paper/60 font-serif">— Cecilia Kristoffersson</p>
            </div>
          </div>
        </div>
      </section>

      {/* ANDRA UTVALDA VERK */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">Mer ur samlingen</p>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">Andra utvalda verk</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {otherWorks.map((p) => (
            <Link
              key={p.id}
              href={`/products/${p.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/5] bg-ink/5 rounded-xl overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-4">
                <p className="text-xs text-ink/50 uppercase tracking-wider">{p.year}</p>
                <h3 className="font-serif text-2xl mt-1 italic group-hover:text-accent transition">{p.name}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Snyggare köp-CTA under verken */}
        <div className="mt-16 text-center border-t border-ink/10 pt-12">
          <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">Galleriet</p>
          <h3 className="font-serif text-3xl md:text-4xl mt-3">Se hela samlingen — och köp direkt</h3>
          <p className="mt-5 text-ink/70 max-w-xl mx-auto leading-relaxed">
            Poster, fine art print, canvas och plexiglastryck. Klarna, kort och Swish via Stripe.
          </p>
          <Link
            href="/galleri"
            className="inline-block mt-8 px-8 py-3.5 bg-ink text-paper rounded-full font-medium hover:bg-accent transition text-base"
          >
            Till galleriet →
          </Link>
        </div>
      </section>

      {/* SAMARBETEN & FORSKNING */}
      <section className="bg-warm py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">Samarbeten &amp; forskning</p>
            <h2 className="font-serif text-4xl mt-3">När konsten möter akademin</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-white rounded-xl p-6 border border-ink/10">
              <p className="text-xs uppercase tracking-widest text-ink/50">Publicerat i Sage Journals · 2024</p>
              <h3 className="font-serif text-2xl mt-2"><em>Past, Future, Present</em></h3>
              <p className="text-sm text-ink/65 mt-2">
                Bussey, M. &amp; Kristoffersson, C. (2024). Anticipatory Aesthetics &amp; Phenomenologies of Grace.
              </p>
              <p className="mt-4 text-ink/75 leading-relaxed text-sm italic">
                &quot;Denna dikt är en reflektion över motsägelserna inneboende i framtidsarbete.
                Det förflutna, det nutida och det framtida viker sig in i varandra — och detta
                speglas i den medvetet stamliga bilden som Kristoffersson erbjuder.
                I både bild och dikt ligger biografi och minne, både personligt och epokalt.&quot;
              </p>
              <a
                href="https://journals.sagepub.com/doi/10.1177/19467567241249718"
                target="_blank"
                rel="noopener"
                className="inline-block mt-4 text-sm text-accent hover:underline font-medium"
              >
                Läs hela publikationen →
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-ink/50">Medförfattare</p>
              <h3 className="font-serif text-2xl mt-2">Marcus Bussey, PhD</h3>
              <p className="text-ink/70 mt-3 leading-relaxed">
                Senior Lecturer i History and Futures vid University of the Sunshine Coast, Australien.
                Forskningsintresse: anticipatorisk estetik och fenomenologin av grace.
              </p>
              <p className="mt-5 text-xs uppercase tracking-widest text-ink/50">Verket som diskuteras</p>
              <h3 className="font-serif text-xl mt-2 italic">Past, Future, Present (2023)</h3>
              <p className="text-sm text-ink/65 mt-2">
                Tre tider i en kropp. Verket som figurerar i publikationen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="max-w-4xl mx-auto px-6 py-20">
        <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold text-center">
          Kontakt
        </p>
        <h2 className="font-serif text-4xl md:text-5xl mt-3 text-center">
          För gallery-bokningar &amp; konstvisningar
        </h2>
        <p className="text-center text-ink/70 mt-5 leading-relaxed max-w-2xl mx-auto">
          Vi pratar både svenska och engelska. <strong>I would love to hear from you</strong> —
          hör av dig så svarar vi inom 1–2 dagar.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="border border-ink/15 rounded-xl p-6 bg-white">
            <p className="text-xs uppercase tracking-widest text-ink/50">Curator</p>
            <p className="font-serif text-2xl mt-2">Magnus Florin</p>
            <a href="mailto:k.magnus.florin@gmail.com" className="block mt-4 text-accent hover:underline">
              k.magnus.florin@gmail.com
            </a>
            <a href="tel:+46708734215" className="block mt-1 text-ink/70 hover:text-ink">
              +46 708 73 42 15
            </a>
            <p className="text-xs text-ink/50 mt-3">Bokningar · utställningar · samarbeten</p>
          </div>

          <div className="border border-ink/15 rounded-xl p-6 bg-white">
            <p className="text-xs uppercase tracking-widest text-ink/50">Konstnären</p>
            <p className="font-serif text-2xl mt-2">Cecilia Kristoffersson</p>
            <a href="mailto:cecilia@constcollection.com" className="block mt-4 text-accent hover:underline break-all">
              cecilia@constcollection.com
            </a>
            <p className="text-xs text-ink/50 mt-3">Artist talks · konstvisningar · personlig kontakt</p>
          </div>
        </div>

      </section>
    </div>
  );
}
