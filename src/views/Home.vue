<template>
  <the-carousel></the-carousel>
  <section-01></section-01>
  <div class="container">
    <div class="heading-style-01">
      <div class="heading-inner">
        <div class="title">
          Top Trend
        </div>
        <div class="subtitle">
          Browse our website for the hottest items in the marketplace now.
        </div>
      </div>
    </div>
    <div class="home-products-wrapper">
      <app-shop-table :products="products"></app-shop-table>
    </div>
    <div class="row">
      <div class="col s12 m12 l">
        <div class="shop-all">
          <router-link to="/Shop">Discovery All</router-link>
        </div>
      </div>
    </div>
  </div>
  <section-02></section-02>
  <div class="container">
    <div class="heading-style-01">
      <div class="heading-inner">
        <div class="title">
          From Our Blog
        </div>
        <div class="subtitle">
          Lorem ipsum dolor sit amet consectetur adipiscing elit erat vehicula
          ad, mollis viverra vulputate.
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m12 l12">
        <the-carousel-blog></the-carousel-blog>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col s12 m12 l12">
      <div class="heading-style-01">
        <div class="heading-inner">
          <div class="title">
            Follow Us
          </div>
          <div class="subtitle">@organicstore</div>
        </div>
      </div>
    </div>
  </div>

  <div class="row carousel-sub-wrapper">
    <div class="col s12 m12 l12">
      <the-carousel-sub></the-carousel-sub>
    </div>
  </div>
</template>
<script>
import TheCarouselSub from "../components/ui/TheCarouselSub.vue";
import TheCarouselBlog from "../components/ui/TheCarouselBlog.vue";
import TheCarousel from "../components/ui/TheCarousel.vue";
import Section01 from "../components/ui/Section01.vue";
import Section02 from "../components/ui/Section02.vue";
import AppShopTable from "../components/request/RequestShopTable.vue";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    onMounted(() => {
      window.scrollTo(0, 0);
    });
    onMounted(() => {
      store.dispatch("shop/getProducts");
    });
    const products = computed(() =>
      store.getters["shop/getProducts"].slice(0, 9)
    );
    return { products };
  },
  components: {
    TheCarousel,
    TheCarouselSub,
    Section01,
    Section02,
    AppShopTable,
    TheCarouselBlog,
  },
};
</script>
