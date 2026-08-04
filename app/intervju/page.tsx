"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/components/LanguageProvider";

type QA = { q: string; a: string[]; q_en?: string; a_en?: string[] };

// Innehållet är strukturerat från Cecilias egna texter på constcollection.com.
// Cecilia kan justera/utöka frågorna när hon granskar sajten.
const qa: QA[] = [
  {
    q: "Vem är du som konstnär?",
    q_en: "Who are you as an artist?",
    a: [
      "Jag är en samtida konstnär vars verk utforskar feminin kraft, förfädernas minne och berättelsens återtagande. Jag arbetar primärt i akryl på duk och skapar lagrade kompositioner som fungerar som både personlig reflektion och andlig kommentar.",
    ],
    a_en: [
      "I am a contemporary artist whose work explores feminine power, ancestral memory and the reclamation of narrative. I work primarily in acrylic on canvas, creating layered compositions that serve as both personal reflection and spiritual commentary.",
    ],
  },
  {
    q: "Var växte du upp och hur formade det din konst?",
    q_en: "Where did you grow up and how did it shape your art?",
    a: [
      "Jag föddes 1971 i Bulawayo, Zimbabwe, och flyttade till södra Sverige 1986 när jag var sexton år. Min far var etnomusikolog så stora delar av min barndom tillbringades i bushen, lyssnande och dansande till ljudet av traditionella marimbor, mbiror och trummor.",
      "Genom hela uppväxten studerade jag dans och bildkonst — en resa som fortsatte i Sverige. Det jag bär med mig av rytm och färg från Zimbabwe är fortfarande grunden för det jag målar.",
    ],
    a_en: [
      "I was born in 1971 in Bulawayo, Zimbabwe, and moved to Southern Sweden in 1986 when I was sixteen. My father was an ethnomusicologist so much of my childhood was spent in the bush, listening to and dancing to the sounds of traditional marimbas, mbiras and drums.",
      "Throughout my upbringing I studied dance and visual art — a journey that continued in Sweden. What I carry with me of rhythm and colour from Zimbabwe is still the foundation of what I paint.",
    ],
  },
  {
    q: "Vad menar du när du säger att du är en \"mother artist\"?",
    q_en: "What do you mean when you say you are a \"mother artist\"?",
    a: [
      "I kärnan av mitt verk ligger en mors bön till samhället: att lyfta upp och stärka döttrarna. Jag målar berättelserna om kvinnor, mina döttrar i synnerhet, i vetskap om att de står i en lineage av kvinnor som varit ohörda, avfärdade och givna minst makt i både dåtid och nutid.",
      "Den tunga bördan av detta förfäders-arv stannar med oss. Mina målningar är ett vackert förklätt motstånd för deras räkning.",
    ],
    a_en: [
      "At the core of my work lies a mother's plea to society: to uplift and empower daughters. I paint the stories of women, my daughters in particular, knowing that they stand in a lineage of women who have been unheard, dismissed and granted the least power in both past and present societies.",
      "The heavy weight of this ancestral burden stops with us. My paintings are a beautiful disguise of quiet defiance on their behalf.",
    ],
  },
  {
    q: "Hur skulle du beskriva din process?",
    q_en: "How would you describe your process?",
    a: [
      "Jag använder dualistiska bilder projicerade på mina döttrars kroppar och skapar en synergi mellan pose och kommando, skönhet och komplexitet. Verket förkläder mina döttrars berättelser i levande bildspråk som drar betraktaren in i ett meditativt möte.",
      "Inom en upplyst handgjord ram kommer varje målning till liv genom samspelet mellan ljus och färg, i en andningslik rörelse som frigör målningens etheriska ande. En målning blir många, och många målningar är bara en.",
    ],
    a_en: [
      "I use dualistic images projected onto my daughters' bodies, creating a synergy between pose and command, beauty and complexity. The work disguises my daughters' stories in vivid imagery that draws the viewer into a meditative encounter.",
      "Within an illuminated handcrafted frame, each painting comes alive through the interplay of light and colour, in a breath-like movement that releases the ethereal spirit of the painting. One painting becomes many, and many paintings are only one.",
    ],
  },
  {
    q: "Varför 'Evening Garden Exhibitions'?",
    q_en: "Why 'Evening Garden Exhibitions'?",
    a: [
      "Jag är som lyckligast när människor spontant snubblar in i min konst. Jag bjuder in publik till en avslappnad picknick-atmosfär utomhus. Naturen blir inte bara en kuliss utan en samarbetspartner.",
      "När natten drar för himlen, då lyser målningarna upp — och en känsla av samvaro, stillhet och uppskattning framkallas.",
    ],
    a_en: [
      "I am happiest when people spontaneously stumble into my art. I invite the audience to a relaxed picnic atmosphere outdoors. Nature becomes not just a backdrop but a collaborator.",
      "When the night curtains the sky, the paintings light up — and a sense of togetherness, stillness and appreciation is conjured.",
    ],
  },
  {
    q: "Vad vill du säga till världen genom din konst?",
    q_en: "What do you want to say to the world through your art?",
    a: [
      "I en värld överlastad av brus tror jag att konst är det enda rena vi har kvar. Den uppstår inte ur marknadsplatsen eller den passerande trenden. Den är sin egen — ett genuint uttryck, en rå känsla, en målad sanning.",
      "Det är jag — vacker, motspänstig, närvarande. Och framtiden är säkerligen kvinnlig.",
    ],
    a_en: [
      "In a world cluttered by noise, I believe that art is the only pure thing left. It doesn't originate from the marketplace or the passing trend. It is its own — a genuine expression, a raw feeling, a painted truth.",
      "This is me — beautiful, defiant, present. And the future is surely female.",
    ],
  },
];

