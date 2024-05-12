import styled from "styled-components";
import { fadeInScaleAndRotate } from "../../assets/styles/GlobalStyles";

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 95vh;
  overflow-y: auto;
  width: 95%;
  border-radius: 30px;
  padding: 32px;
  background-color: var(--bg-main);
  animation: ${fadeInScaleAndRotate} 1s ease-in-out;

  &::-webkit-scrollbar-track {
    margin: 18px 0;
  }

  @media screen and (min-width: 768px) {
    width: 566px;
    padding: 64px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;

  & svg {
    color: var(--text-main);
    transition: color var(--transition-main), transform var(--transition-main);

    &:hover {
      color: var(--accent-main);
      transform: rotate(180deg);
    }
  }
`;

export const Backdrop = styled.div`
  z-index: 1200;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--backdrop);
`;
