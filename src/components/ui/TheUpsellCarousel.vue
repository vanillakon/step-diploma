<template>
  <Carousel
    :settings="settings"
    :breakpoints="breakpoints"
    class="upsell-carousel-wrapper"
  >
    <Slide v-for="(slide, i) in products" :key="slide">
      <div class="carousel__item">
        <shop-table-item
          :key="slide"
          :image="slide.image"
          :price="slide.price"
          :id="slide.id"
          :rating="slide.rating"
          :color="slide.color"
          :call="slide.call"
          :sku="slide.sku"
          :size="slide.size"
        ></shop-table-item>
      </div>
    </Slide>
    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { inject, ref } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import ShopTableItem from "./ShopTableItem.vue";
import "vue3-carousel/dist/carousel.css";
export default {
  setup() {
    const settings = ref({
      itemsToShow: 1,
      snapAlign: "center",
    });
    const breakpoints = ref({
      700: {
        itemsToShow: 2,
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
      products: inject("productsUpsell"),
    };
  },
  components: {
    ShopTableItem,
    Pagination,
    Carousel,
    Slide,
  },
};
</script>
