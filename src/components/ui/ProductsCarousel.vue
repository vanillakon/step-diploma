<template>
  <Carousel :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="(slide, i) in products" :key="slide">
      <div class="carousel__item">{{ slide.call }}</div>
    </Slide>
    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { inject, ref } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  setup() {
    const settings = ref({
      itemsToShow: 1,
      snapAlign: "center",
    });
    const breakpoints = ref({
      700: {
        itemsToShow: 2.5,
        snapAlign: "center",
      },

      1024: {
        itemsToShow: 3,
        snapAlign: "start",
      },
    });
    return {
      breakpoints,
      settings,
      products: inject("productsRelated"),
    };
  },
  components: {
    Pagination,
    Carousel,
    Slide,
  },
};
</script>
