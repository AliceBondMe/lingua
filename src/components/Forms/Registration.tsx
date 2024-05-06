import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import {
  Header,
  Input,
  PasswordContainer,
  ShowPasswordBtn,
  Text,
} from "./Forms.styled";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface Inputs {
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

export const Registration: FC = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
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
        <p>{errors.name?.message}</p>

        <Input type="email" {...register("email")} placeholder="Email" />
        <p>{errors.email?.message}</p>

        <PasswordContainer>
          <Input
            type={isShowPassword ? "text" : "password"}
            {...register("password")}
            placeholder="Password"
          />

          <ShowPasswordBtn
            type="button"
            onClick={() => setIsShowPassword((prev) => !prev)}
          >
            {isShowPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </ShowPasswordBtn>
        </PasswordContainer>

        <p>{errors.email?.message}</p>

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};
