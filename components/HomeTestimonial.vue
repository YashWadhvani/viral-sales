<template>
  <div class="home-testimonials">
    <div class="container-narrow">
      <div class="ht-title">
        <h4>What They Say</h4>
      </div>

      <div class="ht-slider custom-slider">
        <swiper
          :slides-per-view="slidesPerView"
          :space-between="25"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide
            v-for="(item, index) in homeData.data.slices[4].items"
            :key="index"
          >
            <div class="ht-card">
              <div class="ht-card-header">
                <h4>
                  {{ item.testimonial_name }}
                </h4>
                <p>{{ item.testimonial_date }}</p>
              </div>
              <div class="ht-card-body">
                <p>
                  {{ item.testimonial_content }}
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
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
import { ref, onMounted, onUnmounted } from "vue";

import { inject } from "vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slidesPerView = ref(2); //Responsiveness
    const onSwiper = (swiper) => {
      // console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };

    const homePageData = inject("homePageData");
    const homeData = homePageData._rawValue;

    //Responsiveness
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        slidesPerView.value = 1;
      } else {
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
      onSwiper,
      onSlideChange,
      slidesPerView,
      modules: [Navigation, Pagination],
    };
  },
};
</script>

<style src="./HomeTestimonial.scss" scoped></style>
