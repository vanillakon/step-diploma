<template>
  <div class="container">
    <div class="not-found">
      <div class="row">
        <div class="col s12 m12 l12">
          <h1 class="title-404">404</h1>
          <h1 class="title">Opps! This page Could Not Be Found!</h1>
          <p class="subtitle">
            Sorry bit the page you are looking for does not exist, have been
            removed or name changed
          </p>
          <router-link to="/" class="waves-effect waves-light btn"
            ><i class="material-icons right">home</i>Back to
            hompage</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted } from "vue";
export default {
  components: {
    setup() {
      onMounted(() => {
        window.scrollTo(0, 0);
      });
    },
  },
};
</script>
