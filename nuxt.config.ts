// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/eslint'],
  devtools: { enabled: true },
  compatibilityDate: '2024-12-22',
  eslint: {
    config: {
      stylistic: {
        jsx: false,
        arrowParens: true,
        braceStyle: '1tbs',
      },
    },
  },
  tailwindcss: {
    editorSupport: true,
  },
})
