export type Format = {
  id: "poster-40x50" | "poster-50x70" | "print-40x50" | "print-50x70" | "plexi-15x20";
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
  video?: string;
  formats: Format[];
  inStock: boolean;
  badge?: "bestseller" | "nyhet" | "rea" | "unik";
};

// Bilder ligger i /public/art/. Filnamn = slug + .jpg.
const img = (slug: string) => `/art/${slug}.jpg`;

// Plexiglas-filmer ligger i /public/art/video/. Filnamn = slug + .mp4.
const vid = (slug: string) => `/art/video/${slug}.mp4`;

// Cecilias faktiska prislista, juli 2026. Fine art prints är signerade och numrerade i upplaga 40.
const standardFormats = (): Format[] => [
  {
    id: "poster-40x50",
    name: "Poster 40×50 cm",
    priceSEK: 500,
    description: "Tryckt på blankt fotografiskt papper. Format 40×50 cm. Levereras i rör, oramad.",
    leadTime: "5-7 dagar",
  },
  {
    id: "poster-50x70",
    name: "Poster 50×70 cm",
    priceSEK: 900,
    description: "Tryckt på blankt fotografiskt papper. Format 50×70 cm. Levereras i rör, oramad.",
    leadTime: "5-7 dagar",
  },
  {
    id: "print-40x50",
    name: "Fine art print 40×50 cm",
    priceSEK: 1200,
    description: "Signerat och numrerat konsttryck på Hahnemühle Studio Lustre 250 g arkivpapper. Begränsad upplaga om 40 st.",
    leadTime: "7-10 dagar",
  },
  {
    id: "print-50x70",
    name: "Fine art print 50×70 cm",
    priceSEK: 1600,
    description: "Signerat och numrerat konsttryck på Hahnemühle Studio Lustre 250 g arkivpapper. Begränsad upplaga om 40 st.",
    leadTime: "7-10 dagar",
  },
  {
    id: "plexi-15x20",
    name: "Plexiglas 15×20 cm i presentlåda",
    priceSEK: 2500,
    description: "Verket tryckt på plexiglas 15×20×2,5 cm. Levereras i presentlåda 25×25×2,5 cm.",
    leadTime: "Tryckt på beställning, 10-14 dagar",
  },
];

export const products: Product[] = [
  {
    id: "art_adam",
    slug: "adam",
    name: "Adam",
    year: 2023,
    description: "Akryl på duk · 2023",
    longDescription:
      "En omtolkning av Adam — maskuliniteten mjukat, präglad, närvarande. Del av Cecilias serie där kroppen bär färgens språk.",
    image: img("adam"),
    video: vid("adam"),
    formats: standardFormats(),
    inStock: true,
  },
  {
    id: "art_bird-of-paradise",
    slug: "bird-of-paradise",
    name: "Bird of Paradise",
    year: 2024,
    description: "Akryl på duk · 2024",
    longDescription:
      "Frihetens fågel i förvandling. Skarpa turkosa och gula lager bär ett bildspråk om längtan och rörelse.",
    image: img("bird-of-paradise"),
    video: vid("bird-of-paradise"),
    formats: standardFormats(),
    inStock: true,
  },
  {
    id: "art_blue",
    slug: "blue",
    name: "Blue",
    year: 2023,
    description: "Akryl på duk · 2023",
    longDescription:
      "En stilla studie i kroppslighet och sinnesstämning. Blå toner bär både djup och genomskinlighet.",
    image: img("blue"),
    video: vid("blue"),
    formats: standardFormats(),
    inStock: true,
  },
  {
    id: "art_eden",
    slug: "eden",
    name: "Eden",
    year: 2023,
    description: "Akryl på duk · 2023",
    longDescription:
      "En modern trädgårdsberättelse. Färgexplosionen bär ekot av hennes uppväxts landskap i Zimbabwe.",
    image: img("eden"),
    video: vid("eden"),
    formats: standardFormats(),
    inStock: true,
    badge: "bestseller",
  },
  {
    id: "art_eve",
    slug: "eve",
    name: "Eve",
    year: 2023,
    description: "Akryl på duk · 2023",
    longDescription:
      "Eva som många — varje kvinna bär en mångfald inom sig. Ett av kärnverken i Cecilias konstnärskap.",
    image: img("eve"),
    video: vid("eve"),
    formats: standardFormats(),
    inStock: true,
  },
  {
    id: "art_fortuna",
    slug: "fortuna",
    name: "Fortuna",
    year: 2024,
    description: "Akryl på duk · 2024",
    longDescription:
      "Ödesgudinnan i Cecilias färgblick. Guldade lager möter förfädrens rytm — hopp och kraft i samma andetag.",
    image: img("fortuna"),
    video: vid("fortuna"),
    formats: standardFormats(),
    inStock: true,
  },
  {
    id: "art_i-rise",
    slug: "i-rise",
    name: "I Rise",
    year: 2023,
    description: "Akryl på duk · 2023",
    longDescription:
      "Inspirerad av Maya Angelou. Lättheten möter trycket — den oavbrutna stigningen i gult och rosa.",
    image: img("i-rise"),
    video: vid("i-rise"),
    formats: standardFormats(),
    inStock: true,
    badge: "bestseller",
  },
  {
    id: "art_jikinya",
    slug: "jikinya",
    name: "Jikinya",
    year: 2024,
    description: "Akryl på duk · 2024",
    longDescription:
      "Ett namn från Zimbabwe — flickan som talar sanning även när ingen lyssnar. Cecilias hyllning till modet.",
    image: img("jikinya"),
    video: vid("jikinya"),
    formats: standardFormats(),
    inStock: true,
  },
  {
    id: "art_lilith-i",
    slug: "lilith-i",
    name: "Lilith I",
    year: 2023,
    description: "Akryl på duk · 2023",
    longDescription:
      "Den första kvinnan — den som vägrade lyda. Cecilias tolkning ger henne tillbaka röst, kropp och plats.",
    image: img("lilith-i"),
    video: vid("lilith-i"),
    formats: standardFormats(),
    inStock: true,
  },
  {
    id: "art_obsidian",
    slug: "obsidian",
    name: "Obsidian",
    year: 2024,
    description: "Akryl på duk · 2024",
    longDescription:
      "Det svarta glaset som speglar allt. Mörkret som håller ljuset kvar. En kropp som bär motstånd i tystnad.",
    image: img("obsidian"),
    video: vid("obsidian"),
    formats: standardFormats(),
    inStock: true,
  },
  {
    id: "art_phenomenal",
    slug: "phenomenal",
    name: "Phenomenal",
    year: 2023,
    description: "Akryl på duk · 2023",
    longDescription:
      "Inspirerad av Maya Angelous \"Phenomenal Woman\". Text och kvinnokropp i siluett — ett av Cecilias mest reproducerade verk.",
    image: img("phenomenal"),
    video: vid("phenomenal"),
    formats: standardFormats(),
    inStock: true,
    badge: "bestseller",
  },
  {
    id: "art_the-three-graces",
    slug: "the-three-graces",
    name: "The Three Graces",
    year: 2023,
    description: "Akryl på duk · 2023",
    longDescription:
      "Tre kvinnogestalter — de klassiska gracerna omtolkade i Cecilias varma färgskala. Mor, dotter och förmoder i en synkroniserad rörelse.",
    image: img("the-three-graces"),
    video: vid("the-three-graces"),
    formats: standardFormats(),
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
