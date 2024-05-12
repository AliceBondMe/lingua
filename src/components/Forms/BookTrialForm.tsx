import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import {
  ErrorMessage,
  FormBtn,
  Header,
  Input,
  RadioBlock,
  RadioOption,
  RadioText,
  TeacherBlock,
  TeacherPhotoContainer,
  Text,
  TextBlock,
} from "./Forms.styled";

interface FormProps {
  closeModal: () => void;
  teacherName: string;
  teacherPhoto: string;
  bookLanguage: string;
}

export interface UserBookingData {
  reason: string;
  fullName: string;
  email: string;
  phone: string;
}

const validationSchema = yup.object().shape({
  reason: yup.string().required("Pick the reason for learning"),
  fullName: yup
    .string()
    .min(3, "Name must contain 3 or more characters")
    .required("A name is required"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("An email is required"),
  phone: yup
    .string()
    .min(5, "Phone number must contain 10 or more characters")
    .max(30, "Phone number must contain no more than 30 characters")
    .required("A phone number is required"),
});

export const BookTrialForm: FC<FormProps> = ({
  closeModal,
  teacherName,
  teacherPhoto,
  bookLanguage,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserBookingData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<UserBookingData> = async ({
    reason,
    fullName,
    email,
    phone,
  }: UserBookingData) => {
    console.log("User's booking data", { reason, fullName, email, phone });

    closeModal();
  };

  return (
    <>
      <Header>Book trial lesson</Header>
      <Text>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </Text>
      <TeacherBlock>
        <TeacherPhotoContainer>
          <img src={teacherPhoto} alt={`&{teacherName} photo`} />
        </TeacherPhotoContainer>
        <TextBlock>
          <p>Your teacher</p>
          <p>{teacherName}</p>
        </TextBlock>
      </TeacherBlock>

      <form onSubmit={handleSubmit(onSubmit)}>
        <RadioText>
          What is your main reason for learning {bookLanguage}?
        </RadioText>

        <RadioBlock>
          <RadioOption>
            <Input
              type="radio"
              {...register("reason")}
              value="career"
              id="career"
            />
            <label htmlFor="career">Career and business</label>
          </RadioOption>

          <RadioOption>
            <Input type="radio" {...register("reason")} value="kids" />
            <label htmlFor="kids"> Lesson for kids</label>
          </RadioOption>

          <RadioOption>
            <Input type="radio" {...register("reason")} value="abroad" />
            <label htmlFor="abroad"> Living abroad</label>
          </RadioOption>

          <RadioOption>
            <Input type="radio" {...register("reason")} value="exams" />
            <label htmlFor="exams">Exams and coursework</label>
          </RadioOption>

          <RadioOption>
            <Input type="radio" {...register("reason")} value="travel" />
            <label htmlFor="travel"> Culture, travel or hobby</label>
          </RadioOption>
        </RadioBlock>

        <Input type="text" {...register("fullName")} placeholder="Full Name" />
        <Input type="email" {...register("email")} placeholder="Email" />
        <Input type="phone" {...register("phone")} placeholder="Phone number" />

        <FormBtn type="submit">Book</FormBtn>

        <ErrorMessage>{errors.reason?.message}</ErrorMessage>
        <ErrorMessage>{errors.fullName?.message}</ErrorMessage>
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
        <ErrorMessage>{errors.phone?.message}</ErrorMessage>
      </form>
    </>
  );
};
