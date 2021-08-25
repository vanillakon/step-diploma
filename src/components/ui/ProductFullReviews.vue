<template>
  <div class="row pruduct-reviews-wrapper">
    <div class="col s12 m12 l12" v-if="comments.length">
      <product-full-reviews-comment
        v-for="comment in comments"
        :key="comment"
        :name="comment.name"
        :email="comment.email"
        :text="comment.text"
        :rating="comment.rating"
      ></product-full-reviews-comment>
    </div>
    <div class="col s12 m12 l12 center empty-comments" v-else>
      <span>Comments list is empty</span>
    </div>
  </div>
  <div class="row">
    <div
      class="col s12 m6 l6 contact-message-wrapper product-reviews-comment-wrapper"
    >
      <form @submit.prevent="onSubmitComment">
        <div class="row">
          <div :class="['input-field', 'col', 's12', { invalid: nError }]">
            <input
              @blur="nBlur"
              id="name"
              type="text"
              class="validate"
              placeholder="Name"
              v-model="name"
            />
            <small v-if="nError">{{ nError }}</small>
          </div>
        </div>

        <div class="row">
          <div :class="['input-field', 'col', 's12', { invalid: eError }]">
            <input
              id="email"
              type="email"
              class="validate"
              placeholder="Email"
              v-model="email"
              @blur="eBlur"
            />
            <small v-if="eError">{{ eError }}</small>
          </div>
        </div>

        <div class="row">
          <div :class="['input-field', 'col', 's12', { invalid: tError }]">
            <textarea
              id="textarea1"
              class="materialize-textarea"
              placeholder="Youre comment"
              v-model="text"
              @blur="tBlur"
            ></textarea>
            <small v-if="tError">{{ tError }}</small>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <button
              :disabled="isSubmitting"
              class="btn waves-effect waves-light right"
              type="submit"
              name="action"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import ProductFullReviewsComment from "./ProductFullReviewsComment.vue";
import { useSendMessage } from "../../use/send-message";
export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const id = route.params.id;
    onMounted(() => {
      console.log(id);
      store.dispatch("shop/getComments", {
        id,
      });
    });
    const comments = computed(() => store.getters["shop/getComments"]);
    return {
      comments,
      id,
      ...useSendMessage(),
    };
  },
  components: {
    ProductFullReviewsComment,
  },
};
</script>
