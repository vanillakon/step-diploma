import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import axios from "axios";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export function useSendMessage() {
  const { handleSubmit, isSubmitting } = useForm();
  const store = useStore();
  const route = useRoute();
  const MIN_LENGTH = 10;
  const { value: name, errorMessage: nError, handleBlur: nBlur } = useField(
    "name",
    yup
      .string()
      .trim()
      .required("Please, enter your name")
  );
  const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
    "email",
    yup
      .string()
      .trim()
      .required("Please, enter email")
      .email("Invalid email")
  );
  const { value: text, errorMessage: tError, handleBlur: tBlur } = useField(
    "text",
    yup
      .string()
      .trim()
      .required("Please, enter youre message")
      .min(MIN_LENGTH, `This must be at least ${MIN_LENGTH} characters`)
  );

  const onSubmit = handleSubmit(async (values) => {
    const { data } = await axios.post(
      `https://api.telegram.org/bot${
        process.env.VUE_APP_TG2_KEY
      }/sendMessage?chat_id=${
        process.env.VUE_APP_TG2_CHAT
      }&parse_mode=html&text=${"Name: " +
        name.value +
        ", " +
        "Email: " +
        email.value +
        ", " +
        "Message: " +
        text.value}`
    );
    name.value = email.value = text.value = "";
  });
  const onSubmitComment = handleSubmit(async (values) => {
    store.dispatch("shop/addComments", {
      item: route.params.id,
      id: Date.now(),
      name: name.value,
      email: email.value,
      text: text.value,
    });

    name.value = email.value = text.value = "";
  });

  const onSubmitCommentBlog = handleSubmit(async (values) => {
    store.dispatch("blog/addComments", {
      item: route.params.id,
      id: Date.now(),
      name: name.value,
      email: email.value,
      text: text.value,
    });

    name.value = email.value = text.value = "";
  });

  return {
    name,
    nError,
    nBlur,
    email,
    eError,
    eBlur,
    text,
    tError,
    tBlur,
    onSubmit,
    onSubmitComment,
    onSubmitCommentBlog,
    isSubmitting,
  };
}
