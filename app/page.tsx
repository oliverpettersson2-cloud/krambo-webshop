import { products, getCategories } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

function slugifyCat(c: string) {
  return c.toLowerCase().replace(/\s*&\s*/g, "-").replace(/\s+/g, "-").replace(/[åä]/g, "a").replace(/ö/g, "o");
}

export default function Home() {
  const categories = getCategories();
  return (
    <div>
      <section className="bg-ink text-paper">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
            Saker som håller. <span className="text-accent">Tillverkare som syns.</span>
          </h1>
          <p className="mt-6 max-w-xl text-paper/70 text-lg">
            En kurerad butik för noggrant utvalda saker till hemmet, köket och vardagen.
            Hantverk framför hype.
          </p>
          <a
            href={`#${slugifyCat(categories[0])}`}
            className="inline-block mt-8 px-6 py-3 bg-accent text-white rounded-full font-medium hover:bg-paper hover:text-ink transition"
          >
            Bläddra i butiken
          </a>
        </div>
      </section>

      {categories.map((cat) => {
        const items = products.filter((p) => p.category === cat);
        return (
          <section
            key={cat}
            id={slugifyCat(cat)}
            className="max-w-6xl mx-auto px-6 py-14 scroll-mt-20"
          >
            <div className="flex items-end justify-between mb-8 border-b border-ink/10 pb-3">
              <h2 className="text-2xl font-semibold">{cat}</h2>
              <p className="text-sm text-ink/50">{items.length} {items.length === 1 ? "produkt" : "produkter"}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {items.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
