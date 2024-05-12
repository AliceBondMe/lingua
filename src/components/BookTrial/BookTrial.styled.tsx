import styled from "styled-components";

export const BookBtn = styled.button`
  width: 200px;
  padding: 10px 24px;
  border-radius: 12px;
  background-color: var(--accent-main);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.56;
  transition: color var(--transition-main);

  &:hover {
    background-color: var(--accent-secondary);
  }

  @media screen and (min-width: 1440px) {
    width: 232px;
    height: 60px;
    padding: 16px 48px;
    font-size: 18px;
  }
`;
