const fs = require("fs");
const path = require("path");
const docxModulePath = path.join("C:", "nodejs-x64", "node_modules", "docx");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  BorderStyle, TabStopType, TabStopPosition, LevelFormat,
} = require(docxModulePath);

const WINE = "8b1a2b";
const INK = "1a1a1a";
const MUTED = "666666";

function h1(text) {
  return new Paragraph({
    spacing: { before: 200, after: 200 },
    children: [new TextRun({ text, bold: true, size: 32, font: "Calibri", color: INK })],
  });
}
function h2(text) {
  return new Paragraph({
    spacing: { before: 260, after: 120 },
    border: { bottom: { color: WINE, size: 6, style: BorderStyle.SINGLE, space: 3 } },
    children: [new TextRun({ text, bold: true, size: 22, font: "Calibri", color: WINE })],
  });
}
function p(text, opts = {}) {
  return new Paragraph({
    spacing: { after: 100 },
    children: [new TextRun({ text, size: 20, font: "Calibri", ...opts })],
  });
}
function bullet(text) {
  return new Paragraph({
    spacing: { after: 60 },
    numbering: { reference: "bullets", level: 0 },
    children: [new TextRun({ text, size: 20, font: "Calibri" })],
  });
}
function signatureLine(role, name) {
  return new Paragraph({
    spacing: { before: 320, after: 60 },
    tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
    children: [
      new TextRun({ text: `___________________________`, size: 20, font: "Calibri" }),
      new TextRun({ text: "\t" }),
      new TextRun({ text: `___________________________`, size: 20, font: "Calibri" }),
    ],
  });
}
function signatureName(a, b) {
  return new Paragraph({
    spacing: { after: 300 },
    tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
    children: [
      new TextRun({ text: a, size: 18, font: "Calibri", color: MUTED }),
      new TextRun({ text: "\t" }),
      new TextRun({ text: b, size: 18, font: "Calibri", color: MUTED }),
    ],
  });
}

const numbering = {
  config: [{
    reference: "bullets",
    levels: [{
      level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 720, hanging: 360 } } },
    }],
  }],
};

// ============================================================
// DOKUMENT 1: AVSIKTSFÖRKLARING (LOI)
// ============================================================
const loi = new Document({
  creator: "PathfinderAI / Oliver Pettersson",
  title: "Avsiktsförklaring — Webshop åt Cecilia Kristoffersson",
  numbering,
  styles: { default: { document: { run: { font: "Calibri", size: 20 } } } },
  sections: [{
    properties: {
      page: { size: { width: 11906, height: 16838 }, margin: { top: 1200, right: 1200, bottom: 1200, left: 1200 } },
    },
    children: [
      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({ text: "AVSIKTSFÖRKLARING", bold: true, size: 32, font: "Calibri", color: INK })],
      }),
      new Paragraph({
        spacing: { after: 300 },
        border: { bottom: { color: INK, size: 12, style: BorderStyle.SINGLE, space: 4 } },
        children: [new TextRun({ text: "Webshop åt Cecilia Kristoffersson · Art by Cecilia K.", size: 20, italics: true, color: MUTED, font: "Calibri" })],
      }),

      h2("Parter"),
      p("Leverantör: Oliver Pettersson, PathfinderAI"),
      p("E-post: oliver@pathfinderai.se"),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: "", size: 12 })] }),
      p("Beställare: Cecilia Kristoffersson", { bold: true }),
      p("Verksamhet: Art by Cecilia K., constcollection.com"),

      h2("Syfte"),
      p("Denna avsiktsförklaring bekräftar parternas gemensamma avsikt att teckna ett fullständigt tjänsteavtal om leverans och drift av en webshop för constcollection.com. Fullständigt avtal signeras senast 25 juli 2026. Fakturering påbörjas 1 augusti 2026. Sajten ska vara publikt live senast 6 augusti 2026 — inför Cecilias Trädgårdsfest 7-8 augusti 2026."),

      h2("Preliminära villkor"),
      bullet("Månadsavgift: 549 kr inkl. moms (för år 1)."),
      bullet("Inget setup, ingen provision på försäljningar."),
      bullet("Avtalstid: 12 månader från 1 augusti 2026 (fakturering)."),
      bullet("Live-datum för sajten: senast 6 augusti 2026 — inför Trädgårdsfesten 7-8 augusti."),
      bullet("Uppsägning: senast 3 månader innan avtalsslut. Annars förlängs avtalet automatiskt 12 månader med +5 % prisjustering."),
      bullet("Volymtrappa: 0-30 verk ingår. 31-50 verk: +39 kr/mån. 50+ verk offereras separat."),
  bullet("Fakturering var 6:e månad i förskott (3 294 kr inkl. moms per faktura). Två fakturor per år."),
      bullet("Innehållsuppdateringar var 3:e månad ingår (nya verk, priser, texter)."),
      bullet("Proffs-mail på egna domänen (cecilia@constcollection.com m.fl.) ingår."),
      bullet("Betalmetoder: kort, Klarna och Swish via Stripe."),
      bullet("Domänen constcollection.com flyttas till Cecilias eget ägarskap via Cloudflare (ingår)."),

      h2("Vad som ska göras innan avtalstecknandet"),
      p("Följande ska vara klart senast 20 juli 2026, så vi hinner signera det fullständiga avtalet 25 juli 2026 och gå live senast 6 augusti 2026 inför Trädgårdsfesten:"),
      bullet("Skapar egen Google Drive-mapp med högupplösta verksfoton (≥ 2000×2500 px) och delar den med oliver@pathfinderai.se. Bilder kan uppdateras löpande."),
      bullet("Skickar slutgiltig prislista per format (poster, fine art print, canvas 30×40, canvas 50×70, plexiglas)."),
      bullet("Begär transfer-kod för domänen constcollection.com från Canva — vidarebefordras till Oliver eller sker tillsammans/via skärmdelning."),
      bullet("Skapar Stripe-konto i eget namn — vi går igenom uppsättningen tillsammans eller via skärmdelning."),
      bullet("Bekräftar tryckleverantör."),
      bullet("Granskar och godkänner demo-sajten (texter, layout, biografi)."),

      h2("Karaktär"),
      p("Denna avsiktsförklaring är en handshake mellan parterna och är i sig icke bindande i juridisk mening. Den bekräftar att båda parter förbinder sig att i god tro arbeta mot att teckna det fullständiga avtalet senast 25 juli 2026."),
      p("Kostnader för förberedande arbete (demo-anpassningar, domän-transfer-initiering) faktureras endast om det fullständiga avtalet inte tecknas."),

      h2("Ort och datum"),
      p("Helsingborg, __________________ 2026"),

      signatureLine(),
      signatureName("Cecilia Kristoffersson", "Oliver Pettersson · PathfinderAI"),
    ],
  }],
});

