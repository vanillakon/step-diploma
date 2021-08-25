<template>
  <div class="carousel-employees-wrapper s12 m12 l12">
    <Carousel :settings="settings" :breakpoints="breakpoints">
      <Slide v-for="(slide, i) in carouselArray" :key="slide">
        <div class="carousel__item carousel-employees row">
          <div class="col s12 m12 l12">
            <figure class="fig">
              <img
                :src="require(`@/assets/images/team/${slide.image}.jpg`)"
                alt="image"
              />
              <figcaption>
                <h6>{{ slide.name }}</h6>
                <p>{{ slide.position }}</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Pagination />
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";
export default defineComponent({
  setup() {
    const carouselArray = ref([
      {
        image: "director",
        name: "Frank Greer",
        position: "Director",
      },
      {
        image: "manager",
        name: "Violet Frase",
        position: "Manager",
      },
      {
        image: "manager2",
        name: "Ayomide Regan",
        position: "Manager",
      },
      {
        image: "manager3",
        name: "Perry Conner",
        position: "Manager",
      },
      {
        image: "hr",
        name: "Mark Tucker",
        position: "HR",
      },
      {
        image: "partner",
        name: "Edward Nolan",
        position: "Partner",
      },
    ]);

    const settings = ref({
      itemsToShow: 1,
      snapAlign: "center",
    });

    const breakpoints = ref({
      700: {
        itemsToShow: 3,
        snapAlign: "center",
      },
      1024: {
        itemsToShow: 3,
        snapAlign: "start",
      },
    });

    return {
      settings,
      breakpoints,
      carouselArray,
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
});
</script>
