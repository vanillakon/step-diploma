<template>
  <app-banner :page="isPage"></app-banner>
  <div class="container">
    <div class="row">
      <div class="col s12 m12 l12">
        <div class="heading-style-01">
          <div class="heading-inner">
            <div class="title">
              Instagram Feed Grid
            </div>
            <div class="subtitle">
              Lorem ipsum dolor sit amet consectetur adipiscing elit erat
              vehicula ad, mollis viverra vulputate
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m12 l12 shop-view-products-wrapper">
        <div class="container">
          <a
            class="waves-effect waves-light btn left"
            :class="{ active: activeComponent == 'table' }"
            @click="activeComponent = 'table'"
          >
            <i class="material-icons">grid_on</i>
          </a>
          <a
            class="waves-effect waves-light btn left"
            :class="{ active: activeComponent == 'list' }"
            @click="activeComponent = 'list'"
          >
            <i class="material-icons">format_list_bulleted</i>
          </a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m12 l12">
        <component
          :is="componentName"
          :products="paginatedProducts"
          @like="addLike"
        ></component>
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { ref, computed, onMounted } from "vue";
import InstaList from "../components/ui/InstaList.vue";
import InstaTable from "../components/ui/InstaTable.vue";
export default {
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
    const route = useRoute();
    const store = useStore();
    const isPage = computed(() => route.path.slice(1));
    const activeComponent = ref("list");
    const addLike = async (i, l) => {
      await store.dispatch("insta/addLike", {
        id: "insta" + i,
        obj: { like: +l + 1 },
      });
    };
    const componentName = computed(() => {
      return "insta-" + activeComponent.value;
    });

    return {
      activeComponent,
      isPage,
      componentName,
      addLike,
    };
  },
  components: {
    InstaList,
    InstaTable,
  },
};
</script>
