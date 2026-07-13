import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Art by Cecilia K. — Konsttryck & plexiglas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "linear-gradient(135deg, #1a1a1a 0%, #3a1a20 50%, #8b1a2b 100%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
          <div
            style={{
              fontSize: 28,
              color: "#ff8a96",
              textTransform: "uppercase",
              letterSpacing: 6,
              fontWeight: 600,
            }}
          >
            Art by Cecilia K.
          </div>
        </div>
        <div
          style={{
            fontSize: 92,
            color: "#faf7f2",
            fontFamily: "serif",
            fontStyle: "italic",
            lineHeight: 1,
            marginTop: 16,
          }}
        >
          I am a mother artist.
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#faf7f2",
            opacity: 0.85,
            marginTop: 24,
            maxWidth: 900,
            lineHeight: 1.3,
          }}
        >
          Storskaliga illuminerade akrylmålningar. Poster, fine art print, canvas, plexiglas — direkt från konstnären.
        </div>
        <div
          style={{
            fontSize: 20,
            color: "#faf7f2",
            opacity: 0.55,
            marginTop: 32,
          }}
        >
          constcollection.com
        </div>
      </div>
    ),
    { ...size }
  );
}
