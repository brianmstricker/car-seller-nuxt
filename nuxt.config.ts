// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 colorMode: {
  preference: "light",
 },
 devtools: { enabled: true },
 css: ["~/assets/css/main.css"],
 postcss: {
  plugins: {
   tailwindcss: {},
   autoprefixer: {},
  },
 },
 modules: ["@nuxt/image", "@nuxt/ui"],
});
