/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Afacad Flux", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
