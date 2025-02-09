export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Portfolio KHUN KIMHONG',
      htmlAttrs: {
        lang: "kh"
      },
      meta: [
        { name: 'description', content: 'Your app description' },
      ],
      link: [
        { 
          rel: 'icon', 
          type: 'image/x-icon', 
          href: '/logo/ownPhoto.jpg' 
        },
      ],      
    }
  },  

  pages: true,

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: [
    '~/plugins/vue-backtotop.js',
    '~/plugins/v-click-outside.js',
    { src: '~/plugins/alpine.js', mode: 'client' }
  ],

  modules: [ // Use modules instead of buildModules
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxtjs/i18n', // Make sure this is inside modules
  ],
  //i18n for kh and en langduage
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'kh', name: 'Khmer', file: 'kh.json' }
    ],
    strategy: "no_prefix",
    defaultLocale: 'kh',
    langDir: 'locales/', // Define the folder where your translation files are located
    lazy: true, // Lazy loading of translation files
  },

  vite: {
    server: {
      hmr: {
        port: 3000,
      },
    },
  },

});
