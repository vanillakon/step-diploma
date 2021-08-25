<template>
  <div class="row">
    <div class="col s12 m12 l12">
      <ul>
        <li v-for="(elem, i) in products">
          <div class="row">
            <div class="col s4 m4 l4 product-thumb">
              <img :src="elem.image" alt="img" />
            </div>
            <div class="col s6 m6 l6 product-info equal-elem">
              <h3 class="product-name product_title">{{ elem.call }}</h3>
              <div class="rating-wapper"></div>
              <span class="price">$ {{ elem.price }}</span>
              <div class="short-description">
                <p>{{ elem.about }}</p>
                <ul>
                  <li v-for="(item, i) in elem.quality" :key="item">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="col s2 m2 l2 group-button"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["products"],
};
</script>
