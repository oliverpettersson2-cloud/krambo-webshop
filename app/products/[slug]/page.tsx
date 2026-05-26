import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProduct, products } from "@/lib/products";
import AddToCartButton from "@/components/AddToCartButton";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <Link href="/" className="text-sm text-ink/60 hover:text-ink">← Tillbaka till butiken</Link>
      <div className="grid md:grid-cols-2 gap-12 mt-6">
        <div className="relative aspect-square bg-ink/5 rounded-2xl overflow-hidden">
          <Image src={product.image} alt={product.name} fill sizes="50vw" className="object-cover" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-ink/50">{product.category}</p>
          <h1 className="text-3xl md:text-4xl font-semibold mt-2">{product.name}</h1>
          <p className="text-2xl font-semibold mt-4">
            {product.priceSEK.toLocaleString("sv-SE")} kr
          </p>
          <p className="text-ink/70 mt-6 leading-relaxed">{product.longDescription}</p>
          <div className="mt-8">
            <AddToCartButton id={product.id} disabled={!product.inStock} />
          </div>
          <ul className="mt-10 space-y-2 text-sm text-ink/60">
            <li>✓ Fri frakt över 500 kr</li>
            <li>✓ 14 dagars ångerrätt</li>
            <li>✓ Betala med kort, Klarna eller Swish</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
