import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
      backgroundImage: {
        customGradient:
          "linear-gradient(315deg, #000000 0%, #212102 49%, #383800 100%)",
      },
      colors: {
        "yellow-primary": "#F9FA00",
        "olive-secondary": "#333300",
      },
      container: {
        screens: {
          DEFAULT: "1440px",
        },
        center: true,
        padding: {
          DEFAULT: "5%",
          sm: "1rem",
        },
      },
    },
  },

  plugins: [],
} satisfies Config;
