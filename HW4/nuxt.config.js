module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "hw4",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    script: [
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/js/swiper.min.js"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/css/swiper.min.css"
      }
    ]
  },
  css: ["~assets/css/rtl.css", "~assets/css/global.css"],
  modules: ["bootstrap-vue/nuxt", "@nuxtjs/font-awesome"],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" }
  /*
  ** Build configuration
  */
};
