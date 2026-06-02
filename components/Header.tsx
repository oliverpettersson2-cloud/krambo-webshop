"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "./CartContext";

const navItems = [
  { href: "/", label: "Hem" },
  { href: "/utstallningar", label: "Utställningar" },
  { href: "/galleri", label: "Galleri" },
  { href: "/intervju", label: "Intervju" },
];

export default function Header() {
  const { count } = useCart();
  const pathname = usePathname();

  return (
    <header className="border-b border-ink/10 bg-paper/95 sticky top-0 z-20 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <Link href="/" className="font-serif font-medium tracking-wide text-xl shrink-0">
          Art by Cecilia K<span className="text-accent">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2 text-sm flex-1 justify-center font-medium">
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`px-4 py-2 rounded-md transition border ${
                  isActive
                    ? "bg-ink text-paper border-ink"
                    : "border-ink/15 hover:bg-ink hover:text-paper hover:border-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/cart"
          aria-current={pathname === "/cart" ? "page" : undefined}
          className={`relative text-sm shrink-0 px-4 py-2 rounded-md transition font-medium flex items-center gap-2 border ${
            pathname === "/cart"
              ? "bg-accent text-white border-accent"
              : "border-accent text-accent hover:bg-accent hover:text-white"
          }`}
        >
          <span>Kundvagn</span>
          {count > 0 && (
            <span className={`inline-flex items-center justify-center text-xs rounded-full w-5 h-5 border ${
              pathname === "/cart" ? "bg-white text-accent border-white" : "bg-accent text-white border-accent"
            }`}>
              {count}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
