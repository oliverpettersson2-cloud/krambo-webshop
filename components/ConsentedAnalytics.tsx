"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const STORAGE_KEY = "webshop_cookie_consent_v1";

// Analys laddas först när besökaren aktivt accepterat — integritetspolicyn
// och cookie-bannern lovar att ingen tredjepartsspårning sker utan samtycke.
export default function ConsentedAnalytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const read = () => {
      try {
        setConsented(localStorage.getItem(STORAGE_KEY) === "accepted");
      } catch {
        setConsented(false);
      }
    };
    read();
    // Fångar valet direkt när bannern klickas, utan omladdning
    window.addEventListener("cookie-consent-changed", read);
    window.addEventListener("storage", read);
    return () => {
      window.removeEventListener("cookie-consent-changed", read);
      window.removeEventListener("storage", read);
    };
  }, []);

  if (!consented) return null;

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
