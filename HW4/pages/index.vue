<template>
  <div>
  <div class="root-element">
    <div class="title">
      دانلود، فیلم، سریال، انیمیشن، مستند و دوبله با ۱۳,۶۲۱ عنوان 
    </div>

    <search-icon  class="search-icon" icon="search" color="purple"></search-icon>
    <search-icon  class="search-icon" icon="search-plus" ></search-icon>
    <search-input class="search-input" hint="جست‌و‌جوی، فیلم، سریال بازیگر و کارگردان"></search-input>
    <m-button  class="search" color="blue">
      جست و جو
    </m-button>
  </div>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NDI3NDg4M15BMl5BanBnXkFtZTcwMjY5OTI1OA@@._V1_UX182_CR0,0,182,268_AL_.jpg"/>
      </div>
      <div class="swiper-slide">
        <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NDI3NDg4M15BMl5BanBnXkFtZTcwMjY5OTI1OA@@._V1_UX182_CR0,0,182,268_AL_.jpg"/>
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
  <static-banner image="/images/static-banner.png" color="#ab0606" title="اسطوره‌ی کنگ‌فو و رویای صعود به قله!" subtitle="از بهترین نبردهای بروسلی">
    <m-button color="Transparent">
      طرفدارای بروسلی دانلود کنن!
    </m-button>
  </static-banner>
  </div>

</template>

<style scoped>
.title {
  width: 100%;
  text-align: center;
  color: white;
  font-size: 25px;
}

.search {
  width: 100%;
  text-align: center;
}

.root-element {
  background-image: url(/images/startwars.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  height: 400px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
}

.search-icon {
  margin-left: 10px;
}

/* img { position: relative; */
  /* top: -160px; */
  /* left: -900px; */
/* } */

</style>

<script>
import SearchInput from "~/components/search-input"
import SearchIcon from "~/components/search-icon"
import StaticBanner from "~/components/static-banner"
import MButton from "~/components/m-button"

export default {
  data() {
    return {
      banners: [
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NDI3NDg4M15BMl5BanBnXkFtZTcwMjY5OTI1OA@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        'https://images-na.ssl-images-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
      ],
      swiperOption: {
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: true
      }
    }
  },
  components: {
    SearchInput,
    SearchIcon,
    StaticBanner,
    MButton
  }
  
}
</script>

