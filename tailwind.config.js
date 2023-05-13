/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      black: {
        100: "#d2cecc",
        200: "#a49d99",
        300: "#776c66",
        400: "#493b33",
        500: "#1c0a00",
        600: "#160800",
        700: "#110600",
        800: "#0b0400",
        900: "#060200"
      },
      white: {
        100: "#fdfdfe",
        200: "#fcfcfd",
        300: "#fafafb",
        400: "#f9f9fa",
        500: "#f7f7f9",
        600: "#c6c6c7",
        700: "#949495",
        800: "#636364",
        900: "#313132"
      },
      orange: {
        100: "#ffe7cc",
        200: "#ffcf99",
        300: "#ffb666",
        400: "#ff9e33",
        500: "#ff8600",
        600: "#cc6b00",
        700: "#995000",
        800: "#663600",
        900: "#331b00"
      },
      purple: {
        100: "#e9e1f4",
        200: "#d3c2e8",
        300: "#bca4dd",
        400: "#a685d1",
        500: "#9067c6",
        600: "#73529e",
        700: "#563e77",
        800: "#3a294f",
        900: "#1d1528"
      },
      pink: {
        100: "#f6dce1",
        200: "#edbac3",
        300: "#e597a5",
        400: "#dc7587",
        500: "#d35269",
        600: "#a94254",
        700: "#7f313f",
        800: "#54212a",
        900: "#2a1015"
      }
    }
    ,
    fontFamily: {
      cursive: ['Dancing Script', 'cursive'],
      serif: ['Hind', "sans-serif"],
      sans: ['Montserrat', "sans-serif"],
      brush: ['Alex Brush', "cursive"]
    },
    extend: {},
  },
  plugins: [],
}