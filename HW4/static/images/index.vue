<template>
  <div>
    <main-header></main-header>
    <main-search src="~/component/bg.jpg"></main-search>
    <simple-film-swiper></simple-film-swiper>
    <static-banner
      color="red" :src="setBg()"
      :explanation1="setExp('اسطوره ی کنگفو و رویای صعود به قله !')"
      :explanation2="setExp('از بهترین نبردهای بروسلی!')"
      :bTitle="setExp('طرفدارایه بروسلی دانلود کنن')"
    ></static-banner>
    <film-card-swiper></film-card-swiper>
    <main-footer></main-footer>
    <button @click="go()">ajax for god's sake</button>
  </div>
</template>

<script>
import MainHeader from '~/components/main/MainHeader.vue'
import MainSearch from '~/components/SearchComponents/MainSearch.vue'
import FilmCardSwiper from '~/components/Swipers/FilmCardSwiper.vue'
import SimpleFilmSwiper from '~/components/Swipers/SimpleFilmSwiper.vue'
import StaticBanner from '~/components/StaticBanner.vue'
import MainFooter from '~/components/FooterComponents/MainFooter.vue'


export default {
  components: {
    MainHeader,
    MainSearch,
    FilmCardSwiper,
    SimpleFilmSwiper,
    StaticBanner,
    MainFooter

  },

  methods:{
      setBg(){
        return "https://images-na.ssl-images-amazon.com/images/M/MV5BMzVjNzI4NzYtMjE4NS00M2IzLWFkOWMtOTYwMWUzN2ZlNGVjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg";
      },
      setExp(str){
        return str;
      },
    async go(){
      let data = await axios.get('http://www.omdbapi.com/?t=rain+man&apikey=51425d95')
	  console.log(data)
     
    }
  }
}
</script>

<style>



</style>
