<template>
  <app-banner :page="isPage"></app-banner>
  <div class="container">
    <div class="row">
      <div class="col s12 m12 l12">
        <the-filter v-model="filter" class="right" :array="posts"></the-filter>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m12 l12">
        <the-blog-list @open="openPost"></the-blog-list>
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed, onMounted, provide, ref } from "vue";
import TheBlogList from "../components/ui/TheBlogList.vue";
import TheFilter from "../components/ui/TheFilter.vue";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const filter = ref({});
    const isPage = computed(() => route.path.slice(1));
    onMounted(() => {
      window.scrollTo(0, 0);
    });
    onMounted(() => {
      store.dispatch("blog/getPosts");
    });
    const openPost = (id) => {
      router.push(`/Blog/${id}`);
    };
    const posts = computed(() =>
      store.getters["blog/getPosts"].filter((elem) => {
        if (filter.value.search) {
          return elem["text"]
            .toLowerCase()
            .includes(filter.value.search.toLowerCase());
        }
        return elem;
      })
    );
    provide("posts", posts);
    return { isPage, posts, filter, openPost };
  },
  components: {
    TheBlogList,
    TheFilter,
  },
};
</script>
