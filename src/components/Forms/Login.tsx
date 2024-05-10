import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import {
  ErrorMessage,
  FormBtn,
  Header,
  Input,
  PasswordContainer,
  ShowPasswordBtn,
  Text,
} from "./Forms.styled";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { loginUser } from "../../redux/slices/auth/authOperations";

interface FormProps {
  closeModal: () => void;
}

export interface UserDataLogin {
  email: string;
  password: string;
}

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("An email is required"),
  password: yup
    .string()
    .min(5, "Password must contain 5 or more characters")
    .required("A password is required"),
});

export const Login: FC<FormProps> = ({ closeModal }) => {
  const dispatch: AppDispatch = useDispatch();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDataLogin>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<UserDataLogin> = async ({
    email,
    password,
  }: UserDataLogin) => {
    dispatch(loginUser({ email, password }));

    closeModal();
  };

  return (
    <>
      <Header>Log In</Header>
      <Text>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="email" {...register("email")} placeholder="Email" />

        <PasswordContainer>
          <Input
            type={isShowPassword ? "text" : "password"}
            {...register("password")}
            placeholder="Password"
          />

          <ShowPasswordBtn
            type="button"
            aria-label="show password"
            onClick={() => setIsShowPassword((prev) => !prev)}
          >
            {isShowPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </ShowPasswordBtn>
        </PasswordContainer>

        <FormBtn type="submit">Log In</FormBtn>

        <ErrorMessage>{errors.email?.message}</ErrorMessage>
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
      </form>
    </>
  );
};
