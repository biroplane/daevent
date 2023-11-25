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
          DEFAULT: "#65BC7B",
          50: "#EBFEF8",
          100: "#D5FBEB",
          200: "#B5F2D4",
          300: "#94E5B6",
          400: "#77D596",
          500: "#65BC7B",
          600: "#37AF5F",
          700: "#218C4E",
          800: "#11643B",
          900: "#053320",
          950: "#011E14",
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
