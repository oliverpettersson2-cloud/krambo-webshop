export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  priceSEK: number;
  image: string;
  category: string;
  inStock: boolean;
  badge?: "bestseller" | "nyhet" | "rea";
};

export const products: Product[] = [
  {
    id: "p_001",
    slug: "klassisk-laderplanbok",
    name: "Klassisk läderplånbok",
    description: "Handsydd plånbok i italienskt läder.",
    longDescription:
      "Tidlös plånbok i fullnarvigt italienskt läder. Plats för 8 kort, sedelfack och myntfack. Åldras vackert.",
    priceSEK: 1290,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800",
    category: "Accessoarer",
    inStock: true,
    badge: "bestseller",
  },
  {
    id: "p_002",
    slug: "trahantverk-skarbrade",
    name: "Skärbräda i ek",
    description: "Massiv ekskärbräda, oljad finish.",
    longDescription:
      "Skärbräda i svensk ek, oljad med livsmedelsgodkänd linolja. 40×25×3 cm. Tål både kniv och tid.",
    priceSEK: 690,
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800",
    category: "Hem & kök",
    inStock: true,
    badge: "nyhet",
  },
  {
    id: "p_003",
    slug: "espressokopp-stengods",
    name: "Espressokoppar (2-pack)",
    description: "Handgjorda koppar i stengods.",
    longDescription:
      "Två koppar i stengods, drejade i Höganäs. 8 cl. Diskmaskinssäkra. Varje par är unikt.",
    priceSEK: 450,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800",
    category: "Hem & kök",
    inStock: true,
  },
  {
    id: "p_004",
    slug: "linnehandduk-set",
    name: "Linnehandukar (3-pack)",
    description: "Tvättade linnehandukar.",
    longDescription:
      "Tre handukar i 100% europeiskt linne. Förtvättat, mjukt från start. 50×70 cm. Naturvit, salvia, grafit.",
    priceSEK: 590,
    image: "https://images.unsplash.com/photo-1583845112203-29329902332e?w=800",
    category: "Hem & kök",
    inStock: true,
  },
  {
    id: "p_005",
    slug: "vaxljus-bivax",
    name: "Bivaxljus (4-pack)",
    description: "Handdoppade ljus i ren bivax.",
    longDescription:
      "Fyra ljus, handdoppade i 100% svensk bivax. Brinner ca 8 timmar per ljus. Doftar svagt av honung.",
    priceSEK: 320,
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800",
    category: "Inredning",
    inStock: true,
  },
  {
    id: "p_006",
    slug: "anteckningsbok-laderomslag",
    name: "Anteckningsbok m. läderomslag",
    description: "A5 med refill, läderomslag.",
    longDescription:
      "A5-anteckningsbok med utbytbar refill, omslag i vegetabiliskt garvat läder. 192 prickade sidor, premiumpapper.",
    priceSEK: 790,
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800",
    category: "Kontor",
    inStock: true,
  },
  {
    id: "p_007",
    slug: "ullpläd-grafit",
    name: "Ullpläd, grafit",
    description: "Lammull, vävd i Sverige.",
    longDescription:
      "Pläd i 100% lammull från svenska gårdar, vävd i Småland. 130×180 cm. Frans i båda kortändarna.",
    priceSEK: 1490,
    image: "https://images.unsplash.com/photo-1600369671236-e74521d4b6ad?w=800",
    category: "Inredning",
    inStock: true,
  },
  {
    id: "p_008",
    slug: "kokskniv-japansk",
    name: "Japansk kockkniv 20cm",
    description: "Smidd i Sakai, VG-10 stål.",
    longDescription:
      "Gyuto-kniv smidd i Sakai, Japan. 67-lager damaskusstål med VG-10 kärna. Handtag i magnolieträ.",
    priceSEK: 2890,
    image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=800",
    category: "Hem & kök",
    inStock: false,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getCategories(): string[] {
  return Array.from(new Set(products.map((p) => p.category)));
}
