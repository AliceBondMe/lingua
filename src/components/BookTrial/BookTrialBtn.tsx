import { FC } from "react";
import { useShowModal } from "../../hooks/useShowModal";
import { Modal } from "../Modal/Modal";
import { BookBtn } from "./BookTrial.styled";
import { BookTrialForm } from "../Forms/BookTrialForm";

interface BookTrialBtnProps {
  teacherName: string;
  teacherPhoto: string;
}

export const BookTrialBtn: FC<BookTrialBtnProps> = ({
  teacherName,
  teacherPhoto,
}) => {
  const { isShowModal, openModal, closeModal } = useShowModal();

  return (
    <>
      <BookBtn type="button" onClick={openModal}>
        Book trial lesson
      </BookBtn>
      {isShowModal && (
        <Modal
          closeModal={closeModal}
          children={
            <BookTrialForm
              closeModal={closeModal}
              teacherName={teacherName}
              teacherPhoto={teacherPhoto}
            />
          }
        />
      )}
    </>
  );
};
