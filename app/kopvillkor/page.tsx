"use client";

import Link from "next/link";
import { useLang } from "@/components/LanguageProvider";

export default function KopvillkorPage() {
  const { lang } = useLang();
  const isEn = lang === "en";

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link href="/" className="text-sm text-ink/60 hover:text-accent">
        {isEn ? "← Back" : "← Tillbaka"}
      </Link>

      <h1 className="font-serif text-4xl md:text-5xl mt-6">
        {isEn ? "Terms & Conditions" : "Köpvillkor"}
      </h1>
      <p className="text-ink/60 mt-2 text-sm">
        {isEn ? "Last updated" : "Senast uppdaterad"}: 2026-08-01
      </p>

      <div className="mt-10 space-y-8 text-ink/80 leading-relaxed">

        <section>
          <h2 className="font-serif text-2xl text-ink">
            {isEn ? "1. About this shop" : "1. Om butiken"}
          </h2>
          <p className="mt-3">
            {isEn
              ? "constcollection.com is operated by Cecilia Kristoffersson (\"Art by Cecilia K.\"), Växjögatan 5F, 252 51 Helsingborg, Sweden. All artworks and prints are sold directly by the artist. For questions, contact "
              : "constcollection.com drivs av Cecilia Kristoffersson (\"Art by Cecilia K.\"), Växjögatan 5F, 252 51 Helsingborg. Alla verk och tryck säljs direkt av konstnären. Frågor besvaras på "}
            <a href="mailto:cecilia@constcollection.com" className="text-accent underline">
              cecilia@constcollection.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">
            {isEn ? "2. Prices & VAT" : "2. Priser och moms"}
          </h2>
          <p className="mt-3">
            {isEn
              ? "All prices are shown in Swedish kronor (SEK) and include 25% VAT. Prices may be adjusted without notice. Should a manifest error occur (e.g. a price of 1 SEK instead of 1,000 SEK) we reserve the right to cancel the order."
              : "Priser anges i svenska kronor (SEK) och inkluderar 25 % moms. Priser kan ändras utan förvarning. Vid uppenbart felaktig prisangivelse (t.ex. 1 kr istället för 1 000 kr) förbehåller vi oss rätten att annullera ordern."}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">
            {isEn ? "3. Payment" : "3. Betalning"}
          </h2>
          <p className="mt-3">
            {isEn
              ? "Payments are processed via Stripe. Accepted methods: card (Visa, Mastercard), Klarna (invoice or instalments), Swish, Apple Pay and Google Pay. No card details are stored by us — Stripe handles all payment data under PCI DSS Level 1 compliance."
              : "Betalningar hanteras av Stripe. Godkända metoder: kort (Visa, Mastercard), Klarna (faktura eller delbetalning), Swish, Apple Pay och Google Pay. Vi lagrar inga kortuppgifter — Stripe hanterar alla betalningsdata under PCI DSS Level 1."}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">
            {isEn ? "4. Delivery" : "4. Leverans"}
          </h2>
          <p className="mt-3">
            {isEn
              ? "Delivery within Sweden takes 5–10 working days. Orders to other Nordic countries: 7–14 days. All shipments are insured. Cost is calculated at checkout. If a package is damaged in transit, contact us within 7 days of receipt."
              : "Leverans inom Sverige tar 5–10 arbetsdagar. Övriga Norden: 7–14 dagar. Alla försändelser är försäkrade. Fraktkostnad räknas ut i kassan. Vid transportskada, hör av dig inom 7 dagar från mottagandet."}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">
            {isEn ? "5. Right of withdrawal (14 days)" : "5. Ångerrätt (14 dagar)"}
          </h2>
          <p className="mt-3">
            {isEn
              ? "As a consumer you have the right to withdraw your purchase within 14 days of receiving the goods, in accordance with the Swedish Distance Contracts Act (Distansavtalslagen). To use your right, contact "
              : "Du har som konsument rätt att ångra ditt köp inom 14 dagar från det att du mottagit varan, enligt distansavtalslagen (2005:59). För att utöva ångerrätten kontakta "}
            <a href="mailto:cecilia@constcollection.com" className="text-accent underline">
              cecilia@constcollection.com
            </a>
            {isEn
              ? " within the 14-day window. The item must be returned in its original condition. Return shipping is paid by the customer. Refunds are made within 14 days of us receiving the item."
              : " inom 14 dagar. Varan ska returneras i oanvänt skick. Kunden står för returfrakten. Återbetalning sker inom 14 dagar från att vi mottagit varan."}
          </p>
          <p className="mt-3 text-sm text-ink/60">
            {isEn
              ? "Note: Customised items (prints made-to-order in your chosen format) may fall outside the standard right of withdrawal per the Distance Contracts Act §11. Contact us before ordering if you're unsure."
              : "Obs: Specialtillverkade varor (tryck som produceras på beställning i valt format) kan omfattas av undantag från ångerrätten enligt distansavtalslagen 2 kap. §11. Hör av dig innan beställning om du är osäker."}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">
            {isEn ? "6. Complaints & warranty" : "6. Reklamation och fel"}
          </h2>
          <p className="mt-3">
            {isEn
              ? "Under the Swedish Consumer Sales Act (Konsumentköplagen) you have up to 3 years to claim defects that existed at the time of delivery. Report defects as soon as possible — no later than 2 months after discovery — to "
              : "Enligt konsumentköplagen har du rätt att reklamera fel som fanns vid leverans i upp till 3 år. Reklamation ska ske så snart som möjligt — senast inom 2 månader från upptäckt — till "}
            <a href="mailto:cecilia@constcollection.com" className="text-accent underline">
              cecilia@constcollection.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">
            {isEn ? "7. Personal data" : "7. Personuppgifter"}
          </h2>
          <p className="mt-3">
            {isEn ? "See our " : "Se vår "}
            <Link href="/integritet" className="text-accent underline">
              {isEn ? "Privacy Policy" : "integritetspolicy"}
            </Link>
            {isEn
              ? " for how we handle your data under GDPR."
              : " för hur vi hanterar dina uppgifter enligt GDPR."}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">
            {isEn ? "8. Disputes" : "8. Tvist"}
          </h2>
          <p className="mt-3">
            {isEn
              ? "Should a dispute arise that we cannot resolve directly, you may turn to the Swedish National Board for Consumer Disputes (Allmänna Reklamationsnämnden, ARN, "
              : "Uppstår tvist som vi inte kan lösa tillsammans kan du vända dig till Allmänna Reklamationsnämnden (ARN, "}
            <a href="https://www.arn.se" target="_blank" rel="noopener" className="text-accent underline">
              arn.se
            </a>
            {isEn
              ? "). We follow ARN's recommendations. EU customers may also use the EU Online Dispute Resolution platform: "
              : "). Vi följer ARN:s rekommendationer. EU-kunder kan även använda EU:s onlinetvistelösningsplattform: "}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener" className="text-accent underline">
              ec.europa.eu/consumers/odr
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">
            {isEn ? "9. Governing law" : "9. Tillämplig lag"}
          </h2>
          <p className="mt-3">
            {isEn
              ? "Swedish law applies to these terms."
              : "Svensk rätt tillämpas på dessa villkor."}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">
            {isEn ? "10. Changes" : "10. Ändringar"}
          </h2>
          <p className="mt-3">
            {isEn
              ? "We reserve the right to update these terms. The version applying to your order is the one published at the time of purchase."
              : "Vi förbehåller oss rätten att uppdatera dessa villkor. Den version som gäller för din beställning är den som var publicerad vid köptillfället."}
          </p>
        </section>

      </div>
    </div>
  );
}
