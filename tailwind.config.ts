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
        "bg-custom": "#191a1c",
        "custom-beige": "#bd8c62",
        "brown-500": "#8C7261",
        "nhay-nhay":"#2c2d30",
        buy_property: "#1a1b1d",
        follow_us: "#2b2c30",
        title_buy_property: "#bd8c62",
        content_buy_property: "#c0c5cb",
        sell_property: "#2b2c30",
        title_follow_us: "#CFCFCF",
        follow_a: "#BD8C62",
        bg_dark2: "#0E1013",
        border_form: "#bd8c624d",
        btn_amenities: "#bd8c62",
      },
      fontFamily: {
        Jost: "Jost,san-serif",
        Old_Standard_TT: "Old Standard TT, serif",
      },
      fontSize: {
        fontSize_Looking: "55px",
      },
    },
  },
  plugins: [],
};
export default config;
