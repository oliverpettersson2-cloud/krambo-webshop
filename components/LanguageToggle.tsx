"use client";

import { useLang } from "./LanguageProvider";

export default function LanguageToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center gap-0.5 text-xs font-medium bg-ink/5 rounded-md p-0.5">
      <button
        onClick={() => setLang("sv")}
        aria-pressed={lang === "sv"}
        className={`px-2 py-1 rounded transition ${
          lang === "sv" ? "bg-ink text-paper" : "text-ink/60 hover:text-ink"
        }`}
      >
        SV
      </button>
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`px-2 py-1 rounded transition ${
          lang === "en" ? "bg-ink text-paper" : "text-ink/60 hover:text-ink"
        }`}
      >
        EN
      </button>
    </div>
  );
}
