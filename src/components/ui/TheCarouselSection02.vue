<template>
  <Carousel :autoplay="5000" :wrap-around="true">
    <Slide v-for="slide in carouselArray" :key="slide">
      <div class="carousel__item row">
        <div class="col s12 m12 l12 testimonial-inner-wrapper">
          <div class="testimonial-inner">
            <div class="thumb">
              <img
                :src="require(`@/assets/images/section-02/${slide.image}.jpg`)"
                alt="image"
                width="97"
                height="97"
              />
            </div>
          </div>
          <p class="desc">{{ slide.text }}</p>
          <div class="testimonial-info">
            <div class="intro">
              <h3 class="name">{{ slide.name }}</h3>
              <div class="position">{{ slide.position }}</div>
            </div>
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { ref, defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Autoplay",
  setup() {
    const carouselArray = ref([
      {
        image: "customer1",
        text:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit, facilisi viverra morbi aptent taciti hendrerit pulvinar ante Per fusce urna venenatis ",
        name: "Charley Pratt",
        position: "Customer",
      },
      {
        image: "customer2",
        text:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit, facilisi viverra morbi aptent taciti hendrerit pulvinar ante Per fusce urna venenatis ",
        name: "Charley Pratt",
        position: "Customer",
      },
      {
        image: "customer3",
        text:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit, facilisi viverra morbi aptent taciti hendrerit pulvinar ante Per fusce urna venenatis ",
        name: "Charley Pratt",
        position: "Customer",
      },
    ]);
    return { carouselArray };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
  },
});
</script>
