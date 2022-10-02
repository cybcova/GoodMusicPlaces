import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    password: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string()
      .email("Email not valid")
      .required("The email is required")
      .max(255, "225 characters max"),
    password: Yup.string()
      .required("Password required")
      .min(5, "5 characters min")
      .max(255, "225 characters max"),
  });
}
