import styled from "styled-components";

export const Wrap = styled.section`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
`;

export const TextBlock = styled.div`
  max-width: 720px;
  height: 530px;
  padding: 98px 64px;
  border-radius: 30px;
  background: var(--bg-secondary);

  & p {
    width: 470px;
    line-height: 1.38;
    letter-spacing: -0.32px;
    margin-bottom: 64px;
  }
`;

export const MainHeader = styled.h1`
  font-size: 48px;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.96px;
  margin-bottom: 32px;

  & div {
    display: inline-block;
    width: 195px;
    height: 40px;
    border-radius: 8px;
    background-color: var(--accent-secondary);
    transform: translateY(8px);
    padding-left: 4px;
  }

  & span {
    display: inline-block;
    font-style: italic;
    font-weight: 400;
    transform: translateY(-12px);
  }
`;

export const GetStartedBtn = styled.button`
  width: 267px;
  padding: 16px;
  border-radius: 12px;
  background-color: var(--accent-main);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
  transition: background-color var(--transition-main);

  &:hover {
    background-color: var(--accent-secondary);
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  max-width: 568px;
  height: 530px;
  overflow: hidden;
  object-fit: cover;
  background-color: var(--accent-secondary);

  & img {
    width: 100%;
    height: auto;
  }
`;

export const StatList = styled.ul`
  display: flex;
  gap: 100px;
  justify-content: space-between;
  padding: 40px 100px;
  width: 1312px;
  height: 116px;
  border-radius: 30px;
  border: 2px dashed var(--accent-main);
`;

export const StatItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const NumericData = styled.p`
  font-size: 28px;
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: -0.56px;
`;

export const Text = styled.span`
  width: 96px;
  color: var(--text-light);
  font-size: 14px;
  line-height: 1.29;
`;
