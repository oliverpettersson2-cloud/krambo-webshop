"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "./LanguageProvider";

const STORAGE_KEY = "webshop_cookie_consent_v1";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { lang } = useLang();
  const isEn = lang === "en";

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {}
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
      window.dispatchEvent(new Event("cookie-consent-changed"));
    } catch {}
    setVisible(false);
  }

  function decline() {
    try {
      localStorage.setItem(STORAGE_KEY, "essential-only");
      window.dispatchEvent(new Event("cookie-consent-changed"));
    } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={isEn ? "Cookie consent" : "Cookie-samtycke"}
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50 bg-ink text-paper rounded-2xl shadow-2xl border border-paper/10"
    >
      <div className="p-5">
        <p className="text-sm font-medium">
          {isEn ? "We use cookies" : "Vi använder kakor"}
        </p>
        <p className="text-xs text-paper/70 mt-2 leading-relaxed">
          {isEn
            ? "Essential cookies (cart, language) are always active. Accept optional analytics cookies to help us improve the site — you can change your mind anytime. "
            : "Nödvändiga kakor (kundvagn, språkval) är alltid aktiva. Acceptera valfria analytiska kakor för att hjälpa oss förbättra sajten — du kan ändra dig när som helst. "}
          <Link href="/integritet" className="text-accent hover:underline">
            {isEn ? "Read more" : "Läs mer"}
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={accept}
            className="px-4 py-2 bg-accent text-white rounded-full text-xs font-medium hover:bg-accentSoft transition"
          >
            {isEn ? "Accept all" : "Acceptera alla"}
          </button>
          <button
            onClick={decline}
            className="px-4 py-2 border border-paper/30 text-paper rounded-full text-xs font-medium hover:bg-paper hover:text-ink transition"
          >
            {isEn ? "Essential only" : "Endast nödvändiga"}
          </button>
        </div>
      </div>
    </div>
  );
}
