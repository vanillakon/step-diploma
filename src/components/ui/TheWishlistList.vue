<template>
  <table class="wishlist-tavle-wrapper">
    <tbody>
      <tr v-for="(elem, i) in wishlist" :key="elem" class="wishlist-tr">
        <td class="wishlist-elem-delete center">
          <button class="btn item-compare-delete" @click="deleteItem(elem.id)">
            <i class="material-icons">delete</i>
          </button>
        </td>
        <td class="wishlist-elem-image center">
          <img :src="elem.image" alt="img" />
        </td>
        <td class="center wishlist-elem-call">{{ elem.call }}</td>

        <td class="center">{{ elem.price }}</td>
        <td class="center wishlist-elem-availability">
          {{ elem.availability }}
        </td>
        <td class="center wishlist-elem-btn">
          <router-link to="/" class="waves-effect waves-light btn"
            >Add to cart</router-link
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { inject } from "vue";
export default {
  emits: ["deleteItemWishlist"],
  setup(_, context) {
    const deleteItem = (id) => {
      context.emit("deleteItemWishlist", id);
    };
    return {
      deleteItem,
      wishlist: inject("wishlistElems"),
    };
  },
};
</script>
