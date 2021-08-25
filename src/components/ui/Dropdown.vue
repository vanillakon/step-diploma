<template>
  <div class="drop-menu-wrapper">
    <transition name="fade">
      <ul class="drop-menu">
        <li v-for="(item, i) in subLinks" :key="item">
          <router-link :to="'/' + item" class="navbar-sublink">{{
            item
          }}</router-link>
        </li>
      </ul>
    </transition>
  </div>
</template>
<script>
export default {
  props: ["subLinks"],
};
</script>
