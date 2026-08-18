"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLang } from "@/components/LanguageProvider";
import { Lang } from "@/lib/i18n";

type ExhibitionMedia = { type: "image" | "video"; src: string };

type Exhibition = {
  start: string;          // ÅÅÅÅ-MM
  end?: string;           // ÅÅÅÅ-MM
  startDag?: string;      // ÅÅÅÅ-MM-DD — exakt datum för korta evenemang
  slutDag?: string;       // ÅÅÅÅ-MM-DD
  title: string;
  title_en?: string;
  place: string;
  place_en?: string;
  city: string;
  note?: string;
  note_en?: string;
  media?: ExhibitionMedia[]; // foton/filmer från utställningen — bläddras i dialogrutan
  ongoing?: boolean; // pågår tills vidare, utan bestämt slutdatum
  status: "upcoming" | "current" | "past";
};

// Räknas ut vid rendering så kommande/tidigare aldrig ruttnar
const TODAY = new Date().toISOString().slice(0, 7);
const IDAG = new Date().toISOString().slice(0, 10);

const exhibitionsRaw: Omit<Exhibition, "status">[] = [
  { start: "2026-08", startDag: "2026-08-07", slutDag: "2026-08-08", title: "Trädgårdsfest — Evening Garden Exhibition", place: "7-8 augusti", place_en: "7-8 August", city: "Helsingborg",
    note: "Två helger i augusti — kvällsvisning i trädgården där målningarna lyser upp när natten faller",
    note_en: "Two weekends in August — evening viewing in the garden where the paintings light up as night falls",
    media: [{ type: "video", src: "/exhibitions/tradgardsfest-2026/1.mp4" }] },
  { start: "2026-08", startDag: "2026-08-14", slutDag: "2026-08-15", title: "Trädgårdsfest — Evening Garden Exhibition", place: "14-15 augusti", place_en: "14-15 August", city: "Helsingborg",
    note: "Andra helgen — samma format, ny publik",
    note_en: "Second weekend — same format, new audience" },
  { start: "2025-11", title: "BYWRTRS Gallery", place: "Odengatan 15", city: "Stockholm",
    note: "Soloutställning", note_en: "Solo exhibition", ongoing: true,
    media: [
      { type: "image", src: "/exhibitions/bywrtrs/1.jpg" },
      { type: "image", src: "/exhibitions/bywrtrs/2.jpg" },
      { type: "video", src: "/exhibitions/bywrtrs/3.mp4" },
    ] },
  { start: "2026-02", end: "2026-03", title: "I samarbete med HBGCITY", title_en: "In collaboration with HBGCITY", place: "Södergatan 11 & Södergallerian", city: "Helsingborg",
    media: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({ type: "image" as const, src: `/exhibitions/hbgcity/${n}.jpg` })) },
  { start: "2025-11", title: "\"Here Together\" — gruppvisning", title_en: "\"Here Together\" — group show", place: "Dunkers Kulturhus", city: "Helsingborg",
    note: "I samarbete med Kulturrumet", note_en: "In collaboration with Kulturrumet",
    media: [1, 2, 3].map((n) => ({ type: "image" as const, src: `/exhibitions/dunkers/${n}.jpg` })) },
  { start: "2025-08", title: "\"Edenfield Returns\" Evening Garden Exhibition", place: "Norrtäljegatan", city: "Helsingborg",
    media: [1, 2, 3, 4].map((n) => ({ type: "image" as const, src: `/exhibitions/edenfield-returns-2025/${n}.jpg` })) },
  { start: "2024-12", end: "2025-03", title: "\"Edenfield Sees You\"", place: "Clarion Sea U Hotel", city: "Helsingborg",
    media: [{ type: "video", src: "/exhibitions/edenfield-sees-you/1.mp4" }] },
  { start: "2024-08", title: "\"Edenfield\" Evening Garden Exhibition", place: "Norrtäljegatan", city: "Helsingborg",
    note: "Cecilia föredrar utomhus-exhibitioner — där målningarna lyser i mörkret",
    note_en: "Cecilia prefers outdoor exhibitions — where the paintings glow in the dark",
    media: [1, 2, 3].map((n) => ({ type: "image" as const, src: `/exhibitions/edenfield-2024/${n}.jpg` })) },
];

