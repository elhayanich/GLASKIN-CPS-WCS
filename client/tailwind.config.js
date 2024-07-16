/** @type {import('tailwindcss').Config} */
const daisyui = require("daisyui");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Pinky: "#EE60A4",
        Softy:"#fff0f3",
        Creamy: "#fbfbf5",
        Dark: "#003049",
        Bluey: "#bde0fe",
      },
      fontFamily: {
        title: ['"ArchivoBlack"'],
        main: ['"Inter"'],
        quote: ['"Eduauvicwanth"'],
      },
    },
  },
  plugins: [daisyui],
};