Packer.toBuffer(loi).then((buffer) => {
  const out = "C:/Users/olive/Desktop/Avsiktsforklaring-Cecilia-K.docx";
  fs.writeFileSync(out, buffer);
  console.log("Wrote LOI:", out);
});

// ============================================================
// DOKUMENT 2: FULLSTÄNDIGT AVTAL
// ============================================================
const avtal = new Document({
  creator: "PathfinderAI / Oliver Pettersson",
  title: "Tjänsteavtal — Webshop åt Cecilia Kristoffersson",
  numbering,
  styles: { default: { document: { run: { font: "Calibri", size: 20 } } } },
  sections: [{
    properties: {
      page: { size: { width: 11906, height: 16838 }, margin: { top: 1200, right: 1200, bottom: 1200, left: 1200 } },
    },
    children: [
      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({ text: "TJÄNSTEAVTAL — WEBSHOP", bold: true, size: 32, font: "Calibri", color: INK })],
      }),
      new Paragraph({
        spacing: { after: 300 },
        border: { bottom: { color: INK, size: 12, style: BorderStyle.SINGLE, space: 4 } },
        children: [new TextRun({ text: "Art by Cecilia K. · constcollection.com · Fakturering fr.o.m. 1 augusti 2026 · Live senast 6 augusti 2026", size: 20, italics: true, color: MUTED, font: "Calibri" })],
      }),

      h2("§1 Parter"),
      p("Leverantör: Oliver Pettersson, PathfinderAI, oliver@pathfinderai.se (\"Leverantören\")."),
      p("Beställare: Cecilia Kristoffersson, verksamheten Art by Cecilia K. (\"Beställaren\")."),

      h2("§2 Tjänsten"),
      p("Leverantören åtar sig att leverera och löpande driftsätta en webshop för Beställaren på domänen constcollection.com. I tjänsten ingår följande:"),
      bullet("Skräddarsydd webshop byggd i Next.js med galleri-känsla och 5 köpformat per verk (poster, fine art print, canvas 30×40, canvas 50×70, plexiglas)."),
      bullet("Betallösning via Stripe: kort, Klarna och Swish."),
      bullet("Hosting via Vercel, inklusive SSL-certifikat och CDN."),
      bullet("Domänhantering via Cloudflare Registrar — Beställaren behåller ägarskap."),
      bullet("Proffs-mail på domänen (cecilia@constcollection.com m.fl.) via Cloudflare Email Routing."),
      bullet("Innehållsuppdateringar var 3:e månad (nya verk, priser, texter)."),
      bullet("Säkerhetsuppdateringar, dagliga backups, samt buggfixar utan extra kostnad."),
      bullet("E-postsupport inom 24 timmar på svenska vardagar."),
      bullet("Månatlig statistikrapport över besökare och försäljningar."),

      h2("§3 Utanför tjänsten"),
      p("Följande faller utanför fast månadsavgift och offereras separat vid behov: större designändringar, tilläggssidor utöver shoppen, marknadsföring och SEO-arbete utöver standard. Fotografering av verk ansvarar Beställaren själv för (se §6), men kan vid önskemål offereras separat."),

      h2("§4 Pris och betalning"),
      p("Månadsavgift: 549 kr inklusive moms (för avtalets första 12 månader)."),
      p("Faktura utställs var sjätte (6:e) månad i förskott — 3 294 kr inkl. moms per faktura (motsvarande 549 kr/mån). Fakturan förfaller 20 dagar efter fakturadatum. Två fakturor per år: en i augusti och en i februari."),
      p("Vid avtalsförlängning enligt §5 justeras månadsavgiften upp med 5 %."),
      p("Volymtrappa: 0-30 aktiva verk ingår i standardavgiften. Vid 31-50 aktiva verk tillkommer 39 kr/mån. Vid mer än 50 aktiva verk offereras utökningen separat."),

      h2("§5 Avtalstid och uppsägning"),
      p("Avtalet börjar gälla den 1 augusti 2026 (då fakturering påbörjas) och löper i 12 månader."),
      p("Sajten ska vara publikt tillgänglig på constcollection.com senast 6 augusti 2026 — inför Cecilias Trädgårdsfest 7-8 augusti 2026."),
      p("Uppsägning ska ske senast 3 månader innan avtalstidens utgång. Sker ingen uppsägning förlängs avtalet automatiskt med 12 nya månader, till den nya prisnivån enligt §4."),
      p("Uppsägning sker skriftligen till oliver@pathfinderai.se."),

      h2("§6 Beställarens ansvar"),
      bullet("Skapar och underhåller egen Google Drive-mapp med högupplösta verksfoton, delad med Leverantören. Slutgiltig prislista lämnas före driftsättning."),
      bullet("Skapar och underhåller eget Stripe-konto för utbetalningar."),
      bullet("Ansvarar för avtal med tryckleverantör för fysiska verk."),
  bullet("Ansvarar själv för samtliga verksfoton, porträttbilder och övrigt bildmaterial. Leverantören utför inte fotografering."),
      bullet("Ansvarar för korrekta produkt-, moms- och företagsuppgifter."),
      bullet("Följer köp- och konsumentlagstiftning för e-handel."),

      h2("§7 Leverantörens ansvar"),
      bullet("Levererar tjänsten enligt §2 med rimlig omsorg och professionalitet."),
      bullet("Ansvarar för teknisk drift, säkerhet och tillgänglighet enligt best effort."),
      bullet("Skyddar Beställarens innehåll och kunddata enligt GDPR. Vid behov tecknas separat personuppgiftsbiträdesavtal enligt GDPR art. 28."),

      h2("§8 Immateriella rättigheter"),
      p("Beställaren äger allt konstnärligt och redaktionellt innehåll på sajten (verksbilder, texter, biografi)."),
      p("Leverantören äger koden och tekniken. Beställaren erhåller en icke-exklusiv nyttjanderätt så länge avtalet gäller."),
      p("Vid avtalets upphörande överlåts allt innehåll och domänen constcollection.com fullständigt till Beställaren."),

      h2("§9 Ansvarsbegränsning"),
      p("Leverantörens skadeståndsansvar är i alla situationer begränsat till motsvarande tre (3) månaders månadsavgift. Följdskador, indirekta skador eller utebliven vinst ersätts inte."),

      h2("§10 Sekretess"),
      p("Vardera part åtar sig att inte röja konfidentiell information som mottagits från den andra parten."),

      h2("§11 Force majeure"),
      p("Ingen part är ansvarig för fördröjning eller utebliven prestation som beror på omständigheter utanför partens kontroll, såsom driftsstopp hos tredjepartsleverantör (t.ex. Vercel, Stripe, Cloudflare)."),

      h2("§12 Tvister"),
      p("På detta avtal tillämpas svensk rätt. Tvist prövas i första hand av Helsingborgs tingsrätt."),

      h2("Ort och datum"),
      p("Helsingborg, __________________ 2026"),

      signatureLine(),
      signatureName("Cecilia Kristoffersson", "Oliver Pettersson · PathfinderAI"),
    ],
  }],
});

Packer.toBuffer(avtal).then((buffer) => {
  const out = "C:/Users/olive/Desktop/Tjansteavtal-Cecilia-K.docx";
  fs.writeFileSync(out, buffer);
  console.log("Wrote Avtal:", out);
});
