/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "slices/**/*.vue",
    "components/**/*.{vue,js}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#83C0FA",
          50: "#F0F8FE",
          100: "#E6F3FE",
          200: "#CEE6FD",
          300: "#B5DAFC",
          400: "#9DCEFB",
          500: "#83C0FA",
          600: "#3B9CF7",
          700: "#0976DD",
          800: "#064F93",
          900: "#03274A",
          950: "#011222",
        },
        secondary: {
          DEFAULT: "#F4E288",
          50: "#FEFCF1",
          100: "#FDF9E8",
          200: "#FBF4D0",
          300: "#F9EEB9",
          400: "#F6E8A2",
          500: "#F4E288",
          600: "#EED244",
          700: "#D2B213",
          800: "#8C770D",
          900: "#463B06",
          950: "#211C03",
        },
        black: "#212427",
      },
      fontFamily: {
        body: "Inter",
        heading: "Bellota",
      },
      aspectRatio: {
        "3/4": "3 / 4",
        "9/16": "9 / 16",
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography"),
    // ...
  ],
};
