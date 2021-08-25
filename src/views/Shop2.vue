<template>
  <app-banner :page="isPage"></app-banner>
  <div class="container">
    <div class="row">
      <div class="col s12 m12 l12 shop-view-products-wrapper">
        <div class="row">
          <div class="col s6 m6 l6 shop-product-views">
            <a
              class="waves-effect waves-light btn left"
              :class="{ active: activeComponent == 'table' }"
              @click="activeComponent = 'table'"
            >
              <i class="material-icons">grid_on</i>
            </a>
            <a
              class="waves-effect waves-light btn left"
              :class="{ active: activeComponent == 'list' }"
              @click="activeComponent = 'list'"
            >
              <i class="material-icons">format_list_bulleted</i>
            </a>
          </div>
          <div class="col s6 m6 l6 shop-products-search">
            <the-filter-products
              v-model="filter"
              class="right"
            ></the-filter-products>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s4 m4 l4"></div>
      <div class="col s8 m8 l8">
        <component :is="componentName"></component>
        <app-pagination
          :pages="pages"
          :pageNum="pageNum"
          pageIsUse="books"
          @pageClick="pageClick"
          @nextPage="this.pageNum++"
          @prevPage="this.pageNum--"
        ></app-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed, onMounted, ref, provide } from "vue";

import AppShopList from "../components/request/RequestShopList.vue";
import AppShopTable from "../components/request/RequestShopTable.vue";
import TheFilterProducts from "../components/ui/TheFilter.vue";
import AppPagination from "../components/ui/AppPagination.vue";
export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    const isPage = computed(() => route.path.slice(1));
    const activeComponent = ref("table");
    const filter = ref({});
    const productsPerPage = ref(6);
    const pageNum = ref(1);
    const search = ref("");
    onMounted(() => {
      window.scrollTo(0, 0);
    });
    onMounted(() => {
      store.dispatch("shop/getProducts");
    });

    let products = computed(() => {
      return store.getters["shop/getProducts"]
        .filter((request) => {
          if (filter.value.search) {
            return request.call.includes(filter.value.search);
          }
          return request;
        })
        .filter((request) => {
          if (filter.value.selected) {
            return filter.value.status === request.status;
          }
          return request;
        });
    });

    const pages = computed(() => {
      if (search.length) {
        return Math.ceil(searchedProduct.length / productsPerPage);
      } else {
        return store.getters.getPagesProducts;
      }
    });

    const paginatedProducts = computed(() => {
      let from = (pageNum - 1) * productsPerPage;
      let to = from + productsPerPage;
      if (searchedProduct.length) {
        return searchedProduct.slice(from, to);
      } else {
        return products.slice(from, to);
      }
    });
    const searchedProduct = computed(() => {
      return products;
    });

    const showPagination = computed(() => {
      return paginatedProducts.length || searchedProduct.length;
    });

    const componentName = computed(() => "app-shop-" + activeComponent.value);

    provide("products", products);
    return {
      isPage,
      products,
      activeComponent,
      componentName,
      filter,
      showPagination,
      paginatedProducts,
      pages,
      pageNum,
      productsPerPage,
      search,
    };
  },
  components: {
    AppShopList,
    AppShopTable,
    TheFilterProducts,
    AppPagination,
  },
};
</script>
