import { IoArrowUpCircleOutline } from "react-icons/io5";
import styled from "styled-components";

export const ScrollUpBtn = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1200;
  width: 36px;
  height: 36px;
  padding: 0;
  background-color: transparent;
  border: none;
  color: var(--bg-main);
  cursor: pointer;
  transition: all var(--transition-main);

  &:hover {
    width: 48px;
    height: 48px;
    animation: dance 600ms ease-out infinite alternate;
  }

  @keyframes dance {
    0% {
      transform: rotate(-20deg);
    }
    50% {
      transform: translateY(-4px);
    }
    100% {
      transform: rotate(20deg);
    }
  }

  @media screen and (min-width: 768px) {
    right: 40px;
    bottom: 40px;
    width: 48px;
    height: 48px;

    &:hover {
      width: 56px;
      height: 56px;
      animation: dance 600ms ease-out infinite alternate;
    }
  }
`;

export const ArrowUp = styled(IoArrowUpCircleOutline)`
  background-color: var(--accent-main);
  border-radius: 50%;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 8px 1px var(--accent-sat);
`;
