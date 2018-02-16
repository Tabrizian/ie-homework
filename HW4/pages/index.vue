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
  <div class="movies">
    <span class="movies-title">جدیدترین‌ها</span>
    <div class="movies-category">
      <ul>
        <li class="active">همه</li>
        <li>فیلم سینمایی</li>
        <li>انیمیشن</li>
        <li>مستند</li>
      </ul>
    </div>
    <div style="clear: both;"></div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" name="tt0418279">
          <a href="./download.html?movie=tt0418279"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"></a>
        </div>
        <div class="swiper-slide" name="tt1707386">
          <a href="./download.html?movie=tt1707386"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NDI3NDg4M15BMl5BanBnXkFtZTcwMjY5OTI1OA@@._V1_UX182_CR0,0,182,268_AL_.jpg"></a>
        </div>
        <div class="swiper-slide" name="tt5721088">
          <a href="./download.html?movie=tt5721088"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMzk0NDdjNWEtMDVkMC00ODdiLTgyMmYtOWM0ZDRjOTU4MjJlXkEyXkFqcGdeQXVyNjM2MDMxMDk@._V1_UX182_CR0,0,182,268_AL_.jpg"></a>
        </div>
        <div class="swiper-slide" name="tt3521126">
          <a href="./download.html?movie=tt3521126"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BOGNkMzliMGMtMDI5Ni00OTZkLTgyMTYtNzk5ZTY1NjVhYjVmXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_UX182_CR0,0,182,268_AL_.jpg"></a>
        </div>
        <div class="swiper-slide" name="tt4864624">
          <a href="./download.html?movie=tt4864624"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMDQ3MTAyZjMtZjVkMC00NzFmLWE2ZjYtZDkyYzlmZWU4NTAwXkEyXkFqcGdeQXVyMTg1MzYyMzQ@._V1_UX182_CR0,0,182,268_AL_.jpg"></a>
        </div>
        <div class="swiper-slide" name="tt3266284">
          <a href="./download.html?movie=tt3266284"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMzQwMzQ0MjYzMV5BMl5BanBnXkFtZTgwOTIwMTEwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"></a>
        </div>
        <div class="swiper-slide" name="tt5657846">
          <a href="./download.html?movie=tt5657846"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BNDA4Nzc1OTg2OV5BMl5BanBnXkFtZTgwODE3ODgwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"></a>
        </div>
        <div class="swiper-slide" name="tt3402236">
          <a href="./download.html?movie=tt3402236"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BNGFmM2NmYjYtMjAwNy00ZDkzLWI3ZWMtOGZhOTRhYzQwMTA0XkEyXkFqcGdeQXVyNzU2MzMyNTI@._V1_UX182_CR0,0,182,268_AL_.jpg"></a>
        </div>
        <div class="swiper-slide" name="tt5027774">
          <a href="./download.html?movie=tt5027774"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNzgwMDUyMl5BMl5BanBnXkFtZTgwMTQ0NTIyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg"></a>
        </div>
      </div>
              <!-- Add Pagination -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    </div>
  </div>
  <static-banner image="/images/static-banner.png" color="#ab0606" title="اسطوره‌ی کنگ‌فو و رویای صعود به قله!" subtitle="از بهترین نبردهای بروسلی">
    <m-button color="Transparent">
      طرفدارای بروسلی دانلود کنن!
    </m-button>
  </static-banner>
  <div class="films">
    <film-card colorTop="purple" rating="Salam" quality="Bluray" :tags="['Salam1', 'Chetory', 'Salam']" image="https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNzgwMDUyMl5BMl5BanBnXkFtZTgwMTQ0NTIyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg">
    </film-card>
    <film-card colorTop="purple" rating="Salam" quality="Bluray" :tags="['Salam1', 'Chetory', 'Salam']" image="https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNzgwMDUyMl5BMl5BanBnXkFtZTgwMTQ0NTIyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg">
    </film-card>
    <film-card colorTop="purple" rating="Salam" quality="Bluray" :tags="['Salam1', 'Chetory', 'Salam']" image="https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNzgwMDUyMl5BMl5BanBnXkFtZTgwMTQ0NTIyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg">
    </film-card>
    <film-card colorTop="purple" rating="Salam" quality="Bluray" :tags="['Salam1', 'Chetory', 'Salam']" image="https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNzgwMDUyMl5BMl5BanBnXkFtZTgwMTQ0NTIyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg">
    </film-card>
    <film-card colorTop="purple" rating="Salam" quality="Bluray" :tags="['Salam1', 'Chetory', 'Salam']" image="https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNzgwMDUyMl5BMl5BanBnXkFtZTgwMTQ0NTIyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg">
    </film-card>
  </div>
  </div>
</template>

<style scoped>
.films {
  margin: auto;
}

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

.movies {
    background-color: black;
    padding: 20px;
}

.movies-category {
    float: right;
}

.movies-category ul {
    list-style-type: none;
    padding: 0;
    text-align: center;
    overflow: hidden;
}

.movies-category li {
    float: right;
    display: block;
    color: #808080;
    text-align: center;
    text-decoration: none;
    margin-right: 10px;
}

.movies-title {
    float: left;
    color: rgb(202, 202, 202);
    font-size: 18px;
}

.movies-category li.active {
    border: 2px solid cornsilk;
    padding: 5px;
    border-radius: 5px;

}

</style>

<script>
import SearchInput from "~/components/search-input"
import SearchIcon from "~/components/search-icon"
import StaticBanner from "~/components/static-banner"
import MButton from "~/components/m-button"
import FilmCard from "~/components/film-card"

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
  mounted() {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 6,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
  },
  components: {
    SearchInput,
    SearchIcon,
    StaticBanner,
    MButton,
    FilmCard
  }
  
}
</script>

