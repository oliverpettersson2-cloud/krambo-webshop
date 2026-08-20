"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Vercel Analytics är cookiefri och lagrar inget på besökarens enhet —
// den får därför laddas utan samtycke (ingen cookie-gate behövs).
// Individer kan inte identifieras; endast anonyma sidvisningar räknas.
export default function ConsentedAnalytics() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
