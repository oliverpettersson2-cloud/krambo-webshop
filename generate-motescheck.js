const fs = require("fs");
const path = require("path");
const docxModulePath = path.join("C:", "nodejs-x64", "node_modules", "docx");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, AlignmentType,
  PageOrientation, LevelFormat, HeadingLevel, BorderStyle, WidthType, ShadingType,
  TabStopType, TabStopPosition, PageBreak,
} = require(docxModulePath);

const WINE = "8b1a2b";
const INK = "1a1a1a";
const PAPER = "FAF7F2";
const MUTED = "666666";

const cb = "☐"; // ☐

function p(text, opts = {}) {
  const runs = Array.isArray(text) ? text : [new TextRun({ text, ...opts.run })];
  return new Paragraph({
    spacing: { after: opts.afterSpacing ?? 80, before: opts.beforeSpacing ?? 0 },
    alignment: opts.alignment,
    indent: opts.indent,
    children: runs,
    ...opts.para,
  });
}

function checkbox(text) {
  return new Paragraph({
    spacing: { after: 60 },
    indent: { left: 200, hanging: 200 },
    children: [
      new TextRun({ text: cb + "  ", font: "Segoe UI Symbol" }),
      ...(typeof text === "string"
        ? [new TextRun({ text })]
        : text),
    ],
  });
}

function checkboxBold(boldPrefix, rest) {
  return new Paragraph({
    spacing: { after: 60 },
    indent: { left: 200, hanging: 200 },
    children: [
      new TextRun({ text: cb + "  ", font: "Segoe UI Symbol" }),
      new TextRun({ text: boldPrefix, bold: true }),
      new TextRun({ text: rest }),
    ],
  });
}

function bad(text) {
  return new Paragraph({
    spacing: { after: 60 },
    indent: { left: 200, hanging: 200 },
    children: [
      new TextRun({ text: "❌  ", font: "Segoe UI Symbol", color: "c41e3a" }),
      new TextRun({ text }),
    ],
  });
}

function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 280, after: 120 },
    border: { bottom: { color: WINE, size: 8, style: BorderStyle.SINGLE, space: 4 } },
    children: [new TextRun({ text, bold: true, color: WINE, size: 24, font: "Calibri" })],
  });
}

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { after: 60 },
    children: [
      new TextRun({ text: "Mötescheck.", bold: true, size: 40, color: INK, font: "Calibri" }),
      new TextRun({ text: " " + text, bold: true, size: 40, color: WINE, font: "Calibri" }),
    ],
  });
}

