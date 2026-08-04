import { social } from "@/lib/social";

const ICONS: { key: keyof typeof social; label: string; path: string }[] = [
  {
    key: "facebook",
    label: "Facebook",
    path: "M13.5 9H15V6.5h-1.5c-1.93 0-3.5 1.57-3.5 3.5v1.5H8V14h2v5.5h2.5V14h2l.5-2.5h-2.5V10c0-.55.45-1 1-1z",
  },
  {
    key: "instagram",
    label: "Instagram",
    path: "M12 8.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5zm0 5.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5zM16.25 8.6a.85.85 0 1 1-1.7 0 .85.85 0 0 1 1.7 0zM12 5.5c-1.77 0-1.99.01-2.68.04-.69.03-1.16.14-1.58.3-.43.17-.79.39-1.15.75s-.58.72-.75 1.15c-.16.42-.27.89-.3 1.58C5.51 10.01 5.5 10.23 5.5 12s.01 1.99.04 2.68c.03.69.14 1.16.3 1.58.17.43.39.79.75 1.15s.72.58 1.15.75c.42.16.89.27 1.58.3.69.03.91.04 2.68.04s1.99-.01 2.68-.04c.69-.03 1.16-.14 1.58-.3.43-.17.79-.39 1.15-.75s.58-.72.75-1.15c.16-.42.27-.89.3-1.58.03-.69.04-.91.04-2.68s-.01-1.99-.04-2.68c-.03-.69-.14-1.16-.3-1.58a3.09 3.09 0 0 0-.75-1.15 3.09 3.09 0 0 0-1.15-.75c-.42-.16-.89-.27-1.58-.3C13.99 5.51 13.77 5.5 12 5.5zm0 1.17c1.74 0 1.95.01 2.63.04.63.03.98.13 1.21.22.3.12.52.26.75.49.23.23.37.45.49.75.09.23.19.58.22 1.21.03.68.04.89.04 2.63s-.01 1.95-.04 2.63c-.03.63-.13.98-.22 1.21-.12.3-.26.52-.49.75a2.02 2.02 0 0 1-.75.49c-.23.09-.58.19-1.21.22-.68.03-.89.04-2.63.04s-1.95-.01-2.63-.04c-.63-.03-.98-.13-1.21-.22a2.02 2.02 0 0 1-.75-.49 2.02 2.02 0 0 1-.49-.75c-.09-.23-.19-.58-.22-1.21-.03-.68-.04-.89-.04-2.63s.01-1.95.04-2.63c.03-.63.13-.98.22-1.21.12-.3.26-.52.49-.75.23-.23.45-.37.75-.49.23-.09.58-.19 1.21-.22.68-.03.89-.04 2.63-.04z",
  },
  {
    key: "youtube",
    label: "YouTube",
    path: "M18.6 8.2a1.75 1.75 0 0 0-1.23-1.24C16.28 6.67 12 6.67 12 6.67s-4.28 0-5.37.29A1.75 1.75 0 0 0 5.4 8.2C5.11 9.29 5.11 12 5.11 12s0 2.71.29 3.8c.16.6.63 1.07 1.23 1.24 1.09.29 5.37.29 5.37.29s4.28 0 5.37-.29c.6-.17 1.07-.64 1.23-1.24.29-1.09.29-3.8.29-3.8s0-2.71-.29-3.8zM10.62 14.33V9.67L14.19 12l-3.57 2.33z",
  },
  {
    key: "tiktok",
    label: "TikTok",
    path: "M16.9 7.5a4.3 4.3 0 0 1-1.9-3V4h-2.6v10.3a2.35 2.35 0 1 1-2.35-2.35c.24 0 .47.04.69.1V9.4a5 5 0 0 0-.69-.05 4.95 4.95 0 1 0 4.95 4.95V9.55a6.85 6.85 0 0 0 3.7 1.08V8.05c-.63 0-1.24-.2-1.8-.55z",
  },
  {
    key: "mail",
    label: "E-post",
    path: "M5.5 7A1.5 1.5 0 0 1 7 5.5h10A1.5 1.5 0 0 1 18.5 7v10a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 17V7zm1.6.5 4.9 3.9 4.9-3.9H7.1zm9.9 1.13-4.53 3.6a.75.75 0 0 1-.94 0L7 8.63v8.37h10V8.63z",
  },
];

export default function SocialIcons({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  const box = compact ? "w-7 h-7" : "w-9 h-9";
  const glyph = compact ? "w-4 h-4" : "w-5 h-5";
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {ICONS.map((i) => {
        const icon = (
          <svg viewBox="0 0 24 24" className={glyph} fill="currentColor" aria-hidden="true">
            <path d={i.path} />
          </svg>
        );
        // Länk saknas ännu → visas som inaktiv platshållare tills kanalen aktiveras
        if (!social[i.key]) {
          return (
            <span
              key={i.key}
              aria-label={`${i.label} (kommer snart)`}
              title={`${i.label} — kommer snart`}
              className={`${box} flex items-center justify-center rounded-full text-ink/30 cursor-default`}
            >
              {icon}
            </span>
          );
        }
        return (
          <a
            key={i.key}
            href={social[i.key]}
            target={i.key === "mail" ? undefined : "_blank"}
            rel={i.key === "mail" ? undefined : "noopener noreferrer"}
            aria-label={i.label}
            className={`${box} flex items-center justify-center rounded-full text-ink/60 hover:text-accent hover:bg-ink/5 transition`}
          >
            {icon}
          </a>
        );
      })}
    </div>
  );
}
