import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#D1D8DC",
        "secondary":"#323B42",
        "background":"#4E6573",
        "background2":"#909FA7"
      },
    },
  },
  plugins: [],
};
export default config;
