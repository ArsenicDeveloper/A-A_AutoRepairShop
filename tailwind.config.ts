import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        surface: "rgba(255,255,255,0.03)",
        "surface-2": "rgba(255,255,255,0.06)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        "scan-line": "scanLine 5s linear infinite",
        "border-glow": "borderGlow 3s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(249,115,22,0.2)" },
          "50%": { boxShadow: "0 0 50px rgba(249,115,22,0.5), 0 0 80px rgba(249,115,22,0.2)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100px)", opacity: "0" },
          "5%": { opacity: "1" },
          "95%": { opacity: "1" },
          "100%": { transform: "translateY(110vh)", opacity: "0" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(249,115,22,0.2)" },
          "50%": { borderColor: "rgba(249,115,22,0.6)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(249,115,22,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.04) 1px, transparent 1px)",
        "grid-pattern-subtle":
          "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
        "grid-sm": "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;
