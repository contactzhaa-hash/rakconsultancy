import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0A1F33",
        slate: "#64748B",
        sand: "#C4A77D",
      },
      borderRadius: { sm: "3px" },
      boxShadow: { none: "none" },
    },
  },
  plugins: [],
};

export default config;