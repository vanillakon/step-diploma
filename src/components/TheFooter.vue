<template>
  <footer class="page-footer">
    <div class="container">
      <div class="row center">
        <div class="col l12 s12">
          <h3 class="white-text title">Newsletter</h3>
          <h4 class="subtitle">Get Discount 30% Off</h4>
          <p class="desc">
            Nam sed felis at eros blandit ultrices et quis quam. In sit amet
            molestie lectus.
          </p>
          <div class="row newsletter-form-wrap">
            <form class="col s6 l6" @submit.prevent="onSubmit">
              <div class="row">
                <div
                  :class="[
                    'input-field',
                    'col',
                    's12',
                    'offset-s6',
                    'newsletter-form-inner',
                    { invalid: eError },
                  ]"
                >
                  <input
                    id="email"
                    type="email"
                    class="validate email-newslette"
                    placeholder="Enter your email ..."
                    v-model="email"
                  />
                  <a
                    class="button btn-submit submit-newsletter"
                    @click.prevent="onSubmit"
                  >
                    <span class="text">
                      <i class="material-icons">arrow_forward</i>
                    </span>
                  </a>
                  <small v-if="eError">{{ eError }}</small>
                </div>
              </div>
            </form>
          </div>
          <div class="row">
            <div class="col s12 l12 content-socials">
              <ul class="socials-list">
                <li>
                  <a href="https://facebook.com/" target="_blank"
                    ><fa :icon="['fab', 'facebook']"
                  /></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                    <fa :icon="['fab', 'instagram']" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank"
                    ><fa :icon="['fab', 'twitter']"
                  /></a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/" target="_blank"
                    ><fa :icon="['fab', 'pinterest']"
                  /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        <div class="row">
          <div class="col s6 l6 copyright-text">
            © Copyright 2021
            <span><router-link to="/">Organic</router-link></span
            >. All Rights Reserved.
          </div>
          <div class="col s6 l6">
            <a class="right" href="#!">Shipping</a>
            <a class="right" href="#!">Term & Conditions</a>
            <a class="right" href="#!">Contact</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import { useGetDiscount } from "../use/get-discount";
export default {
  setup() {
    return {
      ...useGetDiscount(),
    };
  },
};
</script>
