export type Lang = "sv" | "en";

export const LANGS: Lang[] = ["sv", "en"];

type Dict = Record<string, Record<Lang, string>>;

export const dict: Dict = {
  // NAVIGATION
  "nav.home": { sv: "Hem", en: "Home" },
  "nav.exhibitions": { sv: "Utställningar", en: "Exhibitions" },
  "nav.gallery": { sv: "Shop", en: "Shop" },
  "nav.interview": { sv: "Intervju", en: "Interview" },
  "nav.cart": { sv: "Kundvagn", en: "Cart" },
  "nav.back": { sv: "← Tillbaka", en: "← Back" },

  // HOME — hero
  "home.tagline": {
    sv: "Cecilia Kristoffersson · Bulawayo 1971 · södra Sverige",
    en: "Cecilia Kristoffersson · Bulawayo 1971 · Southern Sweden",
  },
  "home.h1": { sv: "I am a mother artist.", en: "I am a mother artist." },
  "home.intro": {
    sv: "Storskaliga illuminerade akrylmålningar om feminin kraft, förfädernas minne och berättelsens återtagande.",
    en: "Large-scale illuminated acrylic paintings on feminine power, ancestral memory and the reclamation of narrative.",
  },
  "home.cta.gallery": { sv: "Se verken", en: "See the works" },
  "home.cta.exhibitions": { sv: "Utställningar", en: "Exhibitions" },

  // WHO HOLDS THE BRUSH
  "brush.eyebrow": { sv: "Who holds the brush?", en: "Who holds the brush?" },
  "brush.h2": { sv: "Cecilia Kristoffersson", en: "Cecilia Kristoffersson" },
  "brush.p1": {
    sv: "Cecilia föddes 1971 i Bulawayo, Zimbabwe, och flyttade till södra Sverige 1986 när hon var sexton. Hennes far var etnomusikolog — stora delar av barndomen tillbringades i bushen, med ljudet av traditionella marimbor, mbiror och trummor som bakgrund.",
    en: "Cecilia was born in 1971 in Bulawayo, Zimbabwe, and moved to Southern Sweden in 1986 when she was sixteen. Her father was an ethnomusicologist — much of her childhood was spent in the bush, listening to and dancing to the sounds of traditional marimbas, mbiras and drums.",
  },
  "brush.p2": {
    sv: "Genom hela uppväxten studerade hon dans och bildkonst, en resa som fortsatte i Sverige. Som ung vuxen utbildade hon sig till bildkonstpedagog och hade sedan en 20-årig karriär som International Baccalaureate Workshop Leader.",
    en: "Throughout her upbringing she studied dance and visual art, a journey that continued in Sweden. As a young adult she trained as a visual art educator and went on to a 20-year career as an International Baccalaureate Workshop Leader.",
  },
  "brush.p3": {
    sv: "Cecilia K. arbetar primärt i akryl på duk och utforskar kvinnlig kraft, förfädernas minne och berättelsens återtagande. I kärnan av hennes verk ligger en mors bön till samhället — att lyfta upp och stärka döttrarna.",
    en: "Cecilia K. works primarily in acrylic on canvas, exploring feminine power, ancestral memory and the reclamation of narrative. At the core of her work lies a mother's plea to society — to uplift and empower daughters.",
  },
  "brush.p4": {
    sv: "Genom dualistiska bilder projicerade på döttrarnas kroppar skapar hon en synergi mellan pose och kommando, skönhet och komplexitet. Varje målning kommer till liv inom en handgjord, upplyst ram.",
    en: "Through dualistic images projected onto her daughters' bodies she creates a synergy between pose and command, beauty and complexity. Each painting comes alive within a handcrafted, illuminated frame.",
  },
  "brush.readInterview": {
    sv: "Läs hela intervjun med Cecilia →",
    en: "Read the full interview with Cecilia →",
  },

  // EVENING GARDEN
  "garden.eyebrow": { sv: "Cecilias signatur-format", en: "Cecilia's signature format" },
  "garden.h2": { sv: "Evening Garden Exhibitions", en: "Evening Garden Exhibitions" },
  "garden.p1": {
    sv: "Cecilia är som lyckligast när människor spontant snubblar in i hennes konst. Hon föredrar att visa verken i trädgårdar på kvällen — där natten drar för himlen, målningarna lyser upp, och en känsla av samvaro väcks.",
    en: "Cecilia is at her happiest when people spontaneously stumble into her art. She prefers to exhibit her works in gardens at night — where the sky curtains, the paintings light up, and a sense of togetherness is conjured.",
  },
  "garden.quote": {
    sv: "\"The outdoors becomes not only a backdrop but a collaborator. As the night curtains the sky, the paintings light up.\"",
    en: "\"The outdoors becomes not only a backdrop but a collaborator. As the night curtains the sky, the paintings light up.\"",
  },
  "garden.cta": { sv: "Se alla utställningar →", en: "See all exhibitions →" },

  // MANIFEST
  "manifest.eyebrow": { sv: "Cecilias ord", en: "Cecilia's words" },
  "manifest.h2": { sv: "Dear friends,", en: "Dear friends," },
  "manifest.p1": {
    sv: "\"In a world cluttered by noise, I believe that art is the only pure thing left. It doesn't originate from the marketplace or the passing trend. It is its own — a genuine expression, a raw feeling, a painted truth.\"",
    en: "\"In a world cluttered by noise, I believe that art is the only pure thing left. It doesn't originate from the marketplace or the passing trend. It is its own — a genuine expression, a raw feeling, a painted truth.\"",
  },
  "manifest.p2": {
    sv: "\"My truth is that I paint the stories of women, my daughters in particular. Knowing that they stand in a lineage of women who are and were unheard, dismissed and granted the least power in both past and present societies. The heavy weight of this ancestral burden stops with us.\"",
    en: "\"My truth is that I paint the stories of women, my daughters in particular. Knowing that they stand in a lineage of women who are and were unheard, dismissed and granted the least power in both past and present societies. The heavy weight of this ancestral burden stops with us.\"",
  },
  "manifest.p3": {
    sv: "\"My paintings are a beautiful disguise of quiet defiance on their behalf. As a mother artist, my goal is to amplify their voices. The future is surely female. With much love,\"",
    en: "\"My paintings are a beautiful disguise of quiet defiance on their behalf. As a mother artist, my goal is to amplify their voices. The future is surely female. With much love,\"",
  },

  // OTHER WORKS
  "other.eyebrow": { sv: "Mer ur samlingen", en: "More from the collection" },
  "other.h2": { sv: "Andra utvalda verk", en: "Other featured works" },

  // BUY CTA
  "buy.eyebrow": { sv: "Shopen", en: "The shop" },
  "buy.h2": { sv: "Utvalda verk", en: "Selected works" },
  "buy.p": {
    sv: "Posters och plexiglastryck i presentlåda. Kort och Klarna via Stripe. Fler verk och format tillkommer löpande.",
    en: "Posters and plexiglass prints in gift box. Card and Klarna via Stripe. More works and formats are added continuously.",
  },
  "buy.cta": { sv: "Till shopen →", en: "To the shop →" },

  // SAMARBETEN / PRESS
  "collab.eyebrow": { sv: "Samarbeten & forskning", en: "Collaborations & research" },
  "collab.h2": { sv: "När konsten möter akademin", en: "When art meets academia" },
  "collab.pub": { sv: "Publicerat i Sage Journals · 2024", en: "Published in Sage Journals · 2024" },
  "collab.readMore": { sv: "Läs hela publikationen →", en: "Read the full publication →" },
  "collab.coauthor": { sv: "Medförfattare", en: "Co-author" },
  "collab.work": { sv: "Verket som diskuteras", en: "The work discussed" },

  // KONTAKT
  "contact.eyebrow": { sv: "Kontakt", en: "Contact" },
  "contact.h2": { sv: "För gallery-bokningar & konstvisningar", en: "For gallery bookings & art viewings" },
  "contact.p": {
    sv: "Vi pratar både svenska och engelska. I would love to hear from you — hör av dig så svarar vi inom 1–2 dagar.",
    en: "We speak both Swedish and English. I would love to hear from you — reach out and we'll respond within 1–2 days.",
  },
  "contact.curator": { sv: "Curator", en: "Curator" },
  "contact.curatorHint": { sv: "Bokningar · utställningar · samarbeten", en: "Bookings · exhibitions · collaborations" },
  "contact.artist": { sv: "Konstnären", en: "The artist" },
  "contact.artistHint": { sv: "Artist talks · konstvisningar · personlig kontakt", en: "Artist talks · art viewings · personal contact" },
  "contact.buyEyebrow": { sv: "Vill du köpa ett verk?", en: "Want to buy a work?" },
  "contact.buyH": { sv: "Köp sker direkt via shopen", en: "Purchase happens directly via the shop" },
  "contact.buyP": {
    sv: "Poster och plexiglastryck. Trygg betalning med kort eller Klarna via Stripe.",
    en: "Poster and plexiglass print. Secure payment with card or Klarna via Stripe.",
  },
  "contact.buyCta": { sv: "Till shopen →", en: "To the shop →" },

  // GALLERI PAGE
  "galleri.eyebrow": { sv: "Shop", en: "Shop" },
  "galleri.h1": { sv: "Verken — direkt från konstnären", en: "The works — direct from the artist" },
  "galleri.intro": {
    sv: "Poster eller plexiglas i presentlåda. Kort och Klarna. Hemma hos dig inom 5–10 dagar.",
    en: "Poster or plexiglass in gift box. Card and Klarna. Delivered within 5–10 days.",
  },
  "galleri.works": { sv: "verk", en: "works" },
  "galleri.trust.h1": { sv: "Äkthetsintyg ingår", en: "Certificate of authenticity included" },
  "galleri.trust.p1": { sv: "Varje verk kommer direkt från konstnärens ateljé.", en: "Every work comes straight from the artist's studio." },
  "galleri.trust.h2": { sv: "Försäkrad leverans", en: "Insured delivery" },
  "galleri.trust.p2": { sv: "Packas av professionell konsthandlare.", en: "Packed by a professional art handler." },
  "galleri.trust.h3": { sv: "Trygg betalning", en: "Secure payment" },
  "galleri.trust.p3": { sv: "Trygg betalning med kort eller Klarna via Stripe.", en: "Secure payment by card or Klarna via Stripe." },

  // UTSTÄLLNINGAR
  "exh.eyebrow": { sv: "Cecilia i världen", en: "Cecilia in the world" },
  "exh.h1": { sv: "Utställningar", en: "Exhibitions" },
  "exh.intro": {
    sv: "Från trädgården i Helsingborg till galleri-rummen i Stockholm. Här är vad som kommer — och vart vägen har gått.",
    en: "From the garden in Helsingborg to the gallery rooms in Stockholm. Here is what's coming — and where the path has been.",
  },
  "exh.upcoming.h": { sv: "Kommande & pågående", en: "Upcoming & current" },
  "exh.upcoming.empty": { sv: "Inga aktuella utställningar just nu", en: "No current exhibitions at the moment" },
  "exh.upcoming.emptyP": {
    sv: "Cecilia förbereder för nästa visning. Vill du boka? Kontakta curator",
    en: "Cecilia is preparing for the next showing. Want to book? Contact curator",
  },
  "exh.past.h": { sv: "Tidigare utställningar", en: "Past exhibitions" },
  "exh.past.total": { sv: "totalt", en: "in total" },
  "exh.badgeCurrent": { sv: "Pågående", en: "Current" },
  "exh.badgeUpcoming": { sv: "Kommande", en: "Upcoming" },
  "exh.bookH": { sv: "Vill du boka en utställning?", en: "Want to book an exhibition?" },
  "exh.bookP": { sv: "Cecilia visar i galleri-rum, kulturhus och utomhus.", en: "Cecilia exhibits in gallery rooms, cultural venues and outdoors." },

  // INTERVJU
  "interview.eyebrow": { sv: "Intervju", en: "Interview" },
  "interview.h1part1": { sv: "Samtal med", en: "Conversation with" },
  "interview.intro": {
    sv: "Om feminin kraft, förfädernas minne och varför hon ställer ut sin konst i trädgårdar på kvällen.",
    en: "On feminine power, ancestral memory and why she exhibits her art in gardens at night.",
  },

  // FOOTER
  "footer.tagline": {
    sv: "Storskaliga akrylmålningar om feminin kraft, förfädernas minne och berättelsens återtagande.",
    en: "Large-scale acrylic paintings on feminine power, ancestral memory and the reclamation of narrative.",
  },
  "footer.site": { sv: "Sajten", en: "The site" },
  "footer.contact": { sv: "Kontakt", en: "Contact" },
  "footer.curator": { sv: "Curator — Magnus Florin", en: "Curator — Magnus Florin" },
  "footer.artist": { sv: "Konstnären — Cecilia", en: "The artist — Cecilia" },
  "footer.rights": { sv: "Alla rättigheter förbehållna.", en: "All rights reserved." },
  "footer.lang": { sv: "Vi pratar svenska och engelska.", en: "We speak Swedish and English." },
  "footer.terms": { sv: "Köpvillkor", en: "Terms & Conditions" },
  "footer.privacy": { sv: "Integritetspolicy", en: "Privacy Policy" },

  // CART
  "cart.h1": { sv: "Din kundvagn", en: "Your cart" },
  "cart.empty.h": { sv: "Kundvagnen är tom", en: "Your cart is empty" },
  "cart.empty.p": { sv: "Bläddra bland verken och hitta ditt.", en: "Browse the gallery to find a work." },
  "cart.empty.cta": { sv: "Till shopen", en: "To the shop" },
  "cart.clear": { sv: "Töm kundvagn", en: "Clear cart" },
  "cart.totalVat": { sv: "Totalt inkl. moms", en: "Total incl. VAT" },
  "cart.checkout": { sv: "Till kassan", en: "Checkout" },
  "cart.checkoutLoading": { sv: "Skickar till betalning…", en: "Sending to payment…" },
  "cart.perUnit": { sv: "kr/st", en: "kr/each" },
  "cart.error.generic": { sv: "Något gick fel", en: "Something went wrong" },
  "cart.error.stripe": {
    sv: "Betalningen kunde inte startas just nu. Försök igen eller mejla oss.",
    en: "Payment could not be started right now. Please try again or email us.",
  },

  // PRODUCT CARD
  "card.from": { sv: "Från", en: "From" },
  "card.soldOut": { sv: "Slutsåld", en: "Sold out" },
  "card.badge.bestseller": { sv: "Bästsäljare", en: "Bestseller" },
  "card.badge.nyhet": { sv: "Nyhet", en: "New" },
  "card.badge.unik": { sv: "Unik", en: "Unique" },
  "card.badge.rea": { sv: "Rea", en: "Sale" },

  // FORMAT PICKER + ADD TO CART
  "format.pick": { sv: "Välj format", en: "Choose format" },
  "cart.add": { sv: "Lägg i kundvagn", en: "Add to cart" },
  "cart.added": { sv: "Tillagd ✓", en: "Added ✓" },
  "footer.cookieSettings": { sv: "Cookie-inställningar", en: "Cookie settings" },
  "cart.removeLine": { sv: "Ta bort", en: "Remove" },
  "cart.shippingNote": { sv: "Frakt 149 kr tillkommer i kassan.", en: "Shipping 149 kr is added at checkout." },
  "drawer.viewFull": { sv: "Visa varukorgen", en: "View basket" },
  "drawer.close": { sv: "Stäng", en: "Close" },

  // PRODUCT PAGE
  "product.back": { sv: "← Tillbaka till shopen", en: "← Back to the shop" },
  "product.trust.1": { sv: "Tryckt och godkänt av konstnären själv", en: "Printed and approved by the artist herself" },
  "product.trust.2": { sv: "Försäkrad leverans inom Sverige", en: "Insured delivery within Sweden" },
  "product.trust.3": { sv: "14 dagars ångerrätt enligt distansavtalslagen (se köpvillkor)", en: "14-day right of withdrawal under Swedish law (see terms)" },
  "product.trust.4": { sv: "Betala med kort eller Klarna", en: "Pay with card or Klarna" },
  "product.video": { sv: "Verket på plexiglas", en: "The artwork on plexiglass" },
  "product.poster": { sv: "Som poster", en: "As poster" },
  "product.original.heading": { sv: "Om originalverket", en: "About the original painting" },
  "product.readMore": { sv: "Läs mer", en: "Read more" },
  "product.readLess": { sv: "Visa mindre", en: "Show less" },
  "product.original.rule": {
    sv: "Originalverk säljs endast vid utställningstillfälle, med letter of authentication.",
    en: "Original works are sold only at exhibitions, with a letter of authentication.",
  },
  "exh.originalRule": {
    sv: "Originalverk säljs endast vid utställningstillfälle, med letter of authentication.",
    en: "Original works are sold only at exhibitions, with a letter of authentication.",
  },

  // INTERVJU CTA
  "interview.moreH": { sv: "Vill du veta mer?", en: "Want to know more?" },
  "interview.moreP": {
    sv: "Boka en artist talk eller konstvisning hos Cecilia.",
    en: "Book an artist talk or art viewing with Cecilia.",
  },
};

export function t(key: string, lang: Lang): string {
  return dict[key]?.[lang] ?? key;
}
