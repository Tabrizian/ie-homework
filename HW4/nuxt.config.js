module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'hw4',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~assets/css/rtl.css',
    '~assets/css/global.css',
    'swiper/dist/css/swiper.css'
  ],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/font-awesome'
  ],
  plugins: [
    { src: '~/plugins/swiper.js', ssr: false },
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' }
  /*
  ** Build configuration
  */
}
