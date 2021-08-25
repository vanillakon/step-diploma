import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import axios from "axios";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { computed, watch } from "vue";
export function useSendLogin() {
  const { handleSubmit, isSubmitting, submitCount } = useForm();
  const store = useStore();
  const route = useRoute();
  const router = useRouter();
  const { value: password, errorMessage: pError, handleBlur: pBlur } = useField(
    "password",
    yup
      .string()
      .trim()
      .required("Please, enter your password")
  );
  const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
    "email",
    yup
      .string()
      .trim()
      .required("Please, enter email")
      .email("Invalid email")
  );

  const isTooManyAttempts = computed(() => submitCount.value >= 3);
  watch(isTooManyAttempts, (val) => {
    if (val) {
      setTimeout(() => (submitCount.value = 0), 1500);
    }
  });
  const onSubmitLogin = handleSubmit(async (values) => {
    try {
      await store.dispatch("auth/login", values);
      router.push("/");
    } catch (e) {
      console.log(e.message);
    }
    password.value = email.value = "";
  });

  return {
    password,
    pError,
    pBlur,
    email,
    eError,
    eBlur,
    onSubmitLogin,
    isSubmitting,
    isTooManyAttempts,
  };
}
