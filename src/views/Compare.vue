<template>
  <app-banner :page="isPage"></app-banner>
  <div class="container">
    <div class="row">
      <div class="col s12 m12 l12" v-if="compareElems.length">
        <the-compare-table @deleteItemCompare="deleteItem"></the-compare-table>
      </div>
      <div class="col s12 m12 l12 empty-comments" v-else @click="goBack">
        <span>Compare list is empty</span>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, provide, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import TheCompareTable from "../components/ui/TheCompareTable";
export default {
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
    onMounted(() => {
      store.dispatch("compare/getCompareElems");
    });
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const isPage = computed(() => route.path.slice(1));
    const compareElems = computed(
      () => store.getters["compare/getCompareElems"]
    );
    const deleteItem = async (id) => {
      store.dispatch("compare/deleteCompareElem", id);
    };
    const goBack = () => {
      router.push("/Shop");
    };
    provide("compareElems", compareElems);
    return {
      isPage,
      deleteItem,
      compareElems,
      goBack,
    };
  },
  components: {
    TheCompareTable,
  },
};
</script>
