import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"], // Inter (default)
        grotesk: ["var(--font-grotesk)"], // Familjen Grotesk
      },
    },
  },
};

export default config;
