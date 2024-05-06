import styled from "styled-components";
import { fadeInScale } from "../../assets/styles/GlobalStyles";

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 566px;
  border-radius: 30px;
  padding: 64px;
  background-color: var(--bg-main);
  animation: ${fadeInScale} 1s ease-in-out;
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
