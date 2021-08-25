<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m12 l12 insta-table-wrapper">
        <ul>
          <li v-for="(elem, i) in images" :key="elem">
            <div class="row">
              <div class="col s12 m12 l6 insta-img">
                <figure class="fig">
                  <img :src="elem.image" alt="image" />
                  <figcaption class="fig-caption">
                    <div class="insta-btn-wrapper">
                      <button
                        class="btn waves-effect waves-light"
                        @click="addLike(elem.id, elem.like)"
                      >
                        <fa :icon="['fas', 'heart']" style="font-size: 40px" />
                      </button>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div class="col s12 m12 l6 insta-text">
                <h3>{{ elem.title }}</h3>
                <p>{{ elem.text }}</p>
                <p>
                  <span><fa :icon="['fas', 'heart']" /> {{ elem.like }}</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  /* props: ["instaFeed"], */
  emits: ["like"],
  setup(props, context) {
    const store = useStore();
    const addLike = (elem, likes) => {
      context.emit("like", elem, likes);
    };
    onMounted(() => {
      store.dispatch("insta/getImages");
    });
    const images = computed(() => store.getters["insta/getImages"]);
    return {
      /* objImages: props.instaFeed, */
      addLike,
      images,
    };
  },
};
</script>
