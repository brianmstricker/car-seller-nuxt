// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 devtools: { enabled: false },
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
 app: {
  pageTransition: { name: "page", mode: "out-in" },
 },
 modules: ["@nuxt/image", "@nuxt/ui", "nuxt-mongoose"],
 mongoose: {
  uri: process.env.MONGODB_URI,
  options: {},
 },
});
