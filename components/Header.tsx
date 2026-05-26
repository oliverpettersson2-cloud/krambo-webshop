"use client";

import Link from "next/link";
import { useCart } from "./CartContext";
import { getCategories } from "@/lib/products";

function slugifyCat(c: string) {
  return c.toLowerCase().replace(/\s*&\s*/g, "-").replace(/\s+/g, "-").replace(/[åä]/g, "a").replace(/ö/g, "o");
}

export default function Header() {
  const { count } = useCart();
  const categories = getCategories();
  return (
    <header className="border-b border-ink/10 bg-paper/95 sticky top-0 z-20 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="font-semibold tracking-tight text-xl shrink-0">
          Krambo<span className="text-accent">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm flex-1 justify-center">
          {categories.map((c) => (
            <Link
              key={c}
              href={`/#${slugifyCat(c)}`}
              className="hover:text-accent transition"
            >
              {c}
            </Link>
          ))}
        </nav>
        <Link href="/cart" className="relative text-sm hover:text-accent flex items-center gap-2 shrink-0">
          <span>Kundvagn</span>
          {count > 0 && (
            <span className="inline-flex items-center justify-center text-xs bg-accent text-white rounded-full w-5 h-5">
              {count}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
