<template>
  <Carousel
    :settings="settings"
    :breakpoints="breakpoints"
    class="related-carousel-wrapper"
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
          @addToCompare="addCompare"
          @openFullInfo="openFullProductInfo(slide.id)"
        ></shop-table-item>
      </div>
    </Slide>
    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { inject, ref, computed } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import ShopTableItem from "./ShopTableItem.vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import "vue3-carousel/dist/carousel.css";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
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

    const compareElems = computed(
      () => store.getters["compare/getCompareElems"]
    );
    const addCompare = (id, call, price, image, color, rating, sku, size) => {
      if (compareElems.value.some((e) => e.id == id)) {
        router.push("/Compare");
      } else {
        store.dispatch("compare/addCompareElem", {
          id,
          call,
          price,
          image,
          color,
          rating,
          sku,
          size,
        });
      }
    };
    const openFullProductInfo = (id) => {
      router.push(`/Shop/${id}`);
    };

    return {
      openFullProductInfo,
      addCompare,
      compareElems,
      breakpoints,
      settings,
      products: inject("productsRelated"),
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
