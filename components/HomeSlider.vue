<template>
  <div class="hs-slider custom-slider">
    <swiper
      :slides-per-view="slidesPerView"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      navigation
      :navigation="
        isMobile
          ? { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
          : false
      "
      :modules="modules"
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
      <div v-if="isMobile" class="swiper-button-next"></div>
      <div v-if="isMobile" class="swiper-button-prev"></div>
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
    const isMobile = ref(false);
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
        isMobile.value = true;
      } else {
        console.log("Inside Else");
        slidesPerView.value = 2;
        isMobile.value = false;
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
      isMobile,
      modules: [Navigation, Pagination],
    };
  },
};
</script>

<style scoped src="./HomeSlider.scss"></style>

<!-- <template>
  <div class="hs-slider custom-slider">
    <swiper
      :slides-per-view="slidesPerView"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :navigation="
        isMobile
          ? { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
          : false
      "
      :modules="[Navigation, Pagination]"
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
      <div v-if="isMobile" class="swiper-button-next"></div>
      <div v-if="isMobile" class="swiper-button-prev"></div>
    </swiper>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, inject } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation, Pagination } from "swiper";

// Install modules
SwiperCore.use([Navigation, Pagination]);

import "swiper/swiper-bundle.css"; // Import Swiper styles

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slidesPerView = ref(2); //Responsiveness
    const isMobile = ref(false); // Define isMobile ref
    const onSlideChange = () => {
      console.log("slide change");
    };

    const homePageData = inject("homePageData");

    const homeData = homePageData._rawValue; // Ensure data is available

    // Responsiveness
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        slidesPerView.value = 1;
        isMobile.value = true;
      } else {
        slidesPerView.value = 2;
        isMobile.value = false;
      }
    };

    onMounted(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });

    return {
      homeData,
      onSlideChange,
      slidesPerView,
      isMobile,
    };
  },
};
</script> -->
