// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/content', '@nuxtjs/tailwindcss'],
  css: ['/assets/css/main.css'],
  app: {
    head: {
      bodyAttrs: {
        class: 'bg-slate-700 text-slate-50',
      },
    },
  },
})
