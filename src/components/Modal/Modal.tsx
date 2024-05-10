import { FC, ReactNode, SyntheticEvent, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";
import { Backdrop, CloseBtn, ModalContainer } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root") as HTMLElement;

interface ModalProps {
  closeModal: () => void;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ closeModal, children }) => {
  const handleBackdropClose = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleCloseByEsc = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleCloseByEsc);

    return () => {
      window.removeEventListener("keydown", handleCloseByEsc);
    };
  }, [closeModal]);

  return createPortal(
    <Backdrop onClick={handleBackdropClose}>
      <ModalContainer>
        <CloseBtn
          type="button"
          aria-label="close modal window"
          onClick={closeModal}
        >
          <IoCloseOutline size={32} />
        </CloseBtn>
        {children}
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};
