// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 devtools: { enabled: true },
 colorMode: {
  preference: "light",
 },
 css: ["~/assets/css/main.css"],
 postcss: {
  plugins: {
   tailwindcss: {},
   autoprefixer: {},
  },
 },
 modules: ["@nuxt/image", "@nuxt/ui"],
});