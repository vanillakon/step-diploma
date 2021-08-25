<template>
  <ul class="pagination " v-if="pages > 1">
    <li
      :class="['li-with-chevron', { disabledBtn: pageNum === 1 }]"
      @click="$emit('prevPage')"
    >
      <i class="material-icons">chevron_left</i>
    </li>
    <li
      class="waves-effect"
      v-for="page in pages"
      :key="page"
      @click="$emit('pageClick', page)"
      :class="{ active: pageNum === page }"
    >
      {{ page }}
    </li>
    <li
      class="waves-effect li-with-chevron"
      @click="$emit('nextPage')"
      :class="{ disabledBtn: pageNum === isPage }"
    >
      <i class="material-icons">chevron_right</i>
    </li>
  </ul>
</template>
<script>
export default {
  emits: ["pageClick", "nextPage", "prevPage"],
  props: {
    pageNum: Number,
    pages: Number,
  },
  computed: {
    isPage() {
      return this.$store.getters["shop/getPagesProducts"];
    },
  },
};
</script>
