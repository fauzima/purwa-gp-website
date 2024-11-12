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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        inter: ["inter", "sans-serif"],
        spacegrotesk: ["Space Grotesk", "sans-serif"],
        jost: ["jost", "sans-serif"],
      },
      gridTemplateColumns: {
        autofill: "repeat(auto-fill, 300px)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
