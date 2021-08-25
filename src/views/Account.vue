<template>
  <app-banner :page="isPage"></app-banner>
  <loader class="pregress-custom" />
  <div class="container">
    <div class="row">
      <div class="col s12 m6 l6 account-login-wrapper">
        <request-login></request-login>
        <app-message></app-message>
      </div>
      <div class="col s12 m6 l6 account-reg-wrapper">
        <request-registration></request-registration>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, provide, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import RequestRegistration from "../components/request/RequestRegistration.vue";
import RequestLogin from "../components/request/RequestLogin.vue";
import AppMessage from "../components/ui/AppMessage.vue";
export default {
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
    const route = useRoute();
    const store = useStore();
    const isPage = computed(() => route.path.slice(1));
    return {
      isPage,
    };
  },
  components: {
    RequestRegistration,
    RequestLogin,
    AppMessage,
  },
};
</script>
<style scoped>
.app-banner-wrapper {
  margin-bottom: 0px !important;
}
.container {
  margin-top: 100px !important;
}
</style>
