import { useState, ChangeEvent } from "react";
import { useFormik } from "formik";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { LoginFormWrapper,
  LoginFormTitle,
  InputsContainer } from "./styles";
import * as Yup from "yup"; 
import { LoginFormValues } from "./types";

function LoginForm() {
  const schema = Yup.object().shape({
    email:Yup.string()
    .required("Email is required")
    .email("does...."),
    password: Yup.string().strict().required("Password should be required")
      .min(3,"The minimum length of the password should be 3")
      .max(20, "The maximum length of the password should be 20")
      .uppercase("The password should be in uppercase")
  });
  const formik = useFormik({
    initialValues:{
      email: " ", password:" ",
    } as LoginFormValues,
validationSchema: schema,

    onSubmit:(values: LoginFormValues, helpers)=> {
      console.log("submit works");
      console.log(values);
      console.log(helpers);
      // Пример того как можно отправить данные на сервер в onSubmit
      // const response = await fetch("url", {
      //   method: "POST",
      //   body: JSON.stringify(values),
      // });

    } ,
  });
  // function onChangeEmail(event: ChangeEvent<HTMLInputElement>): void {
  //   throw new Error("Function not implemented.");
  // }

  // function onChangePassword(event: ChangeEvent<HTMLInputElement>): void {
  //   throw new Error("Function not implemented.");
  // }

  // const [emailValue, setEmailValue] = useState<string>("");
  // const [passwordValue, setPasswordValue] = useState<string>("");
  
  // const onChangePassword = (event: ChangeEvent<HTMLInputElement>) =>{
  //   setPasswordValue (event.target.value);
  // }
  // const onChangeEmail = (event: ChangeEvent<HTMLInputElement>)=>{
  //  setEmailValue(event.target.value)
  // };
  return (
    <LoginFormWrapper onSubmit={formik.handleSubmit}>
      <LoginFormTitle>Login form</LoginFormTitle>
      <InputsContainer>
        <Input
          id="login-email"
          placeholder="Enter your email"
          name="email"
          label="Email"
          type="email"
          value ={formik.values.email}
          onChange = {formik.handleChange}
          error={formik.errors.email}
        />
        <Input
        value={formik.values.password}
        onChange={formik.handleChange}
          id="login-password"
          placeholder="Enter your password"
          name="password"
          label="Password"
          type="password"
          error={formik.errors.password}
        />
      </InputsContainer>
      <Button name="Login" type="submit" />
    </LoginFormWrapper>
  );
}

export default LoginForm;