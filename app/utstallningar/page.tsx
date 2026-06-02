import Link from "next/link";

export const metadata = {
  title: "Utställningar — Art by Cecilia K.",
  description: "Pågående, kommande och tidigare utställningar av Cecilia Kristoffersson.",
};

type Exhibition = {
  start: string;     // YYYY-MM
  end?: string;
  title: string;
  place: string;
  city: string;
  note?: string;
  status: "upcoming" | "current" | "past";
};

// Datum just nu (för manuell statusklass). När Cecilia signar — flytta till en JSON som hon redigerar.
const TODAY = "2026-05";

const exhibitionsRaw: Omit<Exhibition, "status">[] = [
  // Lägg till nya kommande/pågående här när Cecilia bokar
  { start: "2025-11", end: "2026-04", title: "BYWRTRS Gallery", place: "Odengatan 15", city: "Stockholm", note: "Soloutställning" },
  { start: "2026-02", end: "2026-03", title: "I samarbete med HBGCITY", place: "Södergatan 11 & Södergallerian", city: "Helsingborg" },
  { start: "2025-11", title: "\"Here Together\" — gruppvisning", place: "Dunkers Kulturhus", city: "Helsingborg", note: "I samarbete med Kulturrumet" },
  { start: "2025-08", title: "\"Edenfield Returns\" Evening Garden Exhibition", place: "Norrtäljegatan", city: "Helsingborg" },
  { start: "2024-12", end: "2025-03", title: "\"Edenfield Sees You\"", place: "Clarion Sea U Hotel", city: "Helsingborg" },
  { start: "2024-08", title: "\"Edenfield\" Evening Garden Exhibition", place: "Norrtäljegatan", city: "Helsingborg", note: "Cecilia föredrar utomhus-exhibitioner — där målningarna lyser i mörkret" },
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

function fmt(ym: string): string {
  const [y, m] = ym.split("-");
  const months = ["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"];
  return `${months[parseInt(m,10)-1]} ${y}`;
}

function range(e: Exhibition): string {
  if (!e.end || e.end === e.start) return fmt(e.start);
  return `${fmt(e.start)} – ${fmt(e.end)}`;
}

export default function UtstallningarPage() {
  const upcoming = exhibitions.filter((e) => e.status === "upcoming" || e.status === "current");
  const past = exhibitions.filter((e) => e.status === "past");

  return (
    <div>
      {/* HERO */}
      <section className="bg-ink text-paper py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-accent uppercase tracking-[0.25em] text-xs font-semibold">Cecilia i världen</p>
          <h1 className="font-serif text-5xl md:text-6xl mt-3 leading-[1.05]">
            Utställningar
          </h1>
          <p className="mt-5 text-paper/80 max-w-2xl leading-relaxed text-lg">
            Från trädgården i Helsingborg till galleri-rummen i Stockholm.
            Här är vad som kommer — och vart vägen har gått.
          </p>
        </div>
      </section>

      {/* KOMMANDE / PÅGÅENDE */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="border-b border-ink/15 pb-4 mb-8 flex items-baseline justify-between">
          <h2 className="font-serif text-3xl">Kommande &amp; pågående</h2>
          <span className="text-sm text-ink/40">{upcoming.length} {upcoming.length === 1 ? "utställning" : "utställningar"}</span>
        </div>

        {upcoming.length === 0 ? (
          <div className="bg-warm rounded-xl p-8 text-center">
            <p className="font-serif text-2xl">Inga aktuella utställningar just nu</p>
            <p className="text-ink/60 mt-3 leading-relaxed">
              Cecilia förbereder för nästa visning. Vill du boka? Kontakta curator
              <a className="text-accent hover:underline ml-1" href="mailto:k.magnus.florin@gmail.com">Magnus Florin</a>.
            </p>
          </div>
        ) : (
          <ul className="space-y-6">
            {upcoming.map((e, i) => (
              <li key={i} className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-8 border border-accent/30 bg-accent/5 rounded-xl p-5">
                <div className="md:w-56 shrink-0">
                  <p className="text-xs text-ink/60 uppercase tracking-widest font-semibold">{range(e)}</p>
                  <span className="inline-block mt-2 text-xs bg-accent text-white px-2 py-0.5 rounded-full">
                    {e.status === "current" ? "Pågående" : "Kommande"}
                  </span>
                </div>
                <div>
                  <p className="font-serif text-2xl">{e.title}</p>
                  <p className="text-ink/70 mt-1">{e.place} · {e.city}</p>
                  {e.note && <p className="text-sm text-ink/55 mt-2 italic">{e.note}</p>}
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
            <h2 className="font-serif text-3xl">Tidigare utställningar</h2>
            <span className="text-sm text-ink/40">{past.length} totalt</span>
          </div>
          <ol className="relative border-l-2 border-accent/30 pl-8 ml-3 space-y-9">
            {past.map((e, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[42px] top-1 w-4 h-4 rounded-full bg-accent ring-4 ring-warm"></span>
                <p className="text-xs text-ink/50 uppercase tracking-widest font-medium">{range(e)}</p>
                <h3 className="font-serif text-2xl mt-1">{e.title}</h3>
                <p className="text-ink/70 mt-1">{e.place} · {e.city}</p>
                {e.note && <p className="text-sm text-ink/55 mt-2 italic">{e.note}</p>}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="font-serif text-2xl">Vill du boka en utställning?</p>
        <p className="text-ink/70 mt-3">Cecilia visar i galleri-rum, kulturhus och utomhus.</p>
        <p className="mt-5">
          <a className="text-accent hover:underline font-medium" href="mailto:k.magnus.florin@gmail.com">
            Magnus Florin (curator)
          </a>
          <span className="text-ink/40 mx-2">·</span>
          <a className="text-accent hover:underline" href="tel:+46708734215">+46 708 73 42 15</a>
        </p>
      </section>
    </div>
  );
}
