<template>
  <a
    class="btn-floating btn-large waves-effect waves-light back-to-top animate__animated"
    @click="$emit('action')"
    ><i class="material-icons">expand_less</i></a
  >
</template>
<script>
import { ref } from "vue";
export default {
  emits: ["action"],
  setup(props, context) {
    const animateIsBack = ref(false);
    return {
      animateIsBack,
    };
  },
};
</script>
