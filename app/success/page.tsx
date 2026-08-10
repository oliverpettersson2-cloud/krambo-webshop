"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";
import { useLang } from "@/components/LanguageProvider";

export default function SuccessPage() {
  const { clear, hydrated } = useCart();
  const { lang } = useLang();
  const isEn = lang === "en";

  // Töm korgen exakt en gång — inte vid varje render
  const cleared = useRef(false);
  useEffect(() => {
    // Vänta tills korgen laddats — annars skriver hydreringen tillbaka varorna
    if (!hydrated || cleared.current) return;
    // Rensa bara efter en riktig betalning — Stripe skickar tillbaka session_id.
    // Utan kontroll tömdes korgen för vem som helst som råkade öppna /success.
    const hasSession = new URLSearchParams(window.location.search).has("session_id");
    if (!hasSession) return;
    cleared.current = true;
    clear();
  }, [clear, hydrated]);

  return (
    <div className="max-w-2xl mx-auto px-6 py-24">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-white text-3xl">
          ✓
        </div>
        <h1 className="font-serif text-4xl md:text-5xl mt-6">
          {isEn ? "Thank you for your order!" : "Tack för din beställning!"}
        </h1>
        <p className="text-ink/70 mt-4 leading-relaxed max-w-lg mx-auto">
          {isEn
            ? "We've sent a confirmation to your email. You'll receive a shipping notification when your artwork is on the way."
            : "En orderbekräftelse har skickats till din e-post. Du får en fraktnotis när verket är på väg."}
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-4">
        <div className="bg-white border border-ink/10 rounded-xl p-5 text-center">
          <p className="text-2xl">📧</p>
          <p className="font-serif text-lg mt-3">
            {isEn ? "Order confirmation" : "Orderbekräftelse"}
          </p>
          <p className="text-sm text-ink/60 mt-2">
            {isEn ? "Check your inbox within 5 minutes." : "I inkorgen inom 5 minuter."}
          </p>
        </div>
        <div className="bg-white border border-ink/10 rounded-xl p-5 text-center">
          <p className="text-2xl">🎨</p>
          <p className="font-serif text-lg mt-3">
            {isEn ? "In production" : "I produktion"}
          </p>
          <p className="text-sm text-ink/60 mt-2">
            {isEn ? "Prints made-to-order, 3-5 days." : "Tryck görs på beställning, 3-5 dagar."}
          </p>
        </div>
        <div className="bg-white border border-ink/10 rounded-xl p-5 text-center">
          <p className="text-2xl">📦</p>
          <p className="font-serif text-lg mt-3">
            {isEn ? "Delivery" : "Leverans"}
          </p>
          <p className="text-sm text-ink/60 mt-2">
            {isEn ? "5-10 days total. Insured shipping." : "5-10 dagar totalt. Försäkrad frakt."}
          </p>
        </div>
      </div>

      <div className="mt-12 bg-warm rounded-xl p-6 text-center">
        <p className="font-serif text-lg">
          {isEn ? "Questions about your order?" : "Frågor om din beställning?"}
        </p>
        <p className="mt-2 text-sm text-ink/70">
          {isEn
            ? "Reply to your confirmation email or write to "
            : "Svara på bekräftelsemailet eller skriv till "}
          <a href="mailto:cecilia.kristoffersson71@gmail.com" className="text-accent hover:underline">
            cecilia.kristoffersson71@gmail.com
          </a>
        </p>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-ink text-paper rounded-full font-medium hover:bg-accent transition"
        >
          {isEn ? "Continue browsing" : "Fortsätt bläddra"}
        </Link>
      </div>
    </div>
  );
}
