<template>
  <app-banner :page="isPage"></app-banner>
  <div class="container">
    <div class="row">
      <div class="col s12 m12 l12" v-if="wishlistElems.length">
        <the-wishlist-list @deleteItemWishlist="deleteItem"></the-wishlist-list>
      </div>
      <div class="col s12 m12 l12 empty-comments" v-else @click="goBack">
        <span>Wishlist list is empty</span>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, provide, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import TheWishlistList from "../components/ui/TheWishlistList";
export default {
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
    onMounted(() => {
      store.dispatch("wishlist/getWishlistElems");
    });
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const isPage = computed(() => route.path.slice(1));
    const wishlistElems = computed(
      () => store.getters["wishlist/getWishlistElems"]
    );
    const deleteItem = async (id) => {
      store.dispatch("wishlist/deleteWishlistElem", id);
    };
    const goBack = () => {
      router.push("/Shop");
    };
    provide("wishlistElems", wishlistElems);
    return {
      isPage,
      deleteItem,
      wishlistElems,
      goBack,
    };
  },
  components: {
    TheWishlistList,
  },
};
</script>
