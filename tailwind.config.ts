import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        grotesk: ["Familjen Grotesk", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};

export default config;
