<template>
  <div class="row carousel-main-wrapper">
    <div class="col s12 m12 l12 carousel-main">
      <Carousel :wrap-around="true">
        <Slide v-for="(slide, i) in carouselArray" :key="slide">
          <div class="row">
            <div class="col s12 m12 l12">
              <img
                :src="
                  require(`@/assets/images/carousel-main/${slide.image}.jpg`)
                "
                alt="image"
              />
              <div class="container">
                <div class="row slide-info">
                  <div class="col s6 m6 l6 ">
                    <div class="row">
                      <div class="col s4 m4 l4"></div>
                      <div class="col s8 m8 l8 carousel__item_text">
                        <h1>
                          {{ slide.h1 }}
                        </h1>
                        <h5>{{ slide.h5 }}</h5>
                        <h2>
                          <span>{{ slide.span }}</span>
                          {{ slide.h2 }}
                        </h2>
                        <router-link to="/Shop">Shop now</router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
export default defineComponent({
  setup() {
    const carouselArray = ref([
      {
        image: "orange",
        h1: "SUMMER",
        h5: "Natural Orange",
        span: "Sweet &",
        h2: "fresh",
        link: "#",
      },
      {
        image: "banan",
        h1: "SPRING",
        h5: "New Arrivals",
        span: "Natural &",
        h2: "delicious",
        link: "#",
      },
      {
        image: "tomato",
        h1: "AUTUMN",
        h5: "Best Seller",
        span: "Fresh &",
        h2: "healthy",
        link: "#",
      },
    ]);
    return {
      carouselArray,
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
  },
});
</script>
