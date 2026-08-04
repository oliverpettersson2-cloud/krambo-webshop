import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import { LanguageProvider } from "@/components/LanguageProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://constcollection.com"),
  title: "Const Collection Art by Cecilia K. — Konsttryck & plexiglas",
  description:
    "Cecilia Kristoffersson — samtida konstnär. Fine art print, plexiglastryck och postrar direkt från konstnären.",
  openGraph: {
    title: "Const Collection Art by Cecilia K. — I am a mother artist.",
    description:
      "Storskaliga illuminerade akrylmålningar om feminin kraft, förfädernas minne och berättelsens återtagande.",
    url: "https://constcollection.com",
    siteName: "Const Collection Art by Cecilia K.",
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Const Collection Art by Cecilia K. — I am a mother artist.",
    description:
      "Storskaliga illuminerade akrylmålningar. Poster, fine art print, plexiglas — direkt från konstnären.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <LanguageProvider>
          <CartProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieBanner />
          </CartProvider>
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
