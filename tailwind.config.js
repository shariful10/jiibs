/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        primary: "#2AB7DD",
        softGray: "#E4E4E4",
        darkGray: "#626262",
        blackText: "#222222",
      },
      boxShadow: {
        "3xl": "0 23px 37px 0 #1FBAFF10",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    screens: {
      sm: "540px",
      md: "768px",
      mdx: "1000px",
      lg: "1180px",
      xl: "1440px",
      xxl: "1420px",
    },
  },
  plugins: [],
};
