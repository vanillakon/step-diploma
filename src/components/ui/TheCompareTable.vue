<template>
  <the-carousel-compare @deleteItem="deleteItemCompare"></the-carousel-compare>
</template>
<script>
import TheCarouselCompare from "../ui/TheCarouselCompare.vue";
export default {
  emits: ["deleteItemCompare"],
  setup(_, context) {
    const deleteItemCompare = (id) => {
      context.emit("deleteItemCompare", id);
    };
    return {
      deleteItemCompare,
    };
  },
  components: {
    TheCarouselCompare,
  },
};
</script>
