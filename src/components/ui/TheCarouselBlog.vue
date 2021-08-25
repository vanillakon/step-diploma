<template>
  <Carousel
    :settings="settings"
    :breakpoints="breakpoints"
    class="carousel-sub"
  >
    <Slide v-for="slide in posts" :key="slide">
      <div class="carousel__item">
        <the-carousel-blog-post
          :image="slide.image"
          :title="slide.title"
          :time="slide.time"
          :author="slide.author"
        ></the-carousel-blog-post>
      </div>
    </Slide>

    <template #addons> </template>
  </Carousel>
</template>

<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
import TheCarouselBlogPost from "./TheCarouselBlogPost.vue";
import "vue3-carousel/dist/carousel.css";
export default {
  setup() {
    const store = useStore();
    onMounted(() => store.dispatch("blog/getPosts"));
    const settings = {
      itemsToShow: 1,
      snapAlign: "center",
    };
    const breakpoints = {
      700: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      1024: {
        itemsToShow: 3,
        snapAlign: "start",
      },
    };
    const posts = computed(() => store.getters["blog/getPosts"]);
    return {
      settings,
      breakpoints,
      posts,
    };
  },
  components: {
    Pagination,
    Carousel,
    Slide,
    Navigation,
    TheCarouselBlogPost,
  },
};
</script>
