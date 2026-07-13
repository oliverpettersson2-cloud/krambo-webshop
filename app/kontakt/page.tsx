"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/components/LanguageProvider";

export default function KontaktPage() {
  const { lang } = useLang();
  const isEn = lang === "en";
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || (isEn ? "Message via constcollection.com" : "Meddelande via constcollection.com"));
    const body = encodeURIComponent(
      `${isEn ? "From" : "Från"}: ${form.name} <${form.email}>\n\n${form.message}`
    );
    window.location.href = `mailto:cecilia@constcollection.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <Link href="/" className="text-sm text-ink/60 hover:text-accent">
        {isEn ? "← Back" : "← Tillbaka"}
      </Link>

      <h1 className="font-serif text-4xl md:text-5xl mt-6">
        {isEn ? "Contact" : "Kontakt"}
      </h1>
      <p className="text-ink/70 mt-4 leading-relaxed">
        {isEn
          ? "For gallery bookings, art talks, exhibitions or personal contact — send a message and we'll reply within 1–2 days."
          : "För gallery-bokningar, artist talks, utställningar eller personlig kontakt — skicka ett meddelande så svarar vi inom 1–2 dagar."}
      </p>

      <form onSubmit={submit} className="mt-10 space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink/70">
            {isEn ? "Name" : "Namn"}
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-2 w-full px-4 py-3 border border-ink/15 rounded-lg bg-white focus:outline-none focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink/70">
            {isEn ? "Email" : "Mailadress"}
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-2 w-full px-4 py-3 border border-ink/15 rounded-lg bg-white focus:outline-none focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-ink/70">
            {isEn ? "Subject" : "Ämne"}
          </label>
          <input
            id="subject"
            type="text"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="mt-2 w-full px-4 py-3 border border-ink/15 rounded-lg bg-white focus:outline-none focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-ink/70">
            {isEn ? "Message" : "Meddelande"}
          </label>
          <textarea
            id="message"
            required
            rows={6}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="mt-2 w-full px-4 py-3 border border-ink/15 rounded-lg bg-white focus:outline-none focus:border-accent resize-y"
          />
        </div>
        <button
          type="submit"
          className="px-7 py-3 bg-ink text-paper rounded-full font-medium hover:bg-accent transition"
        >
          {isEn ? "Send message" : "Skicka meddelande"}
        </button>
      </form>

      <div className="mt-16 border-t border-ink/10 pt-8 grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-xs uppercase tracking-widest text-ink/50">
            {isEn ? "Curator" : "Curator"}
          </p>
          <p className="font-serif text-xl mt-2">Magnus Florin</p>
          <a href="mailto:k.magnus.florin@gmail.com" className="text-sm text-accent hover:underline">
            k.magnus.florin@gmail.com
          </a>
          <a href="tel:+46708734215" className="block mt-1 text-sm text-ink/70 hover:text-ink">
            +46 708 73 42 15
          </a>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-ink/50">
            {isEn ? "The artist" : "Konstnären"}
          </p>
          <p className="font-serif text-xl mt-2">Cecilia Kristoffersson</p>
          <a href="mailto:cecilia@constcollection.com" className="text-sm text-accent hover:underline break-all">
            cecilia@constcollection.com
          </a>
        </div>
      </div>
    </div>
  );
}
