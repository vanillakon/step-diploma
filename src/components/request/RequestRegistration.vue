<template>
  <div class="account-wrapper contact-message-wrapper">
    <h3>Register</h3>
    <form @submit.prevent="onSubmit">
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
            :disabled="isSubmitting"
            class="btn waves-effect waves-light center"
            type="submit"
            name="action"
          >
            Register
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { useSendRegister } from "../../use/register-form";
export default {
  setup() {
    return {
      ...useSendRegister(),
    };
  },
};
</script>
