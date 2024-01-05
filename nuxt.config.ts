// https://nuxt.com/docs/api/configuration/nuxt-config
import {process} from "unenv/runtime/node/process/_process";

export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apiBase: 'http://admin.louisbensi.fr/api'
        }
    },
    modules: [
        '@pinia/nuxt',
    ],
    css: ['~/assets/css/main.css', "~/assets/css/style.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
