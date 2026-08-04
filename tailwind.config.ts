import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1a1a1a",
        paper: "#faf7f2",
        accent: "#8b1a2b",       // vinröd — matchar Cecilias färgvärld
        accentSoft: "#c64a5a",   // ljusare vinröd för hover
        gold: "#d9a441",         // varm guld — accentfärg på mörka sektioner (belysta ramar)
        warm: "#e8dcc4",         // varmt sandfärgad för sektioner
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "Cambria", "serif"],
        display: ["var(--font-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
