// Code generated by Slice Machine. DO NOT EDIT.

import { defineAsyncComponent } from "vue";
import { defineSliceZoneComponents } from "@prismicio/vue";

export const components = defineSliceZoneComponents({
  featured_projects: defineAsyncComponent(
    () => import("./FeaturedProjects/index.vue"),
  ),
  home_about_section: defineAsyncComponent(
    () => import("./HomeAboutSection/index.vue"),
  ),
  home_hero: defineAsyncComponent(() => import("./HomeHero/index.vue")),
  home_products_slider: defineAsyncComponent(
    () => import("./HomeProductsSlider/index.vue"),
  ),
  product_card: defineAsyncComponent(() => import("./ProductCard/index.vue")),
  projects: defineAsyncComponent(() => import("./ProjectCard/index.vue")),
  testimonials: defineAsyncComponent(() => import("./Testimonials/index.vue")),
});
