import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";
import { fromPrice } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const min = fromPrice(product);
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block bg-white rounded-xl overflow-hidden border border-ink/10 hover:border-ink/30 transition"
    >
      <div className="relative aspect-square bg-ink/5">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {!product.inStock && (
          <span className="absolute top-3 left-3 text-xs bg-ink text-paper px-2 py-1 rounded-full">
            Slutsåld
          </span>
        )}
        {product.inStock && product.badge && (
          <span className={`absolute top-3 left-3 text-xs px-2 py-1 rounded-full font-medium ${
            product.badge === "bestseller" ? "bg-accent text-white" :
            product.badge === "nyhet" ? "bg-paper text-ink border border-ink/15" :
            product.badge === "unik" ? "bg-ink text-paper" :
            "bg-red-600 text-white"
          }`}>
            {product.badge === "bestseller" ? "Bästsäljare" : product.badge === "nyhet" ? "Nyhet" : product.badge === "unik" ? "Unik" : "Rea"}
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs text-ink/50 uppercase tracking-wider">{product.year}</p>
        <h3 className="font-serif text-lg mt-1 italic">{product.name}</h3>
        <p className="text-sm text-ink/60 mt-1 line-clamp-1">{product.description}</p>
        <p className="mt-3 font-semibold">Från {min.toLocaleString("sv-SE")} kr</p>
      </div>
    </Link>
  );
}
