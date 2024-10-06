/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: "1300px",
      md: "975px",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      ptSerif: ["PT Serif", "serif"],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        brand: "#E52525",
        secondary:"#F2994A",
        black: "#333333",
        button: "#E52525",
        textClr: "#A0A79A",
      },
    },
  },
  plugins: [],
};
