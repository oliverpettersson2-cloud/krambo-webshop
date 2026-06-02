"use client";

import Link from "next/link";
import { useCart } from "./CartContext";

export default function Header() {
  const { count } = useCart();
  return (
    <header className="border-b border-ink/10 bg-paper/95 sticky top-0 z-20 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="font-serif font-medium tracking-wide text-xl shrink-0">
          Art by Cecilia K<span className="text-accent">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-3 text-sm flex-1 justify-center font-medium">
          <Link href="/" className="px-4 py-2 border border-ink/15 rounded-md hover:bg-ink hover:text-paper hover:border-ink transition">
            Hem
          </Link>
          <Link href="/utstallningar" className="px-4 py-2 border border-ink/15 rounded-md hover:bg-ink hover:text-paper hover:border-ink transition">
            Utställningar
          </Link>
          <Link href="/galleri" className="px-4 py-2 border border-ink/15 rounded-md hover:bg-ink hover:text-paper hover:border-ink transition">
            Galleri
          </Link>
        </nav>
        <Link
          href="/cart"
          className="relative text-sm shrink-0 px-4 py-2 border border-accent text-accent rounded-md hover:bg-accent hover:text-white transition font-medium flex items-center gap-2"
        >
          <span>Kundvagn</span>
          {count > 0 && (
            <span className="inline-flex items-center justify-center text-xs bg-accent text-white rounded-full w-5 h-5 border border-accent">
              {count}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
