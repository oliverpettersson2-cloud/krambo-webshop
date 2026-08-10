"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";

export default function ProductImage({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label={`Zooma in ${alt}`}
        className="relative bg-white rounded-2xl overflow-hidden w-full cursor-zoom-in group block"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-ink/70 backdrop-blur-sm text-paper rounded-full w-9 h-9 flex items-center justify-center text-xs opacity-70 md:opacity-0 md:group-hover:opacity-100 transition">
          🔍
        </div>
      </button>
      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  );
}
