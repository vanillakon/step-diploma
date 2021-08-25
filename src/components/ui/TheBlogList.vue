<template>
  <ul>
    <li v-for="(elem, i) in posts" class="blog-post-wrapper" :key="elem.id">
      <div class="post-thumb">
        <img :src="elem.image" alt="img" />
      </div>
      <div class="post-info">
        <div class="post-title">{{ elem.title }}</div>
        <div class="post-meta">
          <i class="material-icons">access_time</i>
          {{ showTime(elem.time) }}
          /
          {{ elem.author }}
        </div>
      </div>
      <div class="post-content block-with-slice">
        <div class="post-text">{{ elem.text }}</div>
      </div>
      <div class="post-link">
        <div class="button-wrap">
          <a href="#" @click.prevent="openItem(elem.id)"> More...</a>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
import { inject } from "vue";
export default {
  emit: ["open"],
  setup(_, context) {
    const openItem = (id) => {
      context.emit("open", id);
    };
    function showTime(time) {
      return new Date(+time).toLocaleDateString();
    }
    return {
      posts: inject("posts"),
      openItem,
      showTime,
    };
  },
};
</script>
