<template>
  <Carousel
    :settings="settings"
    :breakpoints="breakpoints"
    class="carousel-sub"
  >
    <Slide v-for="slide in images" :key="slide">
      <div class="carousel__item">
        <figure class="fig">
          <img :src="slide.image" alt="image" />
          <figcaption class="fig-caption">
            <div class="insta-btn-wrapper">
              <fa :icon="['fas', 'heart']" style="font-size: 40px" />
              <span>{{ slide.like }}</span>
            </div>
          </figcaption>
        </figure>
      </div>
    </Slide>

    <template #addons> </template>
  </Carousel>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  setup() {
    const store = useStore();
    onMounted(() => store.dispatch("insta/getImages"));
    const settings = {
      itemsToShow: 1,
      snapAlign: "center",
    };
    const breakpoints = {
      700: {
        itemsToShow: 3,
        snapAlign: "center",
      },
      1024: {
        itemsToShow: 6,
        snapAlign: "start",
      },
    };
    const images = computed(() => store.getters["insta/getImages"]);
    return {
      settings,
      breakpoints,
      images,
    };
  },
  components: {
    Pagination,
    Carousel,
    Slide,
    Navigation,
  },
};
</script>
