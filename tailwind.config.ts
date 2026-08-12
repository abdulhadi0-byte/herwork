import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FBF6EC",
        "paper-dim": "#F3ECDD",
        ink: "#1C1A17",
        teal: {
          DEFAULT: "#0E4B49",
          dark: "#0A3634",
          light: "#155C59",
        },
        saffron: {
          DEFAULT: "#E8A33D",
          dark: "#C9852A",
          light: "#F3C374",
        },
        thread: {
          DEFAULT: "#B23A48",
          dark: "#8E2C38",
        },
        stone: "#8C8577",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        lg: "14px",
      },
      maxWidth: {
        "content": "1240px",
      },
      backgroundImage: {
        "grain": "url('/grain.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
