import styled from "styled-components";
import { fadeInScale } from "../../assets/styles/GlobalStyles";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
  animation: ${fadeInScale} 800ms ease-in-out;

  @media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 64px;
  }
`;

export const LoadMoreBtn = styled.button`
  padding: 12px 40px;
  border-radius: 12px;
  background-color: var(--accent-main);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.56;
  transition: color var(--transition-main);

  &:hover {
    background-color: var(--accent-secondary);
  }

  @media screen and (min-width: 768px) {
    height: 60px;
    padding: 16px 48px;
    font-size: 18px;
  }
`;

export const NoTeachersMessage = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 700;
  color: var(--text-error);

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    margin-bottom: 32px;
    font-size: 20px;
  }
`;

export const FavHeader = styled.h3`
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    margin-bottom: 32px;
  }
`;

export const NotFoundPageMessage = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 22px;
  text-align: center;
  font-weight: 700;
  color: var(--accent-sat);

  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin-top: 32px;
    margin-bottom: 32px;
  }
`;
