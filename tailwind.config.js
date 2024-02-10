/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        primary: "#2AB7DD",
        softGray: "#E4E4E4",
        darkGray: "#626262",
        lightGray: "#F7F7F7",
        red: "#EE342E",
        lightRed: "#ED4D4D",
        yellow: "#FCCC0A",
        blackText: "#222222",
        lightGrayBorder: "#D1D5DB",
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
      xs: "300px",
      sm: "540px",
      md: "768px",
      mdx: "1024px",
      lg: "1280px",
      elg: "1370px",
      xl: "1440px",
      xxl: "1600px",
      exl: "1920px",
    },
  },
  plugins: [],
};
