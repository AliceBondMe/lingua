import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 64px;
`;

export const LoadMoreBtn = styled.button`
  height: 60px;
  padding: 16px 48px;
  border-radius: 12px;
  background-color: var(--accent-main);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
  transition: color var(--transition-main);

  &:hover {
    background-color: var(--accent-secondary);
  }
`;

export const NoTeachersMessage = styled.p`
  margin-top: 32px;
  margin-bottom: 32px;
  font-size: 20px;
  font-weight: 700;
  color: var(--text-error);
`;

export const FavHeader = styled.h3`
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const NotFoundPageMessage = styled.p`
  margin-top: 32px;
  margin-bottom: 32px;
  font-size: 28px;
  font-weight: 700;
  color: var(--accent-sat);
`;
