"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/components/LanguageProvider";

export default function NotFound() {
  const { lang } = useLang();
  const isEn = lang === "en";

  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image src="/art/lilith-i.jpg" alt="" fill className="object-cover opacity-30" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-paper via-paper/85 to-paper/50" />
      </div>
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <p className="text-accent uppercase tracking-[0.3em] text-xs font-semibold">404</p>
        <h1 className="font-serif text-5xl md:text-7xl mt-4 leading-[1.05]">
          {isEn ? (
            <>The <em>painting</em> you're looking for isn't here.</>
          ) : (
            <>Det <em>verk</em> du letar efter finns inte här.</>
          )}
        </h1>
        <p className="mt-6 text-ink/70 leading-relaxed max-w-lg mx-auto">
          {isEn
            ? "The page may have moved, been removed — or perhaps it never existed. Let's find you back to the gallery."
            : "Sidan kan ha flyttats, tagits bort — eller så fanns den aldrig. Vi ledsagar dig tillbaka till galleriet."}
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <Link href="/" className="px-7 py-3 bg-ink text-paper rounded-full font-medium hover:bg-accent transition">
            {isEn ? "Home" : "Hem"}
          </Link>
          <Link href="/galleri" className="px-7 py-3 border border-ink/20 rounded-full font-medium hover:bg-ink hover:text-paper transition">
            {isEn ? "The gallery" : "Galleriet"}
          </Link>
        </div>
      </div>
    </div>
  );
}
