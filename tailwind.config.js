/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      ptSerif: ["PT Serif", "serif"],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        brand: "#C51605",
        secondary: "#F2994A",
        black: "#333333",
        button: "#E52525",
      },
    },
  },
  plugins: [],
};
