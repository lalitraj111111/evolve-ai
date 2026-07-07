import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#11131a",
        paper: "#f8fafc",
        electric: "#5b5ff7",
        mint: "#2dd4bf",
        coral: "#fb7185"
      },
      boxShadow: {
        soft: "0 18px 55px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
