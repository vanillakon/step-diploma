<template>
  <div class="shop-table-item">
    <div class="product-header">
      <img :src="image" alt="img" style="height: 145px" />
      <div class="item-operation">
        <div><i class="material-icons">favorite_border</i></div>
        <div
          @click="
            addToCompare(id, call, price, image, color, rating, sku, size)
          "
        >
          <i class="material-icons">compare_arrows</i>
        </div>
        <div @click="openFull">
          <i class="material-icons">visibility</i>
        </div>
        <div
          @click="
            addToWishlist(
              id,
              call,
              price,
              image,
              color,
              rating,
              sku,
              size,
              availability
            )
          "
        >
          <i class="material-icons">add_shopping_cart</i>
        </div>
      </div>
    </div>
    <div class="product-body">
      <div class="call">{{ toUpper(call) }}</div>
      <div class="price">$ {{ price }}</div>
      <div class="rating"></div>
    </div>
    <div class="product-footer">
      <img
        src="../../assets/images/rating-star.png"
        alt="star"
        v-for="(item, i) in 5"
        :key="item"
      />
    </div>
  </div>
</template>
<script>
import { provide } from "vue";
export default {
  props: [
    "id",
    "call",
    "price",
    "image",
    "color",
    "rating",
    "sku",
    "size",
    "availability",
  ],
  emits: ["addToCompare", "openFullInfo", "addToWishlist"],
  setup(props, context) {
    let idNum = props.id;
    function toUpper(item) {
      return item[0].toUpperCase() + item.slice(1);
    }
    const addToCompare = (id, call, price, image, color, rating, sku, size) => {
      context.emit(
        "addToCompare",
        id,
        call,
        price,
        image,
        color,
        rating,
        sku,
        size
      );
    };
    const addToWishlist = (
      id,
      call,
      price,
      image,
      color,
      rating,
      sku,
      size,
      availability
    ) => {
      context.emit(
        "addToWishlist",
        id,
        call,
        price,
        image,
        color,
        rating,
        sku,
        size,
        availability
      );
    };
    const openFull = () => {
      context.emit("openFullInfo");
    };
    provide("id", idNum);
    return {
      idNum,
      image: props.image,
      call: props.call,
      price: props.price,
      id: props.id,
      color: props.color,
      rating: props.rating,
      sku: props.sku,
      size: props.size,
      availability: props.availability,
      addToCompare,
      addToWishlist,
      openFull,
      toUpper,
    };
  },
};
</script>
