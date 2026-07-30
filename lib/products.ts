export type Format = {
  id: "poster-40x50" | "poster-50x70" | "print-40x50" | "print-50x70" | "plexi-15x20";
  name: string;
  priceSEK: number;
  description: string;
  leadTime: string;
};

export type Localized = { sv: string; en: string };

export type Product = {
  id: string;
  slug: string;
  name: string;
  year: number;
  description: string;
  longDescription: string;
  story: Localized;
  originalSpec: Localized;
  image: string;
  poster?: string;
  video?: string;
  formats: Format[];
  inStock: boolean;
  badge?: "bestseller" | "nyhet" | "rea" | "unik";
};

// Bilder ligger i /public/art/. Filnamn = slug + .jpg.
const img = (slug: string) => `/art/${slug}.jpg`;

// Plexiglas-filmer ligger i /public/art/video/. Filnamn = slug + .mp4.
const vid = (slug: string) => `/art/video/${slug}.mp4`;

// Posterdesigner (vit ram + Const Collection-typografi) ligger i /public/art/poster/. Filnamn = slug + .jpg.
const pos = (slug: string) => `/art/poster/${slug}.jpg`;

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

// Verkstexter från Cecilias dokument "Texts for paintings", juli 2026.
// Texterna beskriver ORIGINALMÅLNINGARNA (såld direkt, ej via shoppen) — visas under "Om originalverket".
export const products: Product[] = [
  {
    id: "art_adam",
    slug: "adam",
    name: "Adam",
    year: 2022,
    description: "Akryl på duk · 2022",
    longDescription:
      "En omtolkning av Adam — maskuliniteten mjukat, präglad, närvarande. Del av Cecilias serie där kroppen bär färgens språk.",
    story: {
      sv: "Han hade inget namn, bara frågor. Ibland kände han sig modig, men han bar också rädsla i bröstet. Han blinkade hårt för att tvinga bort floderna, för han visste ännu inte att tårar kan vara dold styrka. Han var bara en man, ensam. Skaparen gav honom namnet Adam — men han var inte den första.",
      en: "He had no name, only questions. Sometimes he felt brave, but he also carried fear in his chest. He blinked hard trying to force the floods away, because he did not yet know that tears can be strength hidden. He was only one man, alone. The creator named him Adam, but he was not the first.",
    },
    originalSpec: {
      sv: "Originalmålning — akryl på duk, i handgjord belyst ram. 78×148×9 cm.",
      en: "Original painting — acrylic paint on canvas, in handmade illuminated frame. 78×148×9 cm.",
    },
    image: img("adam"),
    poster: pos("adam"),
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
    story: {
      sv: "Det här är en flicka i förvandling, i blivande. Precis som blomman \"Bird of Paradise\" börjar en ung flickas liv tätt lindat under skyddande lager. När hon växer är hon inte bara beroende av sin egen styrka utan också av dem omkring henne. Precis som blomman behöver hon ljus och omsorg, så att hon en dag kan visa den skönhet som alltid funnits inom henne.",
      en: "This is a girl in transformation, in the becoming. Like the \"Bird of Paradise\" flower, a young girl's life begins tightly wrapped beneath hidden layers of protective casing. As she grows, she depends not only on her own strength but on those around her. Just like the flower, she needs light and nurture so that one day she can reveal the beauty that has always existed within her.",
    },
    originalSpec: {
      sv: "Originalmålning — akryl på duk med bladguld, i handgjord belyst ram. 128×108×9 cm.",
      en: "Original painting — acrylic on canvas with gold leaf, in handmade illuminated frame. 128×108×9 cm.",
    },
    image: img("bird-of-paradise"),
    poster: pos("bird-of-paradise"),
    video: vid("bird-of-paradise"),
    formats: standardFormats(),
    inStock: true,
  },
  {
    id: "art_blue",
    slug: "blue",
    name: "Blue",
    year: 2024,
    description: "Akryl på duk · 2024",
    longDescription:
      "En stilla studie i kroppslighet och sinnesstämning. Blå toner bär både djup och genomskinlighet.",
    story: {
      sv: "Blue kastar en blick på dig över axeln. Hennes enda synliga öga möter varje betraktare i ett unikt ögonblick av kontakt. Hon ser sårbar och skör ut, men fast besluten i anden. Hennes hållning rymmer både tystnad och tal. Paradiset är förvisso förlorat, men det lämnade syner efter sig. Genom tiden ser hon på dig med gångna och kommande generationers ögon — alla här, nu.",
      en: "Blue glances at you from over her shoulder. Her single visible eye gazes out, encountering each viewer in a unique moment of contact. She looks vulnerable and delicate yet resolved in spirit. Her pose holds within her, silence, yet speech. Paradise has indeed been lost, but it has left behind visions. Cutting through time, she gazes at you with the eyes of past and future generations, all here now.",
    },
    originalSpec: {
      sv: "Originalmålning — akryl på duk, i handgjord belyst ram. 108×108×9 cm.",
      en: "Original painting — acrylic on canvas in handmade illuminated frame. 108×108×9 cm.",
    },
    image: img("blue"),
    poster: pos("blue"),
    video: vid("blue"),
    formats: standardFormats(),
    inStock: true,
  },
  {
    id: "art_eden",
    slug: "eden",
    name: "Eden",
    year: 2024,
    description: "Akryl på duk · 2024",
    longDescription:
      "En modern trädgårdsberättelse. Färgexplosionen bär ekot av hennes uppväxts landskap i Zimbabwe.",
    story: {
      sv: "I den första tystnaden skapade skaparen en värld gjord för kvinnor. Det var en plats där floderna mindes. Det var Edens lustgård, där andetag blev liv. Eden levde i balans och motsägelse och åt fritt av kunskapens träd närhelst hon ville. Hon vandrade ut i världen med frön i håret och blommor i händerna.",
      en: "In the first silence, the creator shaped a world made for women. It was a place where the rivers remembered. It was Eden's garden where breath became life. Eden lived in balance and contradiction and tasted freely of the tree of knowing whenever she liked. She walked into the world carrying seeds in her hair and blossoms in her hands.",
    },
    originalSpec: {
      sv: "Originalmålning — akryl på duk med bladguld, i handgjord belyst ram. 128×108×9 cm.",
      en: "Original painting — acrylic on canvas with gold leaf, in handmade illuminated frame. 128×108×9 cm.",
    },
    image: img("eden"),
    poster: pos("eden"),
    video: vid("eden"),
    formats: standardFormats(),
    inStock: true,
    badge: "bestseller",
  },
  {
    id: "art_eve",
    slug: "eve",
    name: "Eve",
    year: 2021,
    description: "Akryl på duk · 2021",
    longDescription:
      "Eva som många — varje kvinna bär en mångfald inom sig. Ett av kärnverken i Cecilias konstnärskap.",
    story: {
      sv: "Med abstraktion, färg och form försöker jag teckna ett djupare, psykologiskt porträtt av kvinnan bakom kroppen. Som konstnär i 50-årsåldern visar jag tyngden, djupet och skönheten som smälter samman mellan kropp och själ när jag åldras — jag skildrar mig själv inte som jag är, utan som jag känner mig… fragmenterad men hel.",
      en: "By using abstraction, colour and form I attempt to map a deeper, psychological portrayal of the woman behind the body. As an artist in my 50's, I show the weight, depth, and beauty merging between body and soul as I age, depicting myself not as I am but as I feel… fragmented yet whole.",
    },
    originalSpec: {
      sv: "Originalmålning — akryl på duk, i handgjord belyst ram. 78×148×9 cm.",
      en: "Original painting — acrylic paint on canvas, in handmade illuminated frame. 78×148×9 cm.",
    },
    image: img("eve"),
    poster: pos("eve"),
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
    story: {
      sv: "En hyllning till en trädgård på Fortunavägen. Fortuna syftar på lyckan — inte rikedom i pengar, utan rikedom i tur, öde och kärlek.",
      en: "A tribute to a garden on Fortuna Road. Fortuna references the fortune, not in monetary wealth but wealth in luck, fate and love.",
    },
    originalSpec: {
      sv: "Originalmålning — akryl på duk, i handgjord belyst ram. 88×108×9 cm.",
      en: "Original painting — acrylic paint on canvas, in handmade illuminated frame. 88×108×9 cm.",
    },
    image: img("fortuna"),
    poster: pos("fortuna"),
    video: vid("fortuna"),
    formats: standardFormats(),
    inStock: true,
  },
  {
    id: "art_i-rise",
    slug: "i-rise",
    name: "I Rise",
    year: 2022,
    description: "Akryl på duk · 2022",
    longDescription:
      "Inspirerad av Maya Angelou. Lättheten möter trycket — den oavbrutna stigningen i gult och rosa.",
    story: {
      sv: "Över gestalten ser vi orden ur Maya Angelous dikt \"Still like air I rise\". Hon bär världens tyngd, dess historia, men vägrar låta sig definieras av den. I stället formas hon av valet att röra sig framåt. Det är ett ihågkommande av vem hon är, även när världens krafter försöker få henne att glömma eller tvivla. I Rise är inte bara en hyllning till Maya Angelou, utan en påminnelse om att styrkan vi för vidare blir luften våra döttrar andas.",
      en: "We can see the words of Maya Angelou's poem \"Still like air I Rise\" projected across the figure. She carries the weight of the world, its history, but refuses to be defined by it. Instead, she is shaped by the choice to move forward. It is a remembering of who she is even when the forces of the world try to make her forget or doubt. I Rise is not only a tribute to Maya Angelou, but a reminder that the strength we pass on, becomes the air our daughters breathe.",
    },
    originalSpec: {
      sv: "Originalmålning — akryl på duk, i handgjord belyst ram. 158×108×9 cm.",
      en: "Original painting — acrylic on canvas in handmade illuminated frame. 158×108×9 cm.",
    },
    image: img("i-rise"),
    poster: pos("i-rise"),
    video: vid("i-rise"),
    formats: standardFormats(),
    inStock: true,
    badge: "bestseller",
  },
  {
    id: "art_jikinya",
    slug: "jikinya",
    name: "Jikinya",
    year: 2023,
    description: "Akryl på duk · 2023",
    longDescription:
      "Ett namn från Zimbabwe — flickan som talar sanning även när ingen lyssnar. Cecilias hyllning till modet.",
    story: {
      sv: "\"Jikinya\" är namnet på en dansfestival i Zimbabwe. Bilden föreställer inga av landets traditionella danser, men festivalen är en inspiration och en påminnelse om dansens läkande kraft.\n\n\"Dotter, vill du dansa? Den här världen bär problem och möjligheter. Dansar du med dem, genom dem, förbi dem? Gör din sorg till rytm och din rädsla till andetag. Dansa inte för en scen utan för himlarna. Dina fötter ska slå namnen på alla kvinnor som dansat under samma himmel. Ordlöst, utan applåder.\"",
      en: "\"Jikinya\" is the name of a dance festival from Zimbabwe. Although the image has no relation to traditional dances in the country, it serves as an inspiration and reminder of the healing power of dance.\n\n\"Daughter, will you dance? This world brings problems and possibilities. Will you dance with them, through them, past them? Turn your grief into rhythm and your fear into breath. Dance not for a stage but for the heavens. Your feet will beat the names of all the women who danced under the same sky. Wordless, no applause.\"",
    },
    originalSpec: {
      sv: "Originalmålning — akryl på duk, i handgjord belyst ram. 158×108×9 cm.",
      en: "Original painting — acrylic on canvas in handmade illuminated frame. 158×108×9 cm.",
    },
    image: img("jikinya"),
    poster: pos("jikinya"),
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
    story: {
      sv: "Lilith var inte historiens skurk; hon är historien som raderades. I gammal biblisk myt sägs Lilith ha varit Adams första hustru, skapad ur samma jord som Adam — och därmed hans jämlike. Men när Lilith vägrade underordna sig förvisades hon ur Edens lustgård och flydde till Röda havet, där hon blev en fresterska och moder till demoner.\n\nI det här verket omtolkas Lilith genom perimenopausens lins — en annan sorts exil. Det är en tid när kroppen inte längre rättar sig efter samhällets förväntningar på kvinnlighet, fertilitet och förutsägbarhet. Som Lilith blir kvinnan vid den här tröskeln missförstådd och förminskad. Men som Lilith är hon inte färdig — hon förvandlas. Hormonernas avfall, hettan, vreden, sömnlösheten känns som förfall och kaos, men det kan också vara kraft som bryter fram.\n\nLilith står för allt det världen tycker är obekvämt: en kvinna som vägrar åldras stillsamt, vägrar be om ursäkt för sin lust, sin eld, sin vetskap. Hon skäms inte, och hon låter sig inte styras! Det här handlar inte om smärta, utan om återtagen makt. Lilith kastades ut ur paradiset — men hon kom tillbaka och byggde sitt eget, precis här.",
      en: "Lilith was not the villain of the story; she is the story that was erased. In ancient biblical myth it is said that Lilith was Adam's first wife, created from the same soil as Adam, making the two equal. But when Lilith refused to be subservient, she was cast out of the garden of Eden and fled to the Red Sea where she became a temptress and birther of demon spirits.\n\nIn this work Lilith is reimagined through the lens of perimenopause, a different kind of exile. This is a time when the body no longer conforms to society's expectations of femininity, fertility and predictability. Like Lilith, the perimenopausal woman entering this threshold is misunderstood and diminished. But also, like Lilith, she is not done, she is transforming. The shedding of hormones, the heat, the rage, the sleeplessness, feels like decline and chaos, but it can also be power breaking through.\n\nLilith stands for all that the world finds uncomfortable, a woman who refuses to age gently, refuses to apologize for her desire, her fire, her knowing. She is not ashamed, and she is ungovernable! This is not about pain, but about power reclaimed. Lilith was cast out of paradise, but she returned and built her own right here.",
    },
    originalSpec: {
      sv: "Originalmålning — akryl på duk, i handgjord belyst ram. 128×240×9 cm.",
      en: "Original painting — acrylic paint on canvas, in handmade illuminated frame. 128×240×9 cm.",
    },
    image: img("lilith-i"),
    poster: pos("lilith-i"),
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
    story: {
      sv: "Varför \"Obsidian\"? Obsidian är ett naturligt vulkaniskt glas som bildas ur snabbt avkyld lava. I många traditioner förknippas det med skydd, jordning och reflektion — en återkommande praktik hos konstnärer. Det bär en känsla av katharsis när man betraktar det: resultatet av att landa i ett slags lugn efter ett utbrott av frustration.",
      en: "Why \"Obsidian\"? Obsidian is a natural volcanic glass formed from rapidly cooled lava. In various beliefs it is associated with protection, grounding and reflection, a frequent practice for many artists. It holds a sense of catharsis as you gaze upon it, showing the result of arriving at some sense of calmness after a bout of frustration.",
    },
    originalSpec: {
      sv: "Originalmålning — akryl på duk med bladguld, i handgjord belyst ram. 128×108×9 cm.",
      en: "Original painting — acrylic on canvas with gold leaf, in handmade illuminated frame. 128×108×9 cm.",
    },
    image: img("obsidian"),
    poster: pos("obsidian"),
    video: vid("obsidian"),
    formats: standardFormats(),
    inStock: true,
  },
  {
    id: "art_phenomenal",
    slug: "phenomenal",
    name: "Phenomenal",
    year: 2024,
    description: "Akryl på duk · 2024",
    longDescription:
      "Inspirerad av Maya Angelous \"Phenomenal Woman\". Text och kvinnokropp i siluett — ett av Cecilias mest reproducerade verk.",
    story: {
      sv: "Målningen är ett löfte om att fostra en generation kvinnor som vandrar i sitt eget ljus, fullt förvissade om det extraordinära i den de redan är. Våra döttrar lever i en värld av ständigt brus, där samhället är snabbt att kritisera och långsamt att fira unga kvinnors styrka. De viktigaste bekräftelserna måste komma hemifrån! Innan världen hinner tala om för en flicka vem hon kan bli, måste en mamma säga henne, utan förbehåll, att hon är FENOMENAL.",
      en: "This painting is a commitment to fostering a generation of women who walk in their light, fully believing in the extraordinary reality of who they already are. Our daughters live in a world of pervasive noise where society seems quick to critique and slow to celebrate the strength of young women. The most crucial affirmations must come from home! Before the world can tell a girl who she can be, a mother must tell her, unequivocally, that she is PHENOMENAL.",
    },
    originalSpec: {
      sv: "Originalmålning — akryl på duk, i handgjord belyst ram. 158×108×9 cm.",
      en: "Original painting — acrylic on canvas in handmade illuminated frame. 158×108×9 cm.",
    },
    image: img("phenomenal"),
    poster: pos("phenomenal"),
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
    story: {
      sv: "Trion symboliserar växandet som flödar genom generationer, där kvinnorna står under samma månes ljus — en modern hommage till \"De tre gracerna\". Verket översätter en uråldrig berättelse till en stilla, samtida verklighet. Det gudomliga bandet är ingen myt utan ett levande, blomstrande arv mellan en mor och hennes två döttrar.",
      en: "This trio symbolizes the growth that flows through generations as the women stand under the light of the same moon, a modern homage to \"The Three Graces\". This piece translates an ancient story into a quiet, contemporary reality. The bond of the divine is not a myth but a living, thriving legacy of a mother and her two daughters.",
    },
    originalSpec: {
      sv: "Originalmålning — akryl på duk, i handgjord belyst ram. 158×108×9 cm.",
      en: "Original painting — acrylic on canvas in handmade illuminated frame. 158×108×9 cm.",
    },
    image: img("the-three-graces"),
    poster: pos("the-three-graces"),
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
