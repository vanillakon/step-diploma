<template>
  <div class="row">
    <div class="col s12 m12 l12 table-item-wrapper">
      <shop-table-item
        v-for="(product, i) in products"
        :key="product"
        :image="product.image"
        :price="product.price"
        :id="product.id"
        :rating="product.rating"
        :color="product.color"
        :call="product.call"
        :sku="product.sku"
        :size="product.size"
        :availability="product.availability"
        @addToCompare="addCompare"
        @addToWishlist="addWishlist"
        @openFullInfo="openFullProductInfo(product.id)"
      ></shop-table-item>
    </div>
  </div>
</template>
<script>
import ShopTableItem from "../ui/ShopTableItem.vue";

export default {
  props: ["products", "compare"],
  mounted() {
    this.$store.dispatch("compare/getCompareElems");
    this.$store.dispatch("wishlist/getWishlistElems");
  },
  computed: {
    compareElems() {
      return this.$store.getters["compare/getCompareElems"];
    },
    wishlistElems() {
      return this.$store.getters["wishlist/getWishlistElems"];
    },
  },
  methods: {
    addCompare(id, call, price, image, color, rating, sku, size) {
      if (this.compareElems.some((e) => e.id == id)) {
        this.$router.push("/Compare");
      } else {
        this.$store.dispatch("compare/addCompareElem", {
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
    },
    addWishlist(
      id,
      call,
      price,
      image,
      color,
      rating,
      sku,
      size,
      availability
    ) {
      if (this.wishlistElems.some((e) => e.id == id)) {
        this.$router.push("/Wishlist");
      } else {
        this.$store.dispatch("wishlist/addWishlistElem", {
          id,
          call,
          price,
          image,
          color,
          rating,
          sku,
          size,
          availability,
        });
      }
    },
    openFullProductInfo(id) {
      this.$router.push(`/Shop/${id}`);
    },
  },
  components: {
    ShopTableItem,
  },
};
</script>
