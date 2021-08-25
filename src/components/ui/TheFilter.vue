<template>
  <div class="header_filters">
    <div class="filter_search">
      <input
        type="text"
        id="inp_search"
        class="browser-default"
        v-model="search"
        placeholder="Search"
      />
    </div>
  </div>
</template>
<script>
import { ref, watch, computed } from "vue";

export default {
  emits: ["update:modelValue"],
  props: ["modelValue", "array"],
  setup(props, { emit }) {
    const search = ref();
    watch([search], (values) => {
      emit("update:modelValue", {
        search: values[0],
      });
    });
    const isActive = computed(() => search.value);
    return {
      search,
      isActive,
      reset: () => {
        search.value = "";
      },
      array: props.array,
    };
  },
};
</script>
