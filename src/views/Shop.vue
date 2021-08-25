<template>
  <app-banner :page="isPage"></app-banner>
  <div class="container">
    <div class="row">
      <div class="col s4 m4 l4">
        <div class="filter_search">
          <input
            type="text"
            id="inp_search"
            class="browser-default inp_without_m"
            v-model="search"
            placeholder="Search"
          />
          <div class="price-filter"></div>
        </div>
      </div>
      <div class="col s8 m8 l">
        <div class="row">
          <div class="col s12 m12 l12 shop-view-products-wrapper">
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
        </div>
        <div class="row">
          <div class="col s12 m12 l12">
            <component
              :is="componentName"
              :products="paginatedProducts"
            ></component>
            <app-pagination
              v-if="showPagination"
              :pages="pages"
              :pageNum="pageNum"
              @pageClick="pageClick"
              @nextPage="this.pageNum++"
              @prevPage="this.pageNum--"
            ></app-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppShopList from "../components/request/RequestShopList.vue";
import AppShopTable from "../components/request/RequestShopTable.vue";
import AppPagination from "../components/ui/AppPagination.vue";
export default {
  data() {
    return {
      activeComponent: "table",
      pageNum: 1,
      selected: "id",
      search: "",
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  mounted() {
    this.$store.dispatch("shop/getProducts");
  },
  methods: {
    pageClick(page) {
      this.pageNum = page;
    },
  },
  computed: {
    productsPerPage() {
      return this.$store.getters["shop/getPerPage"];
    },
    isPage() {
      return this.$route.path.slice(1);
    },
    products() {
      return this.$store.getters["shop/getProducts"];
    },
    pages() {
      if (this.search.length) {
        return Math.ceil(this.searchedProduct.length / this.productsPerPage);
      } else {
        return this.$store.getters["shop/getPagesProducts"];
      }
    },
    componentName() {
      return "app-shop-" + this.activeComponent;
    },
    paginatedProducts() {
      let from = (this.pageNum - 1) * this.productsPerPage;
      let to = from + this.productsPerPage;
      if (this.searchedProduct.length) {
        return this.searchedProduct.slice(from, to);
      } else {
        return this.products.slice(from, to);
      }
    },
    searchedProduct() {
      const s = this.search.toLowerCase();
      return this.products.filter((n) => {
        return [n.id.toLowerCase()].some((m) =>
          m
            .toString()
            .toLowerCase()
            .includes(s)
        );
      });
    },
    showPagination() {
      return this.paginatedProducts.length || this.searchedProduct.length;
    },
  },

  components: {
    AppShopList,
    AppShopTable,
    AppPagination,
  },
};
</script>
