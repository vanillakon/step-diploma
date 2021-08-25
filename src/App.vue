<template>
  <the-navbar :class="{ 'change-nav': scrollPosition > 50 }"></the-navbar>
  <router-view></router-view>
  <back-to-top
    :class="{
      'change-back-to-top': scrollPosition > 5,
      animate__slideInRight: scrollPosition > 5,
    }"
    @action="backToUp"
  ></back-to-top>
  <the-footer></the-footer>
</template>

<script>
import { ref, onMounted } from "vue";
import TheNavbar from "./components/TheNavbar.vue";
import TheFooter from "./components/TheFooter.vue";
import BackToTop from "./components/ui/BackToTop.vue";
export default {
  setup() {
    const scrollPosition = ref(null);
    const updateScroll = () => {
      scrollPosition.value = window.scrollY;
    };
    const backToUp = () => {
      window.scrollTo(0, 0);
    };
    onMounted(() => {
      window.addEventListener("scroll", updateScroll);
    });
    return {
      scrollPosition,
      updateScroll,
      backToUp,
    };
  },
  components: {
    TheNavbar,
    TheFooter,
    BackToTop,
  },
};
</script>
<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
</style>
