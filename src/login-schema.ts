import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const LoginSchema = Yup.object().shape({
  name: Yup.string()
    .min(2)
    .matches(/^[A-Za-z]+$/, "Name must contain only letters")
    .required(),
  email: Yup.string().email().required(),
  number: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
});

export default LoginSchema;
