<template>
  <div class="row app-banner-wrapper">
    <div class="col s12 m12 l12" style="margin: 0; padding: 0;">
      <div class="row">
        <div class="col s0 m4 l4 xl4"></div>
        <div class="col s12 m4 l4 xl4">
          <div class="banner-text-wrapper">
            <h1 class="page-title">{{ thisPage }}</h1>
            <div class="page-links">
              <router-link to="/">Home</router-link>
              <i class="material-icons">chevron_right</i>
              <p>{{ thisPage }}</p>
            </div>
          </div>
        </div>
        <div class="col s0 m4 l4 xl4"></div>
      </div>
      <div class="row">
        <div class="col m12 l12" style="margin: 0; padding: 0;">
          <div class="banner-img"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["page"],
  setup(props) {
    return {
      thisPage: props.page,
    };
  },
};
</script>