function getStatus(e: Omit<Exhibition, "status">): Exhibition["status"] {
  if (e.ongoing) return "current";
  // Dagsexakta datum går före månadsjämförelsen — annars ligger en helghelg
  // kvar som "pågående" resten av månaden
  if (e.slutDag || e.startDag) {
    const slut = e.slutDag ?? e.startDag!;
    const start = e.startDag ?? e.slutDag!;
    if (slut < IDAG) return "past";
    if (start > IDAG) return "upcoming";
    return "current";
  }
  const end = e.end ?? e.start;
  if (end < TODAY) return "past";
  if (e.start > TODAY) return "upcoming";
  return "current";
}

const exhibitions: Exhibition[] = exhibitionsRaw
  .map((e) => ({ ...e, status: getStatus(e) }))
  .sort((a, b) => b.start.localeCompare(a.start));

function fmt(ym: string, lang: Lang): string {
  const [y, m] = ym.split("-");
  const monthsSv = ["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"];
  const monthsEn = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  return `${(lang === "en" ? monthsEn : monthsSv)[parseInt(m,10)-1]} ${y}`;
}

const titleOf = (e: Exhibition, lang: Lang) => (lang === "en" && e.title_en ? e.title_en : e.title);
const placeOf = (e: Exhibition, lang: Lang) => (lang === "en" && e.place_en ? e.place_en : e.place);

function range(e: Exhibition, lang: Lang): string {
  if (e.ongoing) return `${fmt(e.start, lang)} – ${lang === "en" ? "ongoing" : "pågår"}`;
  if (!e.end || e.end === e.start) return fmt(e.start, lang);
  return `${fmt(e.start, lang)} – ${fmt(e.end, lang)}`;
}

// Tumnagel enligt konvention: /exhibitions/<slug>/thumbs/<n>.jpg (även för filmer — bildruta ur videon)
function thumbOf(m: ExhibitionMedia): string {
  return m.src.replace(/\/([^/]+)\.(jpg|mp4)$/, "/thumbs/$1.jpg");
}

