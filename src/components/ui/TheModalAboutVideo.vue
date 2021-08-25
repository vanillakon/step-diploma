<template>
  <div class="modal-backdrop" @click="$emit('close')"></div>
  <div class="modal-div">
    <div class="icon-container right">
      <i class="small material-icons" @click="$emit('close')">close</i>
    </div>

    <iframe
      width="100%"
      height="350"
      src="https://player.vimeo.com/video/327011118"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen=""
    ></iframe>
  </div>
</template>

<script>
export default {
  emits: ["close", "delete"],
};
</script>
