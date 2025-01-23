// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "nuxt-svgo",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
  ],
  build: {
    transpile: ["oh-vue-icons"],
  },

  fonts: {
    families: [
      {
        name: "Murecho",
        provider: "google",
      },
    ],
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    config: {
      theme: {
        fontFamily: {
          sans: ["Murecho"],
          serif: ["Ms Madi"],
        },
        extend: {
          screens: {
            xs: "480px",
          },
        },
      },
    },
  },

  svgo: {
    defaultImport: "component",
  },
  site: {
    url: "https://petruscaelestinus.com",
    name: "Petrus Caelestinus Portfolio",
  },
  ssr: false,
  app: {
    head: {
      titleTemplate: "%s - Petrus Caelestinus",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Hire Petrus Caelestinus, a professional App Developer, Software Developer, and Software Engineer based in Indonesia.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "App Developer Indonesia, Software Developer Indonesia, Software Engineer Indonesia, Petrus Caelestinus",
        },
        { hid: "author", name: "author", content: "Petrus Caelestinus" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
