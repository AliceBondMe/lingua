import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import {
  ErrorMessage,
  FormBtn,
  Header,
  Input,
  MajorErrorMessage,
  PasswordContainer,
  ShowPasswordBtn,
  Text,
} from "./Forms.styled";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/slices/auth/authOperations";
import { AppDispatch } from "../../redux/store";
import { useAutoClearAuthError } from "../../hooks/useAutoClearAuthError";

interface FormProps {
  closeModal: () => void;
}

export interface UserData {
  name: string;
  email: string;
  password: string;
}

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must contain 3 or more characters")
    .required("A name is required"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("An email is required"),
  password: yup
    .string()
    .min(5, "Password must contain 5 or more characters")
    .required("A password is required"),
});

export const Registration: FC<FormProps> = ({ closeModal }) => {
  const dispatch: AppDispatch = useDispatch();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const authError = useAutoClearAuthError();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<UserData> = async ({
    name,
    email,
    password,
  }: UserData) => {
    dispatch(registerUser({ name, email, password })).then((action) => {
      if (action.type === "auth/register/rejected") {
        reset();
        console.log(authError);
      } else {
        closeModal();
      }
    });
  };

  return (
    <>
      <Header>Registration</Header>
      <Text>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("name")} placeholder="Name" />

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

        <FormBtn type="submit">Sign Up</FormBtn>

        <ErrorMessage>{errors.name?.message}</ErrorMessage>
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
      </form>

      {authError && (
        <MajorErrorMessage>
          Something went wrong with your sign up. <br /> Please try again or
          login if you are already registered
        </MajorErrorMessage>
      )}
    </>
  );
};
