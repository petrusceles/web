// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts", "nuxt-svgo"],

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
});
