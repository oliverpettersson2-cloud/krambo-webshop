// Tjänsteavtal — 2026-08-03. Ersätter avsiktsförklaringen (v2.1) och avtalsutkastet i generate-avtal.js.
// Bindande avtal med alla överenskomna villkor: 649 inkl moms, fakturering fr 1 aug 2026,
// 30 verk ingår (+50 kr/10 verk), uppstartsperiod tom 31 dec 2026, +5% fr 1 jan 2028.
const fs = require("fs");
const path = require("path");
const docxModulePath = path.join("C:", "nodejs-x64", "node_modules", "docx");
const {
  Document, Packer, Paragraph, TextRun, AlignmentType,
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

const avtal = new Document({
  creator: "PathfinderAI / Oliver Pettersson",
  title: "Tjänsteavtal — Webshop, Constcollection by Cecilia K.",
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
        children: [new TextRun({ text: "Constcollection by Cecilia K. · constcollection.com · Augusti 2026 (ersätter tidigare avsiktsförklaringar)", size: 20, italics: true, color: MUTED, font: "Calibri" })],
      }),

      h2("§1 Parter"),
      p("Leverantör: Oliver Pettersson, enskild firma PathfinderAI (\"Leverantören\")"),
      p("Org.nr: 920612-1197  ·  E-post: oliver@pathfinderai.se  ·  Telefon: 0766-07 17 57"),
      new Paragraph({ spacing: { after: 200 }, children: [new TextRun({ text: "", size: 12 })] }),
      p("Beställare: Cecilia Kristoffersson, enskild näringsidkare, verksamheten Constcollection by Cecilia K. (\"Beställaren\")"),
      p("Adress: Växjögatan 5F, 252 51 Helsingborg"),
      p("Org.nr: ______________________  ·  E-post: ______________________  ·  Telefon: ______________________"),

      h2("§2 Tjänsten"),
      p("Leverantören levererar och driftar en webshop för Beställaren på domänen constcollection.com. Sajten är publikt live sedan den 1 augusti 2026. I tjänsten ingår:"),
      bullet("Skräddarsydd webshop med 5 köpformat per verk (poster 40×50, poster 50×70, fine art print 40×50, fine art print 50×70, plexiglas 15×20)."),
      bullet("Produktfilmer: visningsvideo av plexiglasverken på respektive produktsida, tekniskt optimerade för webben."),
      bullet("Verkstexter på svenska och engelska under respektive verk."),
      bullet("E-postadresser på egna domänen (cecilia@constcollection.com m.fl.): uppsättning och löpande drift."),
      bullet("Hosting, SSL-certifikat och CDN via Vercel."),
      bullet("Domänhantering via Cloudflare och Namecheap — Beställaren har och behåller fullt ägarskap av domänen, och erhåller egna inloggningsuppgifter till båda tjänsterna."),
      bullet("Betallösning via Stripe i Beställarens namn: kort och Klarna (Swish aktiveras så snart det stöds i Stripe-kontot). Försäljningsintäkter går direkt till Beställaren."),
      bullet("Säkerhetsuppdateringar, backups och buggfixar utan extra kostnad."),
      bullet("Felsökning vid driftproblem: påbörjas och återkopplas till Beställaren inom 24 timmar från felanmälan."),

      h2("§3 Innehållsuppdateringar"),
      p("Uppstartsperiod — till och med den 31 december 2026: parterna arbetar löpande tillsammans med uppdateringar, tillägg och finjusteringar av webshopen (nya verk, texter, bilder, filmer och tider för detta) utan extra kostnad och utan fasta intervall."),
      p("Från och med den 1 januari 2027: innehållsuppdateringar sker ordinarie var tredje (3:e) månad — nya verk, priser, texter och filmer samlas då upp och publiceras."),

      h2("§4 Pris och betalning"),
      bullet("Månadsavgift: 649 kr inklusive moms (motsvarande 519,20 kr exkl. moms)."),
      bullet("Fakturering sker från och med den 1 augusti 2026 — dagen då webshopen gick live på constcollection.com. Ingen kostnad har utgått dessförinnan."),
      bullet("Faktura utställs var 6:e månad i förskott: 3 894 kr inkl. moms per faktura. Betalningsvillkor 30 dagar."),
      bullet("Inget setup-arvode. Ingen provision på försäljningar."),
      bullet("Årlig prisjustering: +5 %, första gången den 1 januari 2028 och därefter årligen den 1 januari. Priset 649 kr/mån ligger alltså fast hela 2026 och 2027."),

      h2("§5 Volym"),
      p("Upp till 30 verk i webshopen ingår i månadsavgiften. För verk därutöver tillkommer 50 kr/mån per påbörjat 10-tal verk (avser utökad datalagring och drift). Exempel: 31–40 verk = +50 kr/mån, 41–50 verk = +100 kr/mån."),

      h2("§6 Utanför tjänsten"),
      p("Större designändringar, tilläggssidor utöver shoppen, marknadsförings- och SEO-arbete samt fotografering/filmning av verk offereras separat. Beställaren ansvarar själv för verksfoton och bildmaterial."),
      p("Domänförnyelsen för constcollection.com (ca 110–250 kr/år beroende på registrar) betalas av Beställaren direkt till registraren — domänen är och förblir Beställarens egendom."),

      h2("§7 Avtalstid och uppsägning"),
      p("Avtalet gäller från den 1 augusti 2026 och löper i 12 månader."),
      p("Uppsägning ska ske skriftligen (till oliver@pathfinderai.se respektive Beställarens e-postadress) senast 3 månader före avtalstidens utgång. Sker ingen uppsägning förlängs avtalet automatiskt med 12 nya månader i taget."),

      h2("§8 Beställarens ansvar"),
      bullet("Tillhandahåller och underhåller verksfoton, prislista och övrigt innehållsmaterial (t.ex. via delad Drive-mapp)."),
      bullet("Innehar eget Stripe-konto för utbetalningar samt ansvarar för avtal med tryckleverantör."),
      bullet("Ansvarar för korrekta produkt-, moms- och företagsuppgifter samt att försäljningen följer konsument- och e-handelslagstiftning."),

      h2("§9 Leverantörens ansvar"),
      bullet("Levererar tjänsten enligt §2 med rimlig omsorg och professionalitet; teknisk drift enligt best effort."),
      bullet("Skyddar Beställarens innehåll och kunddata enligt GDPR. Vid behov tecknas separat personuppgiftsbiträdesavtal (GDPR art. 28)."),

      h2("§10 Immateriella rättigheter"),
      p("Beställaren äger allt konstnärligt och redaktionellt innehåll på sajten (verksbilder, filmer, texter, biografi) samt domänen constcollection.com."),
      p("Leverantören äger koden och tekniken. Beställaren erhåller en icke-exklusiv nyttjanderätt så länge avtalet gäller."),
      p("Vid avtalets upphörande överlåts allt innehåll enligt första stycket samt domänen fullständigt till Beställaren; Leverantören bistår vid överlämning av dessa. Koden, tekniken och webshoppslösningen omfattas inte av överlåtelsen — de förblir Leverantörens egendom och Beställarens nyttjanderätt till dem upphör när avtalet upphör."),

      h2("§11 Ansvarsbegränsning"),
      p("Leverantörens skadeståndsansvar är i alla situationer begränsat till motsvarande tre (3) månaders månadsavgift. Följdskador, indirekta skador eller utebliven vinst ersätts inte."),

      h2("§12 Sekretess"),
      p("Vardera part åtar sig att inte röja konfidentiell information som mottagits från den andra parten."),

      h2("§13 Force majeure"),
      p("Ingen part ansvarar för fördröjning eller utebliven prestation som beror på omständigheter utanför partens kontroll, såsom driftsstopp hos tredjepartsleverantör (t.ex. Vercel, Stripe, Cloudflare, Namecheap, Zoho)."),

      h2("§14 Tvister"),
      p("På detta avtal tillämpas svensk rätt. Tvist prövas i första hand av Helsingborgs tingsrätt."),

      h2("Ort och datum"),
      p("Helsingborg, __________________ 2026"),

      signatureLine(),
      signatureName("Cecilia Kristoffersson", "Oliver Pettersson · PathfinderAI"),
    ],
  }],
});

Packer.toBuffer(avtal).then((buffer) => {
  const out = "C:/Users/olive/Desktop/06-Sidoprojekt/webshop/Tjansteavtal-Cecilia-K.docx";
  fs.writeFileSync(out, buffer);
  console.log("Wrote Tjansteavtal:", out);
});
