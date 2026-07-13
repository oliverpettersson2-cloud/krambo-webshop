import { notFound } from "next/navigation";
import Link from "next/link";
import { getProduct, products } from "@/lib/products";
import FormatPicker from "@/components/FormatPicker";
import ProductImage from "@/components/ProductImage";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <Link href="/" className="text-sm text-ink/60 hover:text-ink">← Tillbaka till galleriet</Link>
      <div className="grid md:grid-cols-2 gap-12 mt-6">
        <ProductImage src={product.image} alt={product.name} />
        <div>
          <p className="text-xs uppercase tracking-wider text-ink/50">Cecilia Kristoffersson · {product.year}</p>
          <h1 className="text-3xl md:text-4xl font-semibold mt-2 italic">{product.name}</h1>
          <p className="text-ink/70 mt-6 leading-relaxed">{product.longDescription}</p>

          <div className="mt-8">
            <FormatPicker product={product} />
          </div>

          <ul className="mt-10 space-y-2 text-sm text-ink/60 border-t border-ink/10 pt-6">
            <li>✓ Äkthetsintyg signerat av konstnären</li>
            <li>✓ Försäkrad leverans inom Sverige</li>
            <li>✓ 14 dagars ångerrätt enligt distansköplagen</li>
            <li>✓ Betala med kort eller Klarna</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
