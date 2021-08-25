<template>
  <div class="row product-additional-wrapper">
    <div class="col s2 m2 l2 product-additional-title">Color</div>
    <div class="col s10 m10 l10 product-additional-text">
      {{ changeArray(product.color) }}
    </div>
  </div>
</template>
<script>
import { inject } from "vue";
export default {
  setup() {
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
      product: inject("product"),
      changeArray,
    };
  },
};
</script>
