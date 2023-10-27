// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/prismic",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Bellota: true,
          Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
        },
      },
    ],
    "nuxt-icon",
    "@nuxtjs/i18n",
    [
      "@pinia/nuxt",
      {
        autoImports: [
          "defineStore", // import { defineStore } from 'pinia'
          ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
  ssr: true,
  nitro: {
    preset: "netlify",
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  css: ["~~/assets/css/app.pcss", "~~/assets/css/tailwind.pcss"],
  devtools: { enabled: true },
  i18n: {
    locales: [
      { code: "it", name: "IT", iso: "it-it" },
      { code: "en", name: "EN", iso: "en-gb" },
    ],
    strategy: "no_prefix",
    defaultLocale: "it",

    vueI18n: "./i18n.config.ts",
  },
  prismic: {
    endpoint: "daevent",
    clientConfig: {
      routes: [
        { type: "homepage", path: "/" },
        // { type: "portfolio", path: "/portfolio" },
      ],
    },
  },
});
