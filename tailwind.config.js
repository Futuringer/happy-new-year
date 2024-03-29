/** @type {import('tailwindcss').Config} */
export default {
  content: ["/index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      customFont: ['"Audiowide"', "sans-serif"],
    },
  },
  plugins: [require("tailwindcss/nesting")],
};