function tldrTable() {
  const border = { style: BorderStyle.NONE, size: 0, color: INK };
  const borders = { top: border, bottom: border, left: border, right: border };

  return new Table({
    width: { size: 9026, type: WidthType.DXA },
    columnWidths: [9026],
    rows: [
      new TableRow({
        children: [
          new TableCell({
            borders,
            width: { size: 9026, type: WidthType.DXA },
            shading: { fill: INK, type: ShadingType.CLEAR },
            margins: { top: 280, bottom: 280, left: 320, right: 320 },
            children: [
              new Paragraph({
                spacing: { after: 120 },
                children: [
                  new TextRun({
                    text: "TL;DR — de tre frågor du inte får missa",
                    bold: true, color: "FF8A96", size: 22, font: "Calibri",
                  }),
                ],
              }),
              new Paragraph({
                spacing: { after: 80 },
                indent: { left: 200, hanging: 200 },
                children: [
                  new TextRun({ text: "1.  ", color: "FF8A96", bold: true }),
                  new TextRun({ text: "Vad säljer hon idag och för vilka priser?", color: PAPER, bold: true }),
                ],
              }),
              new Paragraph({
                spacing: { after: 80 },
                indent: { left: 200, hanging: 200 },
                children: [
                  new TextRun({ text: "2.  ", color: "FF8A96", bold: true }),
                  new TextRun({ text: "Vilka utställningar är pågående/kommande just nu?", color: PAPER, bold: true }),
                ],
              }),
              new Paragraph({
                spacing: { after: 0 },
                indent: { left: 200, hanging: 200 },
                children: [
                  new TextRun({ text: "3.  ", color: "FF8A96", bold: true }),
                  new TextRun({ text: "Vad behöver hon för att säga ja — och vem fattar beslutet?", color: PAPER, bold: true }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

const children = [
  // HEADER
  new Paragraph({
    spacing: { after: 0 },
    tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
    children: [
      new TextRun({ text: "Mötescheck", bold: true, size: 36, color: INK, font: "Calibri" }),
      new TextRun({ text: ".", bold: true, size: 36, color: WINE, font: "Calibri" }),
      new TextRun({ text: " Cecilia & Magnus", bold: true, size: 36, color: INK, font: "Calibri" }),
      new TextRun({ text: "\t" }),
      new TextRun({ text: "PathfinderAI · Oliver Pettersson", size: 16, color: MUTED }),
    ],
  }),
  new Paragraph({
    spacing: { after: 200 },
    border: { bottom: { color: INK, size: 12, style: BorderStyle.SINGLE, space: 4 } },
    tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
    children: [
      new TextRun({ text: "\t" }),
      new TextRun({ text: "Internt — för mig själv", size: 16, color: MUTED, italics: true }),
    ],
  }),

  // A
  h2("A. Innan mötet"),
  checkbox("Sajten uppe på mobilen som backup"),
  checkbox("Säljbladet utskrivet × 2 (eller iPad)"),
  checkbox("Edge öppen med Hem · Galleri · Intervju · Utställningar · Cart"),
  checkbox("Penna + anteckningsblock"),
  checkbox("60-sek intro klar i huvudet"),

  // B
  h2("B. Förstå hennes verksamhet idag"),
  checkboxBold("Hur säljer du verken idag?", " (Galleri, utställning, mejl via Magnus, IG?)"),
  checkboxBold("Hur många verk säljer du", " på ett bra år? Ett dåligt?"),
  checkboxBold("Vad tar du", " för original / plexi / canvas / poster?"),
  checkboxBold("Vem är typkunden?", " (Samlare, privat, företag, gallerier?)"),
  checkboxBold("Hur mycket av försäljning", " kommer från utställningar vs nätet?"),
  checkboxBold("Vad betalar du Yola idag?", " Hur länge har du haft det?"),
  checkboxBold("Vem administrerar Yola", " — du eller Magnus?"),
  checkboxBold("Magnus roll mot Cecilia?", " Arvode, kommission, vänskap?"),
  checkboxBold("Magnus", " — andra konstnärer i nätverket? (Framtida kunder för mig)"),

  // C
  h2("C. Tryck & produktion (kritiskt)"),
  checkboxBold("Säljer du redan tryck idag?", " Eller bara original?"),
  checkboxBold("Vem trycker?", " Vad kostar varje format hos dem?"),
  checkboxBold("Leveransflöde:", " direkt från tryckeri eller via dig?"),
  checkboxBold("Högupplösta bilder ≥ 2000×2500 px", " på alla 11 verk?"),
  checkboxBold("Originalen", " — färdiga eller kräver de ramar?"),
  checkboxBold("Saknas det verk", " i samlingen jag visar? (Past, Future, Present saknas)"),

  // D
  h2("D. Innehåll & röst"),
  checkbox("Är texterna i Om-sektionen “din röst”? Vad ändras?"),
  checkbox("“I am a mother artist” — så starkt eller mer dämpat?"),
  checkbox("Manifest “Dear friends” — godkänd som den står?"),
  checkbox("Intervjun — bra Q&A? Lägga till? Spela in som video?"),
  checkbox("Marcus Bussey / Sage — så framträdande eller mindre?"),
  checkbox("Egen porträttbild på dig för Om-sektionen?"),

  // E
  h2("E. Utställningar — vad är aktuellt nu?"),
  checkboxBold("Pågående eller kommande utställningar just nu?", " (Vi har inga aktuella i systemet)"),
  checkbox("Saknas det historiska utställningar i listan?"),
  checkbox("Bilder från Edenfield (trädgårdskvällarna)?"),
  checkbox("Bilder från BYWRTRS / Dunkers / Clarion Sea U?"),

  // Page break before F
  new Paragraph({ children: [new PageBreak()] }),

  // F
  h2("F. Sluta affären"),
  checkboxBold("Vad känner du när du tittar på det här?", " (Öppen — lyssna)"),
  checkboxBold("Vem fattar beslut", " — du eller Magnus tillsammans?"),
  checkboxBold("Vad är största oron", " eller tveksamheten?"),
  checkboxBold("När vill du gå live", " om vi bestämmer idag?"),
  checkboxBold("Är 499 kr/mån inkl. moms", " rätt nivå?"),
  checkboxBold("Säga ja idag", " — eller behöver tänka?"),

  // G
  h2("G. Praktiskt om hon säger ja"),
  checkbox("Organisationsnummer / F-skattenummer"),
  checkbox("Momsregistrerad? Ja / Nej"),
  checkbox("Yola login-info (för senare transfer-kod)"),
  checkbox("Föredragen kanal: mail / sms / telefon"),
  checkbox("Bra dag för skärmdelning Stripe (20-30 min)"),

  // H
  h2("H. Saker att INTE göra"),
  bad("Försök inte signera avtal direkt — bygg förtroende"),
  bad("Lova ingen exakt deadline — säg 2-3 veckor"),
  bad("Sitt inte i tekniska detaljer (Vercel, Next.js)"),
  bad("Sälj inte på pris — sälj på “du tappar köpare idag”"),
  bad("Avbryt henne inte när hon pratar om verken"),
  bad("Be inte om Yolas lösenord — för tidigt"),

  // I
  h2("I. Magnus — bygg långsiktigt"),
  checkbox("Andra konstnärer i ditt nätverk som behöver samma sak?"),
  checkbox("Skulle du vilja jobba ihop — kommission på leads?"),
  checkbox("Lyssna på vad han ser som värde och vad han oroar sig för"),

  // J — citat-format
  h2("J. Avsluta mötet med"),
  new Paragraph({
    spacing: { after: 120 },
    indent: { left: 360 },
    border: { left: { color: WINE, size: 18, style: BorderStyle.SINGLE, space: 12 } },
    children: [
      new TextRun({
        text: "“Tack för att ni tog er tid. Jag mailar er säljbladet och länken igen idag. Säg till om ni har frågor — och om ni vill gå vidare bokar vi nästa steg, eller om ni vill ha ändringar innan vi bestämmer oss.”",
        italics: true,
        size: 22,
      }),
    ],
  }),
  new Paragraph({
    spacing: { after: 120 },
    children: [
      new TextRun({ text: "Stäng inte hårt. Ge dem utrymme. De ringer dig.", italics: true, color: MUTED }),
    ],
  }),

  // K
  h2("K. Direkt efter mötet — utvärdera"),
  checkboxBold("Köper hon konceptet?", "  Ja / Nej / Kanske"),
  checkboxBold("Köper hon priset?", "  Ja / Nej / Mer info"),
  checkboxBold("Köper hon DIG?", "  (personkemi avgörande)"),
  checkbox("Nästa konkreta steg + datum"),
  checkbox("Vad behöver jag leverera till nästa möte?"),

  // TL;DR
  new Paragraph({ spacing: { before: 240, after: 0 }, children: [new TextRun("")] }),
  tldrTable(),

  // Footer
  new Paragraph({
    spacing: { before: 240, after: 0 },
    alignment: AlignmentType.CENTER,
    border: { top: { color: "CCCCCC", size: 6, style: BorderStyle.SINGLE, space: 6 } },
    children: [
      new TextRun({
        text: "Skriv ut · ta med pennan · lyssna mer än prata · lycka till",
        size: 16, color: MUTED, italics: true,
      }),
    ],
  }),
];

const doc = new Document({
  creator: "Oliver Pettersson / PathfinderAI",
  title: "Mötescheck — Cecilia & Magnus",
  styles: {
    default: { document: { run: { font: "Calibri", size: 20 } } },
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 }, // A4
        margin: { top: 1000, right: 1000, bottom: 1000, left: 1000 },
      },
    },
    children,
  }],
});

Packer.toBuffer(doc).then((buffer) => {
  const out = "C:/Users/olive/Desktop/Cecilia-Motescheck.docx";
  fs.writeFileSync(out, buffer);
  console.log("Wrote", out, buffer.length, "bytes");
});
