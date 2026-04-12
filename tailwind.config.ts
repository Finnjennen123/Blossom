import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        plaster: "#F5F0E8",
        "warm-sand": "#EDE6D8",
        "dark-earth": "#2C2417",
        clay: "#7A6B5A",
        terracotta: "#C4785C",
        "burnt-sienna": "#A8603F",
        sandstone: "#D4CBBB",
        "night-earth": "#1E1A14",
        linen: "#F0EBE1",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
