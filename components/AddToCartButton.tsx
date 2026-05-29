"use client";

import { useState } from "react";
import { useCart } from "./CartContext";
import type { Product, Format } from "@/lib/products";

export default function AddToCartButton({
  product,
  format,
}: {
  product: Product;
  format: Format;
}) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const isUnique = format.id === "original";
  const disabled = !product.inStock;

  function handleClick() {
    add(product.id, format.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className="w-full md:w-auto px-8 py-4 bg-ink text-paper rounded-full font-medium hover:bg-accent transition disabled:bg-ink/30 disabled:cursor-not-allowed"
    >
      {disabled
        ? "Slutsåld"
        : added
        ? "Tillagd ✓"
        : isUnique
        ? `Köp originalet — ${format.priceSEK.toLocaleString("sv-SE")} kr`
        : `Lägg i kundvagn — ${format.priceSEK.toLocaleString("sv-SE")} kr`}
    </button>
  );
}
