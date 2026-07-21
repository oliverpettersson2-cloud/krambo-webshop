"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

export default function ProductImage({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label={`Zooma in ${alt}`}
        className="relative bg-white rounded-2xl overflow-hidden w-full cursor-zoom-in group"
      >
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={2000}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500"
          priority
        />
        <div className="absolute top-3 right-3 bg-ink/70 backdrop-blur-sm text-paper rounded-full w-9 h-9 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition">
          🔍
        </div>
      </button>
      {open && <Lightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  );
}
