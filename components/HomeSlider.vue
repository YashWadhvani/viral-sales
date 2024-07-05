<template>
  <div class="hs-slider custom-slider">
    <swiper
      :slides-per-view="2"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="(item, index) in homeData.data.slices[3].items"
        :key="index"
      >
        <div class="hs-slide">
          <img :src="item.home_product_image.url" alt="" />
          <h2>{{ item.home_product_title }}</h2>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { inject } from "vue";
import { ref, onMounted, onUnmounted } from "vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slidesPerView = ref(2); //Responsiveness
    const onSlideChange = () => {
      console.log("slide change");
    };

    const homePageData = inject("homePageData");

    const homeData = homePageData._rawValue; // Ensure data is available

    //Responsiveness
    const handleResize = () => {
      console.log(window.innerWidth);
      if (window.innerWidth <= 767) {
        console.log("Inside If");
        slidesPerView.value = 1;
      } else {
        console.log("Inside Else");
        slidesPerView.value = 2;
      }
    };

    onMounted(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });

    //Responsiveness Code Ends

    return {
      homeData,
      onSlideChange,
      slidesPerView,
      modules: [Navigation, Pagination],
    };
  },
};
</script>

<style scoped src="./HomeSlider.scss"></style>
