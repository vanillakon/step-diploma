import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import axios from "axios";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
export function useSendRegister() {
  const { handleSubmit, isSubmitting } = useForm();
  const store = useStore();
  const route = useRoute();
  const router = useRouter();
  const { value: password, errorMessage: pError, handleBlur: pBlur } = useField(
    "password",
    yup
      .string()
      .trim()
      .required("Please, enter your password")
      .min(6, "Password has to be longer than 6 characters!")
  );
  const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
    "email",
    yup
      .string()
      .trim()
      .required("Please, enter email")
      .email("Invalid email")
  );

  const onSubmit = handleSubmit(async (values) => {
    try {
      await store.dispatch("register/registerUser", {
        email: email.value,
        password: password.value,
      });
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
    onSubmit,
    isSubmitting,
  };
}
