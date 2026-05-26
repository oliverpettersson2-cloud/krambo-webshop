"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

export default function SuccessPage() {
  const { clear } = useCart();
  useEffect(() => { clear(); }, [clear]);

  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-white text-3xl">
        ✓
      </div>
      <h1 className="text-3xl md:text-4xl font-semibold mt-6">Tack för din beställning!</h1>
      <p className="text-ink/60 mt-4 leading-relaxed">
        Vi har skickat en bekräftelse till din e-post. Paketet är på väg inom 2-4 arbetsdagar.
      </p>
      <Link
        href="/"
        className="inline-block mt-8 px-6 py-3 bg-ink text-paper rounded-full font-medium hover:bg-accent transition"
      >
        Fortsätt handla
      </Link>
    </div>
  );
}
