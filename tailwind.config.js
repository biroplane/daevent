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
          DEFAULT: "#2EDB84",
          50: "#E9FBF2",
          100: "#D3F8E6",
          200: "#ACF1CF",
          300: "#81E9B5",
          400: "#5AE39E",
          500: "#2EDB84",
          600: "#1FB76B",
          700: "#17874F",
          800: "#105B36",
          900: "#072C1A",
          950: "#04160D",
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
        heading: "'Montserrat Alternates'",
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
