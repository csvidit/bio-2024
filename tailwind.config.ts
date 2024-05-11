import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lynx: "#F7F7F7",
        olive: "#172713",
        dream: "#E5EBEA",
        cassiopeia: "#AED0C9",
        lantern: "#F09056",
        sensaimidori: "#374231",
        // cream: "#FCF6EB",
        // asparagus: "#ECEABE",
        // midnight: "#051914",
        // evergreen: "#125B49",
        // coachgreen: "#003527",
        // lettuce: "#AADD66",
        blue: {
          accent: "#0000FF",
        },
        orange: {
          accent: "#EB5E28",
        },
      },
    },
  },
  plugins: [],
};
export default config;
