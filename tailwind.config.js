/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      akkurat: ["Akkurat", "sans-serif"],
      akkuratlight: ["Akkurat Light", "sans-serif"],
      akkuratbold: ["Akkurat Bold", "sans-serif"],
      elgoc: ["Elgoc", "serif"],
      elgocthin: ["Elgoc Thin", "serif"],
      elgocmedium: ["Elgoc Medium", "serif"],
    },
  },
  plugins: [],
};
