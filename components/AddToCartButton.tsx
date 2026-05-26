"use client";

import { useState } from "react";
import { useCart } from "./CartContext";

export default function AddToCartButton({ id, disabled }: { id: string; disabled?: boolean }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    add(id);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className="w-full md:w-auto px-6 py-3 bg-ink text-paper rounded-full font-medium hover:bg-accent transition disabled:bg-ink/30 disabled:cursor-not-allowed"
    >
      {disabled ? "Slutsåld" : added ? "Tillagd ✓" : "Lägg i kundvagn"}
    </button>
  );
}
