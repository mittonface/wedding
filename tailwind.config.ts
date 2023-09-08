import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "flower-pattern":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(250, 250, 252, 1)), url('https://res.cloudinary.com/dii1nnhpp/image/upload/v1694201225/assets/bigflowers_ud_zuieyk.jpg')",
      },
      fontFamily: {
        serif: ["var(--font-coromont-garamond", ""],
      },
    },
  },
  plugins: [],
};
export default config;
