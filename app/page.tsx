import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

export default function Home() {
  const previewWorks = [
    products.find((p) => p.slug === "speaking-in-colour"),
    products.find((p) => p.slug === "madonna"),
    products.find((p) => p.slug === "matopos"),
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
            <Link href="/butik" className="px-7 py-3 bg-accent text-white rounded-full font-medium hover:bg-accentSoft transition">
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
          </div>
        </div>
      </section>

      {/* EVENING GARDEN EXHIBITIONS — Cecilias signatur */}
      <section className="bg-warm py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">
            Cecilias signatur-format
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">
            Evening Garden Exhibitions
          </h2>
          <p className="mt-6 text-ink/80 leading-relaxed text-lg max-w-2xl mx-auto">
            Cecilia är som lyckligast när människor spontant snubblar in i hennes konst.
            Hon föredrar att visa verken i trädgårdar på kvällen — där natten drar för
            himlen, målningarna lyser upp, och en känsla av samvaro väcks.
          </p>
          <p className="mt-5 text-ink/65 leading-relaxed max-w-2xl mx-auto italic">
            &quot;The outdoors becomes not only a backdrop but a collaborator.
            As the night curtains the sky, the paintings light up.&quot;
          </p>
          <Link href="/utstallningar" className="inline-block mt-8 px-7 py-3 bg-ink text-paper rounded-full font-medium hover:bg-accent transition">
            Se alla utställningar →
          </Link>
        </div>
      </section>

      {/* MANIFEST — DEAR FRIENDS */}
      <section className="bg-ink text-paper py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold text-center">
            Cecilias ord
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 text-center">Dear friends,</h2>
          <div className="mt-10 space-y-6 text-paper/85 leading-relaxed text-lg font-serif italic">
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
              behalf. As a mother artist, my goal is to amplify their voices and
              hold an uncompromising space for their worth. The future is surely
              female. With much love,&quot;
            </p>
          </div>
          <p className="mt-8 text-paper/60 text-center font-serif">— Cecilia Kristoffersson</p>
        </div>
      </section>

      {/* PREVIEW AV VERK */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-8 border-b border-ink/15 pb-4">
          <div>
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-semibold">Aktuellt</p>
            <h2 className="font-serif text-4xl mt-2">Ett urval verk</h2>
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
      </section>

      {/* INTERVJU-CTA */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">Samtal med konstnären</p>
        <h2 className="font-serif text-4xl mt-3">Intervju med Cecilia</h2>
        <p className="mt-5 text-ink/75 leading-relaxed max-w-2xl mx-auto">
          Om feminin kraft, förfädernas minne och varför hon ställer ut sin konst
          i trädgårdar på kvällen.
        </p>
        <Link href="/intervju" className="inline-block mt-7 px-7 py-3 bg-ink text-paper rounded-full font-medium hover:bg-accent transition">
          Läs hela intervjun →
        </Link>
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
            <a href="mailto:cecilia.kristoffersson71@gmail.com" className="block mt-4 text-accent hover:underline break-all">
              cecilia.kristoffersson71@gmail.com
            </a>
            <p className="text-xs text-ink/50 mt-3">Artist talks · konstvisningar · personlig kontakt</p>
          </div>
        </div>

        {/* Köp-flöde — peka mot butiken */}
        <div className="mt-8 bg-ink text-paper rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent font-semibold">Vill du köpa ett verk?</p>
            <p className="font-serif text-2xl mt-2">Köp sker direkt via butiken</p>
            <p className="text-paper/70 text-sm mt-2 max-w-md">
              Original, plexiglas, canvas och poster. Trygg betalning med kort eller Klarna via Stripe.
            </p>
          </div>
          <Link
            href="/butik"
            className="px-7 py-3 bg-accent text-white rounded-full font-medium hover:bg-accentSoft transition shrink-0"
          >
            Till butiken →
          </Link>
        </div>
      </section>
    </div>
  );
}
