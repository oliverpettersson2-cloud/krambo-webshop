"use client";

import Image from "next/image";
import { useLang } from "@/components/LanguageProvider";
import { Lang } from "@/lib/i18n";

type Exhibition = {
  start: string;
  end?: string;
  title: string;
  place: string;
  city: string;
  note?: string;
  note_en?: string;
  status: "upcoming" | "current" | "past";
};

const TODAY = "2026-07";

const exhibitionsRaw: Omit<Exhibition, "status">[] = [
  { start: "2026-08", title: "Trädgårdsfest — Evening Garden Exhibition", place: "7-8 augusti", city: "Helsingborg",
    note: "Två helger i augusti — kvällsvisning i trädgården där målningarna lyser upp när natten faller",
    note_en: "Two weekends in August — evening viewing in the garden where the paintings light up as night falls" },
  { start: "2026-08", title: "Trädgårdsfest — Evening Garden Exhibition", place: "14-15 augusti", city: "Helsingborg",
    note: "Andra helgen — samma format, ny publik",
    note_en: "Second weekend — same format, new audience" },
  { start: "2025-11", end: "2026-04", title: "BYWRTRS Gallery", place: "Odengatan 15", city: "Stockholm",
    note: "Soloutställning", note_en: "Solo exhibition" },
  { start: "2026-02", end: "2026-03", title: "I samarbete med HBGCITY", place: "Södergatan 11 & Södergallerian", city: "Helsingborg" },
  { start: "2025-11", title: "\"Here Together\" — gruppvisning", place: "Dunkers Kulturhus", city: "Helsingborg",
    note: "I samarbete med Kulturrumet", note_en: "In collaboration with Kulturrumet" },
  { start: "2025-08", title: "\"Edenfield Returns\" Evening Garden Exhibition", place: "Norrtäljegatan", city: "Helsingborg" },
  { start: "2024-12", end: "2025-03", title: "\"Edenfield Sees You\"", place: "Clarion Sea U Hotel", city: "Helsingborg" },
  { start: "2024-08", title: "\"Edenfield\" Evening Garden Exhibition", place: "Norrtäljegatan", city: "Helsingborg",
    note: "Cecilia föredrar utomhus-exhibitioner — där målningarna lyser i mörkret",
    note_en: "Cecilia prefers outdoor exhibitions — where the paintings glow in the dark" },
];

function getStatus(e: Omit<Exhibition, "status">): Exhibition["status"] {
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

function range(e: Exhibition, lang: Lang): string {
  if (!e.end || e.end === e.start) return fmt(e.start, lang);
  return `${fmt(e.start, lang)} – ${fmt(e.end, lang)}`;
}

export default function UtstallningarPage() {
  const { t, lang } = useLang();
  const upcoming = exhibitions.filter((e) => e.status === "upcoming" || e.status === "current");
  const past = exhibitions.filter((e) => e.status === "past");
  const noteFor = (e: Exhibition) => (lang === "en" && e.note_en) ? e.note_en : e.note;

  return (
    <div>
      {/* HERO */}
      <section className="relative bg-ink text-paper overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/art/still-like-air-i-rise.png" alt="" fill priority className="object-cover opacity-45" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="relative max-w-4xl mx-auto px-6 py-20 md:py-28">
          <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">{t("exh.eyebrow")}</p>
          <h1 className="font-serif text-5xl md:text-7xl mt-3 leading-[1.05]">{t("exh.h1")}</h1>
          <p className="mt-5 text-paper/85 max-w-2xl leading-relaxed text-lg">{t("exh.intro")}</p>
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
              <li key={i} className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-8 border border-accent/30 bg-accent/5 rounded-xl p-5">
                <div className="md:w-56 shrink-0">
                  <p className="text-xs text-ink/60 uppercase tracking-widest font-semibold">{range(e, lang)}</p>
                  <span className="inline-block mt-2 text-xs bg-accent text-white px-2 py-0.5 rounded-full">
                    {e.status === "current" ? t("exh.badgeCurrent") : t("exh.badgeUpcoming")}
                  </span>
                </div>
                <div>
                  <p className="font-serif text-2xl">{e.title}</p>
                  <p className="text-ink/70 mt-1">{e.place} · {e.city}</p>
                  {noteFor(e) && <p className="text-sm text-ink/55 mt-2 italic">{noteFor(e)}</p>}
                </div>
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
                <p className="text-xs text-ink/50 uppercase tracking-widest font-medium">{range(e, lang)}</p>
                <h3 className="font-serif text-2xl mt-1">{e.title}</h3>
                <p className="text-ink/70 mt-1">{e.place} · {e.city}</p>
                {noteFor(e) && <p className="text-sm text-ink/55 mt-2 italic">{noteFor(e)}</p>}
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
    </div>
  );
}
