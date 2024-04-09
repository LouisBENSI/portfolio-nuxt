// https://nuxt.com/docs/api/configuration/nuxt-config
import {process} from "unenv/runtime/node/process/_process";

export default defineNuxtConfig({
    ssr : false,
    runtimeConfig: {
        public: {
            apiBase: 'https://admin.louisbensi.fr'
        }
    },
    modules: [
        '@pinia/nuxt',
        ['nuxt-mail', {
            message: {
                to: 'bensilouis@live.fr',
            },
            smtp: {
                host: "louisbensi.fr",
                port: 587,
            },
        }]
    ],

    css: ['~/assets/css/main.css', "~/assets/css/style.css"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

})
