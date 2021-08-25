<template>
  <div class="account-wrapper contact-message-wrapper">
    <h3>Login</h3>
    <form @submit.prevent="onSubmitLogin">
      <div class="row">
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
        <div :class="['input-field', 'col', 's12', { invalid: pError }]">
          <input
            @blur="pBlur"
            id="password"
            type="password"
            class="validate"
            placeholder="Password"
            v-model="password"
          />
          <small v-if="pError">{{ pError }}</small>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <button
            :disabled="isSubmitting || isTooManyAttempts"
            class="btn waves-effect waves-light center"
            type="submit"
            name="action"
          >
            Login
          </button>
          <div class="text-danger" v-if="isTooManyAttempts">
            Many login attempts
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { useSendLogin } from "../../use/login-form";
export default {
  setup() {
    return {
      ...useSendLogin(),
    };
  },
};
</script>
