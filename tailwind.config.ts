import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF8",
        raised: "#F2F1EC",
        ink: "#15181D",
        "ink-soft": "#565F6E",
        "ink-faint": "#8A93A1",
        line: "#E3E1DA",
        accent: {
          DEFAULT: "#4338CA",
          bright: "#5B52E8",
          soft: "#EEEDFB",
        },
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jbmono)", "monospace"],
      },
      maxWidth: {
        content: "40rem",
        wide: "64rem",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        rise: "rise 0.6s ease-out forwards",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
