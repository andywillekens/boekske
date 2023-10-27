import { resolve } from 'path'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [''],
  imports: {
    presets: [
      {
        from: '@eonasdan/lz-string',
        imports: ['compress', 'decompress', 'compressToBase64', 'decompressFromBase64']
      }
    ]
  },
  typescript: {
    shim: false
  },
  devtools: { enabled: true },
  srcDir: 'src/',
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  alias: {
    '@': resolve(__dirname, './src')
  },
  app: {
    pageTransition: false,
    layoutTransition: false,
    head: {
      charset: 'utf-8',
      title: 'Boekske',
      meta: [{ name: 'description', content: 'Gemakkelijk een boekje maken' }]
      // link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    }
  },
  router: { options: { strict: true } },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: ['~/assets/styles/tailwind.scss']
})
