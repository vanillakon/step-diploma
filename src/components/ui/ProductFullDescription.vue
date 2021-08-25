<template>
  <div class="row">
    <div class="col s12 m12 l12">
      <div class="row product-description-fblock">
        <div class="col s12 m6 l6 product-description-text">
          <h2 class="product-description-title">
            {{ product.descriptionTitle1 }}
          </h2>
          <p>{{ product.descriptionText1 }}</p>
        </div>
        <div class="col s12 m6 l6">
          <img :src="product.descriptionImage2" alt="image" />
        </div>
      </div>

      <div class="row">
        <div class="col s12 m6 l6">
          <img :src="product.descriptionImage1" alt="image" />
        </div>
        <div class="col s12 m6 l6 product-description-text">
          <h2 class="product-description-title">
            {{ product.descriptionTitle2 }}
          </h2>
          <p>{{ product.descriptionText2 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { inject } from "vue";
export default {
  setup() {
    return {
      product: inject("product"),
    };
  },
};
</script>
