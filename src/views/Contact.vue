<template>
  <app-banner :page="isPage"></app-banner>
  <div class="container">
    <div class="row">
      <div class="col s12 m12 l12"></div>
    </div>
    <div class="row">
      <div class="col s12 m12 l12">
        <the-map></the-map>
      </div>
    </div>
    <div class="row contact-info-wrapper">
      <div class="col s12 m6 l6 contact-text-wrapper">
        <h4>WP SHOP THEME</h4>
        <p>
          3100 West Cary Street Richmond, Virginia 23221 <br />
          P: 804.355.4383 F: 804.367.7901
        </p>
        <h4>Store Hours</h4>
        <p>
          Monday-Saturday 11am-7pm ET <br />
          Sunday 11am-6pm ET
        </p>
        <h4>Specialist Hours</h4>
        <p>Monday-Friday 9am-5pm ET</p>
      </div>
      <div class="col s12 m6 l6 contact-message-wrapper">
        <form @submit.prevent="onSubmit">
          <div class="row">
            <div :class="['input-field', 'col', 's12', { invalid: nError }]">
              <input
                @blur="nBlur"
                id="name"
                type="text"
                class="validate"
                placeholder="Name"
                v-model="name"
              />
              <small v-if="nError">{{ nError }}</small>
            </div>
          </div>

          <div class="row">
            <div :class="['input-field', 'col', 's12', { invalid: eError }]">
              <input
                id="email"
                type="email"
                class="validate"
                placeholder="Email"
                v-model="email"
                @blur="eBlur"
              />
              <small v-if="eError">{{ eError }}</small>
            </div>
          </div>

          <div class="row">
            <div :class="['input-field', 'col', 's12', { invalid: tError }]">
              <textarea
                id="textarea1"
                class="materialize-textarea"
                placeholder="Youre message"
                v-model="text"
                @blur="tBlur"
              ></textarea>
              <small v-if="tError">{{ tError }}</small>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <button
                :disabled="isSubmitting"
                class="btn waves-effect waves-light right"
                type="submit"
                name="action"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import TheMap from "../components/ui/Map.vue";
import { useRoute } from "vue-router";
import { computed, onMounted } from "vue";
import { useSendMessage } from "../use/send-message";
export default {
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
    const route = useRoute();
    const isPage = computed(() => route.path.slice(1));
    return {
      isPage,
      ...useSendMessage(),
    };
  },
  components: {
    TheMap,
  },
};
</script>