function ExhibitionDialog({ exhibition, lang, onClose }: { exhibition: Exhibition; lang: Lang; onClose: () => void }) {
  const media = exhibition.media ?? [];
  const [index, setIndex] = useState(0);
  // Nollställ vid byte av utställning — annars pekar index utanför den nya listan
  useEffect(() => setIndex(0), [exhibition]);
  const current = media[Math.min(index, Math.max(media.length - 1, 0))];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => Math.min(i + 1, media.length - 1));
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, media.length]);

  const arrowClass =
    "absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/85 hover:bg-white text-ink shadow-md flex items-center justify-center text-xl transition disabled:opacity-0 disabled:pointer-events-none";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={titleOf(exhibition, lang)}>
      <div className="absolute inset-0 bg-ink/60" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8">
        <button
          onClick={onClose}
          aria-label={lang === "en" ? "Close" : "Stäng"}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-ink/5 text-ink/60 hover:text-ink transition"
        >
          ✕
        </button>

        <h3 className="font-serif text-2xl md:text-4xl leading-tight pr-10">{titleOf(exhibition, lang)}</h3>
        <p className="text-ink/60 mt-1.5 text-sm">
          {range(exhibition, lang)} · {placeOf(exhibition, lang)} · {exhibition.city}
        </p>

        {media.length > 0 && (
          <div className="mt-5">
            {/* Huvudvy */}
            <div className="relative bg-ink rounded-xl overflow-hidden flex items-center justify-center min-h-[240px]">
              {current.type === "image" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={current.src} src={current.src} alt={titleOf(exhibition, lang)} className="w-full max-h-[52vh] object-contain" />
              ) : (
                <video
                  key={current.src}
                  src={current.src}
                  controls
                  playsInline
                  preload="metadata"
                  poster={thumbOf(current)}
                  className="w-full max-h-[52vh] object-contain"
                />
              )}
              {media.length > 1 && (
                <>
                  <button
                    onClick={() => setIndex((i) => Math.max(i - 1, 0))}
                    disabled={index === 0}
                    aria-label={lang === "en" ? "Previous" : "Föregående"}
                    className={`${arrowClass} left-3`}
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => setIndex((i) => Math.min(i + 1, media.length - 1))}
                    disabled={index === media.length - 1}
                    aria-label={lang === "en" ? "Next" : "Nästa"}
                    className={`${arrowClass} right-3`}
                  >
                    ›
                  </button>
                  <span className="absolute bottom-2.5 right-3 text-xs text-white/80 bg-ink/50 rounded-full px-2 py-0.5">
                    {index + 1} / {media.length}
                  </span>
                </>
              )}
            </div>

            {/* Tumnaglar */}
            {media.length > 1 && (
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {media.map((m, i) => (
                  <button
                    key={m.src}
                    onClick={() => setIndex(i)}
                    aria-label={`${i + 1}`}
                    className={`relative w-16 h-16 shrink-0 rounded-lg overflow-hidden border-2 transition ${
                      i === index ? "border-accent" : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    {m.type === "image" ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={m.src} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <span className="w-full h-full bg-ink flex items-center justify-center text-white text-lg">▶</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <a
          href="mailto:k.magnus.florin@gmail.com?subject=Bokning%20—%20Const%20Collection%20Art%20by%20Cecilia%20K."
          className="inline-block mt-6 px-6 py-3 bg-ink text-white rounded-full text-sm font-medium hover:bg-accent transition"
        >
          {lang === "en" ? "Book a viewing →" : "Boka en visning →"}
        </a>
      </div>
    </div>
  );
}

export default function UtstallningarPage() {
  const { t, lang } = useLang();
  const [selected, setSelected] = useState<Exhibition | null>(null);
  // Trädgårdsfesten byter från inbjudan till återblick när sista helgen passerat
  const festenKvar = exhibitions.some((e) => e.startDag && e.status !== "past");
  const upcoming = exhibitions.filter((e) => e.status === "upcoming" || e.status === "current");
  const past = exhibitions.filter((e) => e.status === "past");
  const noteFor = (e: Exhibition) => (lang === "en" && e.note_en) ? e.note_en : e.note;

  return (
    <div>
      {/* HERO */}
      <section className="relative bg-ink text-paper overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/art/i-rise.jpg" alt="" fill priority className="object-cover opacity-65" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-ink/15" />
        <div className="relative max-w-4xl mx-auto px-6 py-20 md:py-28">
          <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">{t("exh.eyebrow")}</p>
          <h1 className="font-serif text-5xl md:text-7xl mt-3 leading-[1.05]">{t("exh.h1")}</h1>
          <p className="mt-5 text-paper/85 max-w-2xl leading-relaxed text-lg">{t("exh.intro")}</p>
        </div>
      </section>

      {/* TRÄDGÅRDSFEST — utvalt event med affisch */}
      <section className="bg-warm py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-[280px_1fr] gap-8 items-start">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden shadow-xl bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={lang === "en" ? "/art/tradgardsfest-en.jpg" : "/art/tradgardsfest-sv.jpg"}
                  alt="Kvällskonst 2026 — Trädgårdsfesten"
                  className="w-full h-auto block"
                />
              </div>
              {/* Film från helgens utställning — bredvid affischen */}
              <figure>
                <video
                  src="/exhibitions/tradgardsfest-2026/1.mp4"
                  poster="/exhibitions/tradgardsfest-2026/thumbs/1.jpg"
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-auto block rounded-lg shadow-xl bg-ink"
                  aria-label={lang === "en" ? "Film from the exhibition" : "Film från utställningen"}
                />
                <figcaption className="mt-2 text-xs text-ink/55 italic text-center">
                  {lang === "en" ? "Film from the exhibition" : "Film från utställningen"}
                </figcaption>
              </figure>
            </div>
            <div>
              <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">
                {festenKvar
                  ? (lang === "en" ? "Featured this summer" : "Sommarens höjdpunkt")
                  : (lang === "en" ? "Summer 2026 — thank you!" : "Sommaren 2026 — tack!")}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl mt-3">Kvällskonst 2026</h2>
              <p className="mt-4 text-ink/80 leading-relaxed">
                {festenKvar
                  ? (lang === "en"
                      ? "Evening art exhibition outdoors in the garden. Bring your own picnic basket and blanket, sit a while and enjoy the shifting colours of the paintings when night falls."
                      : "Kvällskonst-utställning ute i trädgården. Ta med egen picknickkorg och filt, sitt en stund och njut av tavlornas skiftande färger när natten faller.")
                  : (lang === "en"
                      ? "Two August weekends in the garden, where the paintings lit up as night fell. Thank you to everyone who came — the film beside gives a glimpse of the evenings."
                      : "Två augustihelger i trädgården, där målningarna tändes när natten föll. Tack till alla som kom — filmen bredvid ger en glimt av kvällarna.")}
              </p>
              <ul className="mt-5 space-y-1 text-sm">
                <li>📅 <strong>{lang === "en" ? "7–8 August & 14–15 August 2026" : "7–8 augusti & 14–15 augusti 2026"}</strong></li>
                <li>📍 Norrtäljegatan 13, Helsingborg</li>
                {festenKvar && <li>🕗 20:30–23:00</li>}
                {festenKvar && (
                  <li className="text-ink/60 italic mt-2">
                    {lang === "en" ? "Cancelled if heavy rain." : "Ställs in vid mycket regn."}
                  </li>
                )}
                {!festenKvar && (
                  <li className="text-ink/60 italic mt-2">
                    {lang === "en"
                      ? "Want to know about the next one? Get in touch with Magnus."
                      : "Vill du veta när nästa blir av? Hör av dig till Magnus."}
                  </li>
                )}
              </ul>
              <p className="mt-4 text-sm text-ink/70 border-l-2 border-gold/60 pl-3">
                {t("exh.originalRule")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KOMMANDE / PÅGÅENDE */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="border-b border-ink/15 pb-4 mb-8 flex items-baseline justify-between">
          <h2 className="font-serif text-3xl">{t("exh.upcoming.h")}</h2>
          <span className="text-sm text-ink/40">{upcoming.length}</span>
        </div>

        {upcoming.length === 0 ? (
          <div className="bg-warm rounded-xl p-8 text-center">
            <p className="font-serif text-2xl">{t("exh.upcoming.empty")}</p>
            <p className="text-ink/60 mt-3 leading-relaxed">
              {t("exh.upcoming.emptyP")}
              <a className="text-accent hover:underline ml-1" href="mailto:k.magnus.florin@gmail.com">Magnus Florin</a>.
            </p>
          </div>
        ) : (
          <ul className="space-y-6">
            {upcoming.map((e, i) => (
              <li key={i} className="border border-accent/30 bg-accent/5 rounded-xl p-5">
                <button
                  onClick={() => e.media?.length && setSelected(e)}
                  disabled={!e.media?.length}
                  className="w-full text-left group flex flex-col md:flex-row md:items-center gap-3 md:gap-8 disabled:cursor-default"
                >
                  <div className="md:w-56 shrink-0">
                    <p className="text-xs text-ink/60 uppercase tracking-widest font-semibold">{range(e, lang)}</p>
                    <span className="inline-block mt-2 text-xs bg-accent text-white px-2 py-0.5 rounded-full">
                      {e.status === "current" ? t("exh.badgeCurrent") : t("exh.badgeUpcoming")}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-2xl group-hover:text-accent transition">{titleOf(e, lang)}</p>
                    <p className="text-ink/70 mt-1">{placeOf(e, lang)} · {e.city}</p>
                    {noteFor(e) && <p className="text-sm text-ink/55 mt-2 italic">{noteFor(e)}</p>}
                    {e.media && e.media.length > 0 && (
                      <p className="text-sm text-accent font-medium mt-2">
                        {e.media.some((m) => m.type === "video")
                          ? (lang === "en" ? "View photos & film →" : "Se bilder & film →")
                          : (lang === "en" ? "View the photos →" : "Se bilderna →")}
                      </p>
                    )}
                  </div>
                  {e.media && e.media.length > 0 && (
                    <div className="flex gap-1.5 shrink-0">
                      {e.media.slice(0, 3).map((m, mi) => (
                        <span key={m.src} className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden ring-1 ring-ink/10 group-hover:ring-accent/40 transition">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={thumbOf(m)} alt="" loading="lazy" className="w-full h-full object-cover" />
                          {m.type === "video" && (
                            <span className="absolute inset-0 flex items-center justify-center bg-ink/25">
                              <span className="w-7 h-7 rounded-full bg-white/85 text-ink flex items-center justify-center text-[11px] pl-0.5">▶</span>
                            </span>
                          )}
                          {mi === 2 && e.media!.length > 3 && (
                            <span className="absolute inset-0 flex items-center justify-center bg-ink/55 text-white text-sm font-semibold">
                              +{e.media!.length - 3}
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  )}
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* HISTORIK */}
      <section className="bg-warm py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="border-b border-ink/15 pb-4 mb-8 flex items-baseline justify-between">
            <h2 className="font-serif text-3xl">{t("exh.past.h")}</h2>
            <span className="text-sm text-ink/40">{past.length} {t("exh.past.total")}</span>
          </div>
          <ol className="relative border-l-2 border-accent/30 pl-8 ml-3 space-y-9">
            {past.map((e, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[42px] top-1 w-4 h-4 rounded-full bg-accent ring-4 ring-warm"></span>
                <button
                  onClick={() => setSelected(e)}
                  className="block w-full text-left group rounded-lg -m-2 p-2 transition hover:bg-white/70"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-ink/50 uppercase tracking-widest font-medium">{range(e, lang)}</p>
                      <h3 className="font-serif text-2xl mt-1 group-hover:text-accent transition">{titleOf(e, lang)}</h3>
                      <p className="text-ink/70 mt-1">{placeOf(e, lang)} · {e.city}</p>
                      {e.media && e.media.length > 0 && (
                        <p className="text-sm text-accent font-medium mt-2">
                          {e.media.some((m) => m.type === "video")
                            ? (lang === "en" ? "View photos & film →" : "Se bilder & film →")
                            : (lang === "en" ? "View the photos →" : "Se bilderna →")}
                        </p>
                      )}
                    </div>
                    {e.media && e.media.length > 0 && (
                      <div className="flex gap-1.5 shrink-0">
                        {e.media.slice(0, 3).map((m, mi) => (
                          <span
                            key={m.src}
                            className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden ring-1 ring-ink/10 group-hover:ring-accent/40 transition"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={thumbOf(m)} alt="" loading="lazy" className="w-full h-full object-cover" />
                            {m.type === "video" && (
                              <span className="absolute inset-0 flex items-center justify-center bg-ink/25">
                                <span className="w-7 h-7 rounded-full bg-white/85 text-ink flex items-center justify-center text-[11px] pl-0.5">▶</span>
                              </span>
                            )}
                            {mi === 2 && e.media!.length > 3 && (
                              <span className="absolute inset-0 flex items-center justify-center bg-ink/55 text-white text-sm font-semibold">
                                +{e.media!.length - 3}
                              </span>
                            )}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="font-serif text-2xl">{t("exh.bookH")}</p>
        <p className="text-ink/70 mt-3">{t("exh.bookP")}</p>
        <p className="mt-5">
          <a className="text-accent hover:underline font-medium" href="mailto:k.magnus.florin@gmail.com">
            Magnus Florin ({t("contact.curator").toLowerCase()})
          </a>
          <span className="text-ink/40 mx-2">·</span>
          <a className="text-accent hover:underline" href="tel:+46708734215">+46 708 73 42 15</a>
        </p>
      </section>

      {selected && <ExhibitionDialog exhibition={selected} lang={lang} onClose={() => setSelected(null)} />}
    </div>
  );
}
