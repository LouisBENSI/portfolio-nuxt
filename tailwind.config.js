/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#1F2937",
        secondary : "#72D2AE",
        tiers : "#FFFAF3"
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}