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
        blue: {
          accent: "#0000FF",
        },
        orange: {
          accent: "#EB5E28",
        },
        arapawa: {
          "50": "#f3f5ff",
          "100": "#e9ebfe",
          "200": "#d5daff",
          "300": "#b4bbfe",
          "400": "#898ffc",
          "500": "#5a5af8",
          "600": "#4337f0",
          "700": "#3525dc",
          "800": "#2c1fb8",
          "900": "#271b97",
          "950": "#110d5b",
        },
        ice: {
          "50": "#f0fdfa",
          "100": "#ccfbf2",
          "200": "#a3f6e7",
          "300": "#5fe9d5",
          "400": "#2fd2c0",
          "500": "#16b6a7",
          "600": "#0e9389",
          "700": "#10756e",
          "800": "#125d59",
          "900": "#144d4b",
          "950": "#042f2f",
        },
        blush: {
          "50": "#fff1f4",
          "100": "#fee5ea",
          "200": "#fccfda",
          "300": "#faa7bb",
          "400": "#f66c91",
          "500": "#ee4577",
          "600": "#db2363",
          "700": "#b81853",
          "800": "#9a174b",
          "900": "#841745",
          "950": "#4a0722",
        },
      },
    },
  },
  plugins: [],
};
export default config;