export default function IntervjuPage() {
  const { t, lang } = useLang();
  return (
    <div>
      {/* HERO med bakgrundsbild */}
      <section className="relative bg-ink text-paper overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/art/lilith-i.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-45"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-ink/15" />
        <div className="relative max-w-4xl mx-auto px-6 py-20 md:py-28">
          <Link href="/" className="text-sm text-paper/70 hover:text-accent">{t("nav.back")}</Link>
          <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mt-8">{t("interview.eyebrow")}</p>
          <h1 className="font-serif text-5xl md:text-7xl mt-3 leading-[1.05]">
            {t("interview.h1part1")} <em>Cecilia K.</em>
          </h1>
          <p className="mt-5 text-paper/85 max-w-2xl leading-relaxed text-lg">{t("interview.intro")}</p>
        </div>
      </section>

      {/* Q&A med bild sidan om */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] gap-10 md:gap-16">

          {/* Bild — sticky vid scroll på desktop */}
          <figure className="md:sticky md:top-24 md:self-start">
            <div className="rounded-xl overflow-hidden bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/art/phenomenal.jpg"
                alt="Phenomenal — Cecilia K."
                className="w-full h-auto block"
              />
            </div>
            <figcaption className="mt-3 text-sm text-ink/60 italic text-center md:text-left">
              <span className="font-serif text-base text-ink not-italic">Phenomenal</span>
              <span className="mx-2 text-ink/30">·</span>2023
            </figcaption>
            <p className="mt-6 text-sm text-ink/55 leading-relaxed hidden md:block">
              &quot;In a world cluttered by noise, art is the only pure thing left.&quot;
              <br/><span className="text-ink/40">— Cecilia K.</span>
            </p>
          </figure>

          {/* Q&A */}
          <div className="space-y-12">
            {qa.map((item, i) => {
              const q = (lang === "en" && item.q_en) ? item.q_en : item.q;
              const a = (lang === "en" && item.a_en) ? item.a_en : item.a;
              return (
                <article key={i} className="border-b border-ink/10 pb-10 last:border-b-0">
                  <h2 className="font-serif text-2xl md:text-3xl text-accent leading-snug">{q}</h2>
                  <div className="mt-5 space-y-4 text-ink/80 leading-relaxed text-lg">
                    {a.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-warm rounded-xl p-8 text-center">
          <p className="font-serif text-2xl">{t("interview.moreH")}</p>
          <p className="text-ink/70 mt-3">
            {t("interview.moreP")}
          </p>
          <p className="mt-4">
            <a className="text-accent hover:underline font-medium" href="mailto:cecilia.kristoffersson71@gmail.com">
              cecilia.kristoffersson71@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
