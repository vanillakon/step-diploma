<template>
  <Carousel
    :settings="settings"
    :breakpoints="breakpoints"
    class="carousel-compare-wrapper"
  >
    <Slide v-for="(slide, i) in compareElems" :key="slide">
      <div class="carousel__item">
        <div class="carousel__item__header">
          <img :src="slide.image" alt="image" />
          <h5 class="item-title">{{ slide.call }}</h5>
        </div>
        <div class="carousel__item__body">
          <p class="item-price"><span>$</span>{{ slide.price }}</p>
          <p class="item-sku">{{ slide.sku }}</p>
          <p class="item-color">
            {{ changeArray(slide.color) }}
          </p>
          <p class="item-size">{{ changeArray(slide.size) }}</p>
          <button class="btn item-add-to-cart">
            <span>Add to cart</span>
          </button>
          <button class="btn item-compare-delete" @click="deleteItem(slide.id)">
            <i class="material-icons">delete</i>
          </button>
        </div>
      </div>
    </Slide>
    <template #addons> </template>
  </Carousel>
</template>

<script>
import { ref, inject } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  setup(_, context) {
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
    const deleteItem = (id) => {
      context.emit("deleteItem", id);
    };
    function changeArray(arr) {
      let str = "";
      arr.map((elem, i) => {
        if (i < arr.length - 1) {
          str += elem + ", ";
        } else {
          str += elem;
        }
      });
      return str;
    }
    return {
      settings,
      breakpoints,
      changeArray,
      deleteItem,
      compareElems: inject("compareElems"),
    };
  },
  components: {
    Carousel,
    Slide,
  },
};
</script>
