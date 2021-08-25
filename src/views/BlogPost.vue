<template>
  <app-banner :page="isPage"></app-banner>
  <div class="container">
    <div class="row post-btn-back-wrapper">
      <div class="col s12 m12 l12">
        <button class="btn right" @click="back">
          <i class="material-icons">arrow_back</i>
        </button>
      </div>
    </div>
    <div class="row post-info ">
      <div class="col s12 m12 l12 post-info-full">
        <img :src="post.image" alt="image" />
        <div class="post-info">
          <div class="post-title">{{ post.title }}</div>
          <div class="post-meta">
            <i class="material-icons">access_time</i>
            {{ showTime(post.time) }}
          </div>
        </div>
        <div class="post-content">
          <div class="post-text-full">{{ post.text }}</div>
        </div>
        <div class="post-tags">
          <div class="chip" v-for="(chip, i) in post.tags">
            {{ chip }}
          </div>
        </div>
        <div class="post-comments">
          <div class="btn" @click="showComments = !showComments">
            {{
              !showComments ? `Comments ${comments.length}` : "Hide Comments"
            }}
          </div>
          <post-comments
            v-if="showComments"
            :lists="post.comments"
          ></post-comments>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { onMounted, computed, ref } from "vue";
import PostComments from "../components/ui/PostComments.vue";
export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const showComments = ref(false);
    const id = route.params.id;
    const isPage = computed(() => route.path.slice(1));
    onMounted(() => {
      window.scrollTo(0, 0);
    });
    onMounted(() => {
      store.dispatch("blog/getPosts");
    });
    onMounted(() => {
      store.dispatch("blog/getComments", { id });
    });
    const post = computed(() => {
      return store.getters["blog/getPosts"].find((item) => item.id == id);
    });
    const comments = computed(() => store.getters["blog/getComments"]);
    const back = () => {
      router.push("/Blog");
    };
    function showTime(time) {
      return new Date(+time).toLocaleDateString();
    }
    return {
      isPage,
      id,
      comments,
      post,
      showTime,
      back,
      showComments,
    };
  },
  components: {
    PostComments,
  },
};
</script>
