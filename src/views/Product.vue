<template>
  <div class="row">
    <div class="col s12 m12 l12 left"></div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col s12 m6 l6">
        <figure class="product-full-image">
          <img :src="product.image" alt="image" />
          <figcaption class="fig-caption">
            <div class="item-operation">
              <div><i class="material-icons">favorite_border</i></div>
            </div>
          </figcaption>
        </figure>
      </div>
      <div class="col s12 m6 l6">
        <div class="product-full-info">
          <h1 class="product-full-info__title">{{ product.call }}</h1>
          <p class="price">$ {{ product.price }}</p>
          <p class="stock">
            Availability: <span>{{ product.availability }}</span>
          </p>
          <div class="product-full-info__discription">
            <p class="discription-text">{{ product.about }}</p>
            <ul class="description-list">
              <li v-for="item in product.quality" :key="item">
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="variations_form"></div>
          <div class="opertaions-form">
            <div class="add-to-wishlist">
              <i class="material-icons">favorite_border</i>
              <span>Add to Wishlist</span>
            </div>
            <div
              class="add-to-compare-full"
              @click="
                addToCompare(
                  product.id,
                  product.call,
                  product.price,
                  product.image,
                  product.color,
                  product.rating,
                  product.sku,
                  product.size
                )
              "
            >
              <i class="material-icons">compare_arrows</i>
              <span>Compare</span>
            </div>
          </div>
          <div class="product-full-meta">
            <div class="sku-wrapper">
              SKU:<span>{{ product.sku }}</span>
            </div>
            <div class="categories-wrapper">
              <span>Categories:</span>
              {{ changeArray(product.categories) }}
            </div>
            <div class="tags-wrapper">
              <span>Tags:</span>
              {{ changeArray(product.tags) }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m12 l12 center product-full-components-wrapper">
        <div
          :class="{ active: activeComponent == 'description' }"
          @click="activeComponent = 'description'"
        >
          Description
        </div>
        <div
          :class="{ active: activeComponent == 'additional' }"
          @click="activeComponent = 'additional'"
        >
          Additional information
        </div>
        <div
          :class="{ active: activeComponent == 'reviews' }"
          @click="activeComponent = 'reviews'"
        >
          Reviews
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m12 l12">
        <component :is="componentName"></component>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m12 l12 center">
        <h2 class="product-grid-title">
          <span>Related Products</span>
        </h2>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m12 l12">
        <the-related-carousel></the-related-carousel>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m12 l12 center">
        <h2 class="product-grid-title">
          <span>Upsell Products</span>
        </h2>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m12 l12">
        <the-upsell-carousel></the-upsell-carousel>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { onMounted, computed, ref, provide } from "vue";
import ProductFullAdditional from "../components/ui/ProductFullAdditional.vue";
import ProductFullDescription from "../components/ui/ProductFullDescription.vue";
import ProductFullReviews from "../components/ui/ProductFullReviews.vue";
import TheRelatedCarousel from "../components/ui/TheRelatedCarousel.vue";
import TheUpsellCarousel from "../components/ui/TheUpsellCarousel.vue";
export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const id = route.params.id;
    const activeComponent = ref("description");
    const isPage = computed(() => route.path.slice(1));
    onMounted(() => {
      window.scrollTo(0, 0);
    });
    onMounted(() => {
      store.dispatch("shop/getProducts");
    });
    onMounted(() => {
      store.dispatch("compare/getCompareElems");
    });
    const product = computed(() => {
      return store.getters["shop/getProducts"].find((item) => item.id == id);
    });
    const products = computed(() => {
      return store.getters["shop/getProducts"];
    });
    let componentName = computed(() => "product-full-" + activeComponent.value);
    const compareElems = computed(
      () => store.getters["compare/getCompareElems"]
    );
    const filterProductsRelated = computed(() =>
      products.value.filter((e, i) => {
        if (product.value.related.includes(e.id)) {
          return e;
        }
      })
    );
    const filterProductsUpsell = computed(() =>
      products.value.filter((e, i) => {
        if (product.value.upsell.includes(e.id)) {
          return e;
        }
      })
    );
    const back = () => {
      router.push("/Shop");
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
    function addToCompare(id, call, price, image, color, rating, sku, size) {
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
    }
    provide("product", product.value);
    provide("productsRelated", filterProductsRelated.value);
    provide("productsUpsell", filterProductsUpsell.value);
    return {
      id,
      isPage,
      product,
      activeComponent,
      componentName,
      compareElems,
      products,
      filterProductsRelated,
      filterProductsUpsell,
      addToCompare,
      back,
      changeArray,
    };
  },
  components: {
    ProductFullAdditional,
    ProductFullDescription,
    ProductFullReviews,
    TheRelatedCarousel,
    TheUpsellCarousel,
  },
};
</script>
