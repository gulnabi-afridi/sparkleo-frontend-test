/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dm_sans: ["DM Sans", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        xs: "325px",
        sm: "480px",
        csm: "540px",
        csm2: "640px",
        md: "768px",
        cmd: "880px",
        lg: "976px",
        clg: "1080px",
        xl: "1280px",
      },
      colors: {
        brnad: {
          1: "#E92928",
        },
        blue: {
          1: "#2B3674",
          2: "#A3AED0",
        },
        white: {
          1: "#FFF",
        },
      },
    },
  },
  plugins: [],
};
