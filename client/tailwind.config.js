/** @type {import('tailwindcss').Config} */
const daisyui = require("daisyui");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Pinky: "#EE60A4",
        Creamy: "#E9E1D6",
        Dark: "#003049",
        Bluey: "#bde0fe",
      },
    },
  },
  plugins: [daisyui],
};
