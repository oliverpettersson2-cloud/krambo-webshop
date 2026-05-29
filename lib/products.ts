export type Format = {
  id: "original" | "plexi" | "canvas" | "poster";
  name: string;
  priceSEK: number;
  description: string;
  leadTime: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  year: number;
  description: string;
  longDescription: string;
  image: string;
  formats: Format[];
  inStock: boolean;
  badge?: "bestseller" | "nyhet" | "rea" | "unik";
};

// Bilder ligger i /public/art/. Filnamn = slug + .png.
const img = (slug: string) => `/art/${slug}.png`;

// Standardformat — kan justeras per verk om något är slutsålt eller har avvikande pris.
const standardFormats = (originalPrice: number, originalAvailable = true): Format[] => [
  {
    id: "original",
    name: "Originalmålning",
    priceSEK: originalPrice,
    description: "Akryl på duk, signerad och numrerad av Cecilia K. Endast en finns.",
    leadTime: "Leverans 5-10 dagar, försäkrad frakt",
  },
  {
    id: "plexi",
    name: "Plexiglas-tryck",
    priceSEK: 5900,
    description: "Hög upplösning på 4 mm plexiglas, aluminiumupphängning på baksidan. Format 70×100 cm.",
    leadTime: "Tryckt på beställning, 10-14 dagar",
  },
  {
    id: "canvas",
    name: "Canvastryck",
    priceSEK: 2200,
    description: "Tryck på 380 g bomullscanvas, spänd över träram. Format 60×80 cm.",
    leadTime: "Tryckt på beställning, 7-10 dagar",
  },
  {
    id: "poster",
    name: "Poster (oramad)",
    priceSEK: 690,
    description: "Tryckt på 200 g matt arkivpapper. Format 50×70 cm. Levereras i rör.",
    leadTime: "5-7 dagar",
  },
].filter((f) => f.id !== "original" || originalAvailable) as Format[];

export const products: Product[] = [
  {
    id: "art_001",
    slug: "the-birth-of-venus",
    name: "The Birth of Venus",
    year: 2023,
    description: "Akryl på duk · 2023",
    longDescription:
      "En modern Venus, född inte ur havet utan ur en lineage av kvinnor. Lager av akryl, bladguld och hennes dotters silhuett. Verket utforskar kvinnlig kraft och förfädernas minne.",
    image: img("the-birth-of-venus"),
    formats: standardFormats(34000),
    inStock: true,
  },
  {
    id: "art_002",
    slug: "noma",
    name: "Noma",
    year: 2022,
    description: "Akryl på duk · 2022",
    longDescription:
      "Tidigt verk i Cecilia K:s utforskning av dualistiska bilder. Det yttre porträttet möter en inre berättelse — pose och kommando, skönhet och komplexitet.",
    image: img("noma"),
    formats: standardFormats(28000),
    inStock: true,
  },
  {
    id: "art_003",
    slug: "the-three-graces",
    name: "The Three Graces",
    year: 2023,
    description: "Akryl på duk · 2023",
    longDescription:
      "Tre kvinnogestalter — referens till de klassiska gracerna, omtolkat i Cecilias varma färgskala. Mor, dotter och förmoder i en synkroniserad rörelse.",
    image: img("the-three-graces"),
    formats: standardFormats(38000),
    inStock: true,
  },
  {
    id: "art_004",
    slug: "speaking-in-colour",
    name: "Speaking in Colour",
    year: 2025,
    description: "Akryl på duk · 2025",
    longDescription:
      "Verk från Cecilias 2025-serie. Färgen blir själva språket — det som inte kan sägas i ord ekas i mättnad och rörelse. Visas just nu på BYWRTRS Gallery, Stockholm.",
    image: img("speaking-in-colour"),
    formats: standardFormats(32000),
    inStock: true,
    badge: "nyhet",
  },
  {
    id: "art_005",
    slug: "madonna",
    name: "Madonna",
    year: 2025,
    description: "Akryl på duk · 2025",
    longDescription:
      "En samtida madonna — modern, jordnära, motståndskraftig. En del av Cecilias pågående utforskning av moderskapets ikonografi.",
    image: img("madonna"),
    formats: standardFormats(36000),
    inStock: true,
    badge: "nyhet",
  },
  {
    id: "art_006",
    slug: "matopos",
    name: "Matopos",
    year: 2025,
    description: "Akryl på duk · 2025",
    longDescription:
      "Uppkallad efter Matobo-bergen i Zimbabwe där Cecilia växte upp. Färgerna bär ekot av savannens röda jord och kvällsljus.",
    image: img("matopos"),
    formats: standardFormats(30000),
    inStock: true,
  },
  {
    id: "art_007",
    slug: "phenomenal-woman",
    name: "Phenomenal Woman",
    year: 2023,
    description: "Akryl på duk · 2023",
    longDescription:
      "Inspirerad av Maya Angelous dikt. Storformat med text och kvinnokropp i siluett. Ett av Cecilias mest reproducerade verk.",
    image: img("phenomenal-woman"),
    formats: standardFormats(28000, false),
    inStock: true,
  },
  {
    id: "art_008",
    slug: "still-like-air-i-rise",
    name: "Still Like Air I Rise",
    year: 2023,
    description: "Akryl på duk · 2023",
    longDescription:
      "Andra hälften av diptyken med Phenomenal Woman. Lättheten möter trycket — den oavbrutna stigningen, i gult och rosa.",
    image: img("still-like-air-i-rise"),
    formats: standardFormats(28000),
    inStock: true,
  },
  {
    id: "art_009",
    slug: "multi-eve",
    name: "Multi Eve",
    year: 2024,
    description: "Akryl på duk · 2024",
    longDescription:
      "Eva som många — varje kvinna bär en mångfald inom sig. En central tes i Cecilias konstnärskap, här i sin tydligaste form.",
    image: img("multi-eve"),
    formats: standardFormats(32000),
    inStock: true,
  },
  {
    id: "art_010",
    slug: "neon-adam",
    name: "Neon Adam",
    year: 2024,
    description: "Akryl på duk · 2024",
    longDescription:
      "Motvikten — Adam i neon. Maskuliniteten omformad genom Cecilias färgblick. Mjuk, närvarande, lyssnande.",
    image: img("neon-adam"),
    formats: standardFormats(30000),
    inStock: true,
  },
  {
    id: "art_011",
    slug: "lilith-ii",
    name: "Lilith II",
    year: 2023,
    description: "Akryl på duk · 2023",
    longDescription:
      "Lilith — den första kvinnan, den som vägrade lyda. Cecilias tolkning ger henne tillbaka röst, kropp och plats.",
    image: img("lilith-ii"),
    formats: standardFormats(34000, false),
    inStock: true,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFormat(product: Product, formatId: string): Format | undefined {
  return product.formats.find((f) => f.id === formatId);
}

export function fromPrice(product: Product): number {
  return Math.min(...product.formats.map((f) => f.priceSEK));
}

export function getYears(): number[] {
  return Array.from(new Set(products.map((p) => p.year))).sort((a, b) => b - a);
}
