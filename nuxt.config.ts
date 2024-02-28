// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/prismic",
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
  ssr: false,
  nitro: {
    preset: "netlify-static",
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  css: [
    "~~/assets/css/app.pcss",
    "~~/assets/css/tailwind.pcss",
    "~~/assets/css/transitions.css",
  ],
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
  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {},
  //     cssnano:
  //       process.env.NODE_ENV === "production"
  //         ? { preset: ["default", { discardComments: { removeAll: true } }] }
  //         : false, // disable cssnano when not in production
  //   },
  // },
  prismic: {
    endpoint: "daevent",
    toolbar: false,
    preview: false,
    clientConfig: {
      brokenRoute: "/404",
      routes: [
        { type: "homepage", path: "/" },
        { type: "blog", path: "/blog" },
        { type: "post", path: "/blog/:uid" },
        // { type: "single_category", path: "/categorie-portfolio/:uid" },
        { type: "artist_page", path: "/artist/:uid" },
        { type: "artists_page", path: "/artist" },
        { type: "portfolio", path: "/portfolio" },
        { type: "static_page", path: "/:uid" },
      ],
    },
  },
});
