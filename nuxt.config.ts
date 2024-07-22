// https://nuxt.com/docs/api/configuration/nuxt-config

export default {
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/prismic'
  ],

  css: [
    '@/assets/styles/global.scss'
  ],

  prismic: {
    endpoint: 'viralsales',
    accessToken: 'bX9U3WZ2KfrcbOGFXliUQgtt',

    routes: [
      {
        type: "homepage",
        path: "/",
      },
      {
        type: "about_page",
        path: "/about",
      }
    ]
  },

  compatibilityDate: "2024-07-22"
};