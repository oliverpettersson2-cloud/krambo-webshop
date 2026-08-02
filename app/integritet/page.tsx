"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";

export default function IntegritetPage() {
  const { lang } = useLang();
  const isEn = lang === "en";

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/" className="text-sm text-ink/60 hover:text-accent">
        {isEn ? "← Back" : "← Tillbaka"}
      </Link>

      <h1 className="font-serif text-4xl md:text-5xl mt-6">
        {isEn ? "Privacy Policy" : "Integritetspolicy"}
      </h1>
      <p className="text-ink/60 mt-2 text-sm">
        {isEn ? "Last updated" : "Senast uppdaterad"}: 2026-08-01
      </p>

      <div className="mt-10 space-y-8 text-ink/80 leading-relaxed">

        <section>
          <h2 className="font-serif text-2xl text-ink">
            {isEn ? "1. Data controller" : "1. Personuppgiftsansvarig"}
          </h2>
          <p className="mt-3">
            {isEn ? "Data controller is Cecilia Kristoffersson (\"Constcollection by Cecilia K.\"), Växjögatan 5F, 252 51 Helsingborg, Sweden. Contact: "
                  : "Personuppgiftsansvarig är Cecilia Kristoffersson (\"Constcollection by Cecilia K.\"), Växjögatan 5F, 252 51 Helsingborg. Kontakt: "}
            <a href="mailto:cecilia.kristoffersson71@gmail.com" className="text-accent underline">
              cecilia.kristoffersson71@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">
            {isEn ? "2. What data we collect" : "2. Vilka uppgifter vi samlar in"}
          </h2>
          <ul className="mt-3 space-y-2 list-disc pl-5">
            <li>{isEn ? "Name, email, delivery address, phone number (when you place an order)" : "Namn, mail, leveransadress, telefonnummer (vid beställning)"}</li>
            <li>{isEn ? "Payment details — processed by Stripe, we never see your card number" : "Betalningsuppgifter — hanteras av Stripe, vi ser aldrig ditt kortnummer"}</li>
            <li>{isEn ? "Order history" : "Orderhistorik"}</li>
            <li>{isEn ? "Technical data (IP, browser, device — for security and analytics)" : "Tekniska data (IP, webbläsare, enhet — för säkerhet och statistik)"}</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">
            {isEn ? "3. Why we collect it" : "3. Varför vi samlar in dem"}
          </h2>
          <ul className="mt-3 space-y-2 list-disc pl-5">
            <li>{isEn ? "To process and deliver your order (legal basis: contract)" : "För att hantera och leverera din beställning (rättslig grund: avtal)"}</li>
            <li>{isEn ? "For accounting and tax obligations (legal basis: legal obligation)" : "För bokföring och skattekrav (rättslig grund: rättslig förpliktelse)"}</li>
            <li>{isEn ? "To respond to your questions (legal basis: legitimate interest)" : "För att besvara dina frågor (rättslig grund: berättigat intresse)"}</li>
            <li>{isEn ? "To improve the shop with anonymous analytics (legal basis: consent)" : "För att förbättra sajten via anonym statistik (rättslig grund: samtycke)"}</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">
            {isEn ? "4. Who we share data with" : "4. Vem vi delar med"}
          </h2>
          <p className="mt-3">
            {isEn ? "We share only the minimum data needed with:" : "Vi delar endast nödvändig data med:"}
          </p>
          <ul className="mt-3 space-y-2 list-disc pl-5">
            <li>{isEn ? "Stripe (payment processor) — name, email, payment info" : "Stripe (betalningsleverantör) — namn, mail, betalningsinfo"}</li>
            <li>{isEn ? "The print supplier (for physical prints) — name, delivery address" : "Tryckleverantör (för fysiska tryck) — namn, leveransadress"}</li>
            <li>{isEn ? "The shipping carrier (PostNord etc.) — name, delivery address, phone" : "Fraktbolaget (PostNord m.fl.) — namn, leveransadress, telefon"}</li>
            <li>{isEn ? "Cloudflare (hosting/security)" : "Cloudflare (hosting/säkerhet)"}</li>
            <li>{isEn ? "Vercel (hosting)" : "Vercel (hosting)"}</li>
          </ul>
          <p className="mt-3">
            {isEn ? "All processors have signed GDPR-compliant Data Processing Agreements."
                  : "Alla underbiträden har GDPR-kompatibla personuppgiftsbiträdesavtal."}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">
            {isEn ? "5. How long we keep data" : "5. Hur länge vi sparar uppgifter"}
          </h2>
          <ul className="mt-3 space-y-2 list-disc pl-5">
            <li>{isEn ? "Order data: 7 years (Swedish Bookkeeping Act)" : "Orderdata: 7 år (bokföringslagen)"}</li>
            <li>{isEn ? "Customer service emails: 24 months" : "Kundtjänst-mail: 24 månader"}</li>
            <li>{isEn ? "Marketing consent: until you withdraw it" : "Marknadsföringssamtycke: tills du drar tillbaka det"}</li>
            <li>{isEn ? "Analytics: anonymous, 12 months" : "Statistik: anonymiserad, 12 månader"}</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">
            {isEn ? "6. Cookies" : "6. Kakor (cookies)"}
          </h2>
          <p className="mt-3">
            {isEn ? "We use only essential cookies (cart, language preference). No third-party tracking without your consent. See the cookie banner at first visit."
                  : "Vi använder bara nödvändiga kakor (kundvagn, språkval). Ingen tredjepartsspårning utan ditt samtycke. Se kakbannern vid första besöket."}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">
            {isEn ? "7. Your rights" : "7. Dina rättigheter"}
          </h2>
          <p className="mt-3">
            {isEn ? "Under GDPR you have the right to:" : "Enligt GDPR har du rätt att:"}
          </p>
          <ul className="mt-3 space-y-2 list-disc pl-5">
            <li>{isEn ? "Request access to your data" : "Begära utdrag av dina uppgifter"}</li>
            <li>{isEn ? "Correct inaccurate data" : "Rätta felaktiga uppgifter"}</li>
            <li>{isEn ? "Request deletion (except where required for bookkeeping)" : "Begära radering (förutom det som krävs för bokföring)"}</li>
            <li>{isEn ? "Object to processing" : "Invända mot behandling"}</li>
            <li>{isEn ? "Request data portability" : "Begära dataportabilitet"}</li>
            <li>{isEn ? "Withdraw consent at any time" : "Återkalla samtycke när som helst"}</li>
          </ul>
          <p className="mt-3">
            {isEn ? "To use any of these rights, contact " : "För att utnyttja dessa rättigheter, kontakta "}
            <a href="mailto:cecilia.kristoffersson71@gmail.com" className="text-accent underline">
              cecilia.kristoffersson71@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">
            {isEn ? "8. Complaints" : "8. Klagomål"}
          </h2>
          <p className="mt-3">
            {isEn ? "If you feel we mishandle your data, you may file a complaint with the Swedish Authority for Privacy Protection (IMY): "
                  : "Om du anser att vi hanterar dina uppgifter felaktigt kan du lämna klagomål till Integritetsskyddsmyndigheten (IMY): "}
            <a href="https://www.imy.se" target="_blank" rel="noopener" className="text-accent underline">
              imy.se
            </a>
            .
          </p>
        </section>

      </div>
    </div>
  );
}
