<template>
  <div class="insta-table-item">
    <div class="product-header">
      <img :src="image" alt="img" style="height: 145px" />
      <div class="item-operation">
        <div><i class="material-icons">favorite_border</i></div>
        <div @click="addToCompare(id, title, price, image, color, rating)">
          <i class="material-icons">compare_arrows</i>
        </div>
        <div><i class="material-icons">visibility</i></div>
        <div><i class="material-icons">add_shopping_cart</i></div>
      </div>
    </div>
    <div class="product-body">
      <div class="title">{{ toUpper(title) }}</div>
      <div class="price">$ {{ price }}</div>
      <div class="rating"></div>
    </div>
    <div class="product-footer">
      <img
        src="../../assets/images/rating-star.png"
        alt="star"
        v-for="item in 5"
        :key="item"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "price", "image", "id", "color", "rating"],
  emits: ["addToCompare"],
  setup(props, context) {
    function toUpper(item) {
      return item[0].toUpperCase() + item.slice(1);
    }
    const addToCompare = (id, title, price, image, color, rating) => {
      context.emit("addToCompare", title, id, price, image, color, rating);
    };
    return {
      image: props.image,
      title: props.title,
      price: props.price,
      id: props.id,
      color: props.color,
      rating: props.rating,
      addToCompare,
      toUpper,
    };
  },
};
</script>
