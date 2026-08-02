"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-ink/10 mt-12 bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <p className="font-serif text-2xl">Constcollection by Cecilia K<span className="text-accent">.</span></p>
            <p className="text-sm text-paper/70 mt-3 leading-relaxed">{t("footer.tagline")}</p>
            <p className="text-xs text-paper/50 mt-4">
              Cecilia Kristoffersson<br/>
              Helsingborg
            </p>
            <SocialIcons className="mt-4 -ml-2 [&_a]:text-paper/60 [&_a:hover]:text-accent [&_a:hover]:bg-paper/10" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-paper/60">{t("footer.site")}</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/" className="hover:text-accent">{t("nav.home")}</Link></li>
              <li><Link href="/utstallningar" className="hover:text-accent">{t("nav.exhibitions")}</Link></li>
              <li><Link href="/galleri" className="hover:text-accent">{t("nav.gallery")}</Link></li>
              <li><Link href="/intervju" className="hover:text-accent">{t("nav.interview")}</Link></li>
              <li><Link href="/kontakt" className="hover:text-accent">{t("footer.contact")}</Link></li>
              <li className="pt-2 border-t border-paper/15 mt-2"><Link href="/kopvillkor" className="hover:text-accent text-paper/70">{t("footer.terms")}</Link></li>
              <li><Link href="/integritet" className="hover:text-accent text-paper/70">{t("footer.privacy")}</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-paper/60">{t("footer.contact")}</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <span className="block text-paper/60 text-xs">{t("footer.curator")}</span>
                <a href="mailto:k.magnus.florin@gmail.com" className="hover:text-accent break-all">
                  k.magnus.florin@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-paper/60 text-xs">{t("footer.artist")}</span>
                <a href="mailto:cecilia.kristoffersson71@gmail.com" className="hover:text-accent break-all">
                  cecilia.kristoffersson71@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+46708734215" className="hover:text-accent">
                  +46 708 73 42 15
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-paper/15 flex flex-col md:flex-row justify-between gap-3 text-xs text-paper/50">
          <p>© {new Date().getFullYear()} Constcollection by Cecilia K. {t("footer.rights")}</p>
          <p>{t("footer.lang")}</p>
        </div>
      </div>
    </footer>
  );
}
