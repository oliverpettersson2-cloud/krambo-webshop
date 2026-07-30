// Avsiktsförklaring v2 — 2026-07-30. Ersätter LOI-delen i generate-avtal.js.
// Ändringar mot v1: 599 kr inkl moms (videos + mail ingår), volymtrappa 25/+15 verk à 50 kr,
// felsökning med 24h-återkoppling, fakturering fr.o.m. live på constcollection.com, Zoho-mail.
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
function signatureLine() {
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

const loi = new Document({
  creator: "PathfinderAI / Oliver Pettersson",
  title: "Avsiktsförklaring v2 — Webshop åt Cecilia Kristoffersson",
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
        children: [new TextRun({ text: "Webshop åt Cecilia Kristoffersson · Art by Cecilia K. · Version 2, 30 juli 2026 (ersätter tidigare version)", size: 20, italics: true, color: MUTED, font: "Calibri" })],
      }),

      h2("Parter"),
      p("Leverantör: Oliver Pettersson, PathfinderAI"),
      p("E-post: oliver@pathfinderai.se"),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: "", size: 12 })] }),
      p("Beställare: Cecilia Kristoffersson (enskild näringsidkare)", { bold: true }),
      p("Verksamhet: Art by Cecilia K., constcollection.com"),
      p("Adress: Växjögatan 5F, 252 51 Helsingborg"),

      h2("Syfte"),
      p("Denna avsiktsförklaring bekräftar parternas gemensamma avsikt att teckna ett fullständigt tjänsteavtal om leverans och drift av en webshop på domänen constcollection.com. Målsättning: sajten publikt live på constcollection.com senast 6 augusti 2026 — inför Trädgårdsfesten 7–8 augusti 2026."),

      h2("Pris och fakturering"),
      bullet("Månadsavgift: 599 kr inklusive moms (motsvarande 479,20 kr exkl. moms)."),
      bullet("Fakturering påbörjas först den dag webshopen är publikt live på constcollection.com — ingen kostnad dessförinnan."),
      bullet("Faktura utställs var 6:e månad i förskott: 3 594 kr inkl. moms per faktura."),
      bullet("Inget setup-arvode. Ingen provision på försäljningar."),
      bullet("Årlig prisjustering: +5 % vid varje ny 12-månadersperiod."),

      h2("Vad som ingår i månadsavgiften"),
      bullet("Skräddarsydd webshop med 5 köpformat per verk (poster 40×50, poster 50×70, fine art print 40×50, fine art print 50×70, plexiglas 15×20)."),
      bullet("Produktfilmer: visningsvideo av plexiglasverken på respektive produktsida, tekniskt optimerade för webben."),
      bullet("Verkstexter på svenska och engelska under respektive verk."),
      bullet("E-postadresser på egna domänen (cecilia@constcollection.com m.fl.): uppsättning och löpande drift ingår i priset."),
      bullet("Hosting, SSL-certifikat och CDN via Vercel."),
      bullet("Domänhantering via Cloudflare — Beställaren behåller fullt ägarskap av domänen."),
      bullet("Betallösning via Stripe i Beställarens namn: kort och Klarna (Swish aktiveras så snart det stöds i Stripe-kontot)."),
      bullet("Innehållsuppdateringar var 3:e månad (nya verk, priser, texter, filmer)."),
      bullet("Säkerhetsuppdateringar, backups och buggfixar utan extra kostnad."),
      bullet("Felsökning vid driftproblem: påbörjas och återkopplas till Beställaren inom 24 timmar från felanmälan."),

      h2("Volym"),
      bullet("Upp till 25 verk i webshopen ingår i månadsavgiften."),
      bullet("Ytterligare upp till 15 verk (26–40 verk): +50 kr/mån."),
      bullet("Fler än 40 verk: offereras separat."),

      h2("Utanför månadsavgiften"),
      p("Större designändringar, tilläggssidor utöver shoppen, marknadsförings- och SEO-arbete samt fotografering/filmning av verk offereras separat. Beställaren ansvarar själv för verksfoton och bildmaterial."),
      p("Domänförnyelsen för constcollection.com (ca 110–250 kr/år beroende på registrar) betalas av Beställaren direkt till registraren — domänen är och förblir Beställarens egendom."),

      h2("Avtalstid"),
      p("Fullständigt avtal löper 12 månader från faktureringsstart. Uppsägning senast 3 månader före avtalstidens utgång, annars förlängs avtalet automatiskt 12 månader med prisjustering enligt ovan. Vid avtalets upphörande överlåts domän och allt innehåll till Beställaren."),

      h2("Karaktär"),
      p("Denna avsiktsförklaring är en handskakning mellan parterna och är i sig icke bindande i juridisk mening. Den bekräftar att båda parter i god tro arbetar mot att teckna det fullständiga avtalet. Denna version ersätter tidigare utskickad avsiktsförklaring i sin helhet."),

      h2("Ort och datum"),
      p("Helsingborg, __________________ 2026"),

      signatureLine(),
      signatureName("Cecilia Kristoffersson", "Oliver Pettersson · PathfinderAI"),
    ],
  }],
});

Packer.toBuffer(loi).then((buffer) => {
  const out = "C:/Users/olive/Desktop/06-Sidoprojekt/webshop/Avsiktsforklaring-Cecilia-K-v2.docx";
  fs.writeFileSync(out, buffer);
  console.log("Wrote LOI v2:", out);
});
