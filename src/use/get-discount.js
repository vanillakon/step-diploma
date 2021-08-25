import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import axios from "axios";
export function useGetDiscount() {
  const { handleSubmit, isSubmitting } = useForm();
  const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
    "email",
    yup
      .string()
      .trim()
      .required("Please, enter email")
      .email("Invalid email")
  );
  const onSubmit = handleSubmit(async (values) => {
    const { data } = await axios.post(
      `https://api.telegram.org/bot${process.env.VUE_APP_TG1_KEY}/sendMessage?chat_id=${process.env.VUE_APP_TG1_CHAT}&parse_mode=html&text=${email.value}`
    );
    email.value = "";
  });
  return {
    email,
    eError,
    eBlur,
    onSubmit,
    isSubmitting,
  };
}
