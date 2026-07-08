import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Intervju — Art by Cecilia K.",
  description: "Intervju med konstnären Cecilia Kristoffersson om feminin kraft, förfädernas minne och hennes konstnärliga process.",
};

type QA = { q: string; a: string[] };

// Innehållet är strukturerat från Cecilias egna texter på constcollection.com.
// Cecilia kan justera/utöka frågorna när hon granskar sajten.
const qa: QA[] = [
  {
    q: "Vem är du som konstnär?",
    a: [
      "Jag är en samtida konstnär vars verk utforskar feminin kraft, förfädernas minne och berättelsens återtagande. Jag arbetar primärt i akryl på duk och skapar lagrade kompositioner som fungerar som både personlig reflektion och andlig kommentar.",
    ],
  },
  {
    q: "Var växte du upp och hur formade det din konst?",
    a: [
      "Jag föddes 1971 i Bulawayo, Zimbabwe, och flyttade till södra Sverige 1986 när jag var sexton år. Min far var etnomusikolog så stora delar av min barndom tillbringades i bushen, lyssnande och dansande till ljudet av traditionella marimbor, mbiror och trummor.",
      "Genom hela uppväxten studerade jag dans och bildkonst — en resa som fortsatte i Sverige. Det jag bär med mig av rytm och färg från Zimbabwe är fortfarande grunden för det jag målar.",
    ],
  },
  {
    q: "Vad menar du när du säger att du är en \"mother artist\"?",
    a: [
      "I kärnan av mitt verk ligger en mors bön till samhället: att lyfta upp och stärka döttrarna. Jag målar berättelserna om kvinnor, mina döttrar i synnerhet, i vetskap om att de står i en lineage av kvinnor som varit ohörda, avfärdade och givna minst makt i både dåtid och nutid.",
      "Den tunga bördan av detta förfäders-arv stannar med oss. Mina målningar är ett vackert förklätt motstånd för deras räkning.",
    ],
  },
  {
    q: "Hur skulle du beskriva din process?",
    a: [
      "Jag använder dualistiska bilder projicerade på mina döttrars kroppar och skapar en synergi mellan pose och kommando, skönhet och komplexitet. Verket förkläder mina döttrars berättelser i levande bildspråk som drar betraktaren in i ett meditativt möte.",
      "Inom en upplyst handgjord ram kommer varje målning till liv genom samspelet mellan ljus och färg, i en andningslik rörelse som frigör målningens etheriska ande. En målning blir många, och många målningar är bara en.",
    ],
  },
  {
    q: "Varför 'Evening Garden Exhibitions'?",
    a: [
      "Jag är som lyckligast när människor spontant snubblar in i min konst. Jag bjuder in publik till en avslappnad picknick-atmosfär utomhus. Naturen blir inte bara en kuliss utan en samarbetspartner.",
      "När natten drar för himlen, då lyser målningarna upp — och en känsla av samvaro, stillhet och uppskattning framkallas.",
    ],
  },
  {
    q: "Vad vill du säga till världen genom din konst?",
    a: [
      "I en värld överlastad av brus tror jag att konst är det enda rena vi har kvar. Den uppstår inte ur marknadsplatsen eller den passerande trenden. Den är sin egen — ett genuint uttryck, en rå känsla, en målad sanning.",
      "Det är jag — vacker, motspänstig, närvarande. Och framtiden är säkerligen kvinnlig.",
    ],
  },
];

export default function IntervjuPage() {
  return (
    <div>
      {/* HERO med bakgrundsbild */}
      <section className="relative bg-ink text-paper overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/art/lilith-ii.png"
            alt=""
            fill
            priority
            className="object-cover opacity-45"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="relative max-w-4xl mx-auto px-6 py-20 md:py-28">
          <Link href="/" className="text-sm text-paper/70 hover:text-accent">← Tillbaka</Link>
          <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold mt-8">Intervju</p>
          <h1 className="font-serif text-5xl md:text-7xl mt-3 leading-[1.05]">
            Samtal med <em>Cecilia K.</em>
          </h1>
          <p className="mt-5 text-paper/85 max-w-2xl leading-relaxed text-lg">
            Om feminin kraft, förfädernas minne och varför hon ställer ut sin konst
            i trädgårdar på kvällen.
          </p>
        </div>
      </section>

      {/* Q&A med bild sidan om */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] gap-10 md:gap-16">

          {/* Bild — sticky vid scroll på desktop */}
          <figure className="md:sticky md:top-24 md:self-start">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-ink/5">
              <Image
                src="/art/phenomenal-woman.png"
                alt="Phenomenal Woman — Cecilia K."
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-ink/60 italic text-center md:text-left">
              <span className="font-serif text-base text-ink not-italic">Phenomenal Woman</span>
              <span className="mx-2 text-ink/30">·</span>2023
            </figcaption>
            <p className="mt-6 text-sm text-ink/55 leading-relaxed hidden md:block">
              &quot;In a world cluttered by noise, art is the only pure thing left.&quot;
              <br/><span className="text-ink/40">— Cecilia K.</span>
            </p>
          </figure>

          {/* Q&A */}
          <div className="space-y-12">
            {qa.map((item, i) => (
              <article key={i} className="border-b border-ink/10 pb-10 last:border-b-0">
                <h2 className="font-serif text-2xl md:text-3xl text-accent leading-snug">
                  {item.q}
                </h2>
                <div className="mt-5 space-y-4 text-ink/80 leading-relaxed text-lg">
                  {item.a.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-warm rounded-xl p-8 text-center">
          <p className="font-serif text-2xl">Vill du veta mer?</p>
          <p className="text-ink/70 mt-3">
            Boka en artist talk eller konstvisning hos Cecilia.
          </p>
          <p className="mt-4">
            <a className="text-accent hover:underline font-medium" href="mailto:cecilia@constcollection.com">
              cecilia@constcollection.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
