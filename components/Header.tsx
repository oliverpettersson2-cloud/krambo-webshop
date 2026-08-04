"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "./CartContext";
import { useLang } from "./LanguageProvider";
import LanguageToggle from "./LanguageToggle";
import SocialIcons from "./SocialIcons";
import CartDrawer from "./CartDrawer";

export default function Header() {
  const { count } = useCart();
  const { t } = useLang();
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Stäng mobilmenyn vid sidbyte
  useEffect(() => setMenuOpen(false), [pathname]);

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/utstallningar", label: t("nav.exhibitions") },
    { href: "/shop", label: t("nav.gallery") },
    { href: "/intervju", label: t("nav.interview") },
  ];

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="border-b border-ink/10 bg-paper/95 sticky top-0 z-20 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 min-h-16 py-2 flex items-center justify-between gap-3">
        <div className="shrink min-w-0">
          <Link href="/" className="font-serif font-medium tracking-wide text-base md:text-lg block truncate">
            Const Collection Art by Cecilia K<span className="text-accent">.</span>
          </Link>
          {/* Sociala ikoner under namnet — endast desktop; mobilen har dem i menyn */}
          <SocialIcons compact className="hidden md:flex justify-center mt-0.5" />
        </div>

        {/* Desktop-nav */}
        <nav className="hidden md:flex items-center gap-2 text-sm flex-1 justify-center font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`px-4 py-2 rounded-md transition border ${
                isActive(item.href)
                  ? "bg-ink text-paper border-ink"
                  : "border-ink/15 hover:bg-ink hover:text-paper hover:border-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <div className="hidden md:block">
            <LanguageToggle />
          </div>

          {/* Kundvagn: ikon på mobil, ikon + text på större skärmar */}
          <button
            onClick={() => setDrawerOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={drawerOpen}
            aria-label={t("nav.cart")}
            className="relative text-sm px-2.5 sm:px-4 py-2 rounded-md transition font-medium flex items-center gap-2 border border-accent text-accent hover:bg-accent hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M4.5 6.5h2l1.6 9.2a1.5 1.5 0 0 0 1.48 1.24h6.9a1.5 1.5 0 0 0 1.46-1.16L19.5 9h-11" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="10" cy="19.6" r="1.15" fill="currentColor" stroke="none" />
              <circle cx="16.6" cy="19.6" r="1.15" fill="currentColor" stroke="none" />
            </svg>
            <span className="hidden sm:inline">{t("nav.cart")}</span>
            {count > 0 && (
              <span className="inline-flex items-center justify-center text-xs rounded-full w-5 h-5 border bg-accent text-white border-accent">
                {count}
              </span>
            )}
          </button>

          {/* Hamburgare — bara mobil/surfplatta */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t("drawer.close") : "Meny"}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-md border border-ink/15"
          >
            <span className={`block w-5 h-[2px] bg-ink transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block w-5 h-[2px] bg-ink transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[2px] bg-ink transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobilmeny */}
      {menuOpen && (
        <nav className="md:hidden border-t border-ink/10 bg-paper">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`block px-6 py-3.5 text-base font-medium border-b border-ink/5 ${
                isActive(item.href) ? "text-accent" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex items-center justify-between px-6 py-3">
            <LanguageToggle />
            <SocialIcons />
          </div>
        </nav>
      )}

      <CartDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}
