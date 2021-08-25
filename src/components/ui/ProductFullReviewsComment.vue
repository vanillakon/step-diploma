<template>
  <div class="row">
    <div class="col s12 m6 l6 comment-wrapper">
      <div class="row">
        <div class="col s12 m12 l12">
          <div class="row comment-header">
            <div class="col s6 m6 l6 left">{{ name }}</div>
            <div class="col s6 m6 l6 right">{{ email }}</div>
          </div>
        </div>
      </div>
      <div class="row comment-body">
        <div class="col s12 m12 l12">{{ text }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["name", "email", "text", "rating"],
  setup(props) {
    return {
      name: props.name,
      email: props.email,
      text: props.text,
      rating: props.rating,
    };
  },
};
</script>
