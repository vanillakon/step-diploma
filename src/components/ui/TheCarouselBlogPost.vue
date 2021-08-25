<template>
  <div class="carousel-blog-post-wrapper">
    <div class="post-wrapper-img">
      <img :src="image" alt="image" />
    </div>
    <div class="row post-wrapper-header">
      <div class="col s12 m12 l12">
        <div class="post-wrapper-title">{{ title }}</div>
      </div>
    </div>
    <div class="row post-wrapper-body">
      <div class="col s4 m4 l4">
        <div class="post-wrapper-time left">
          <i class="large material-icons">access_time</i
          ><span>{{ showTime(time) }}</span>
        </div>
      </div>
      <div class="col s8 m8 l8">
        <div class="post-wrapper-author left">
          <i class="large material-icons">create</i><span>{{ author }}</span>
        </div>
      </div>
    </div>
    <div class="post-wrapper-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque architecto
      recusandae eum unde dolores saepe numquam atque at libero blanditiis.
    </div>
  </div>
</template>
<script>
export default {
  props: ["image", "title", "time", "author"],
  setup(props) {
    function showTime(time) {
      return new Date(+time).toLocaleDateString();
    }
    return {
      image: props.image,
      title: props.title,
      time: props.time,
      author: props.author,
      showTime,
    };
  },
};
</script>
