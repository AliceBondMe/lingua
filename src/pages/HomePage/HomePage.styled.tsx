import { Link } from "react-router-dom";
import styled from "styled-components";
import { fadeInScale } from "../../assets/styles/GlobalStyles";

export const Wrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    gap: 24px;
    margin-bottom: 24px;
  }
`;

export const TextBlock = styled.div`
  max-width: 95vw;
  padding: 40px 32px;
  border-radius: 30px;
  background: var(--bg-secondary);
  animation: ${fadeInScale} 800ms ease-in-out;

  & p {
    width: 100%;
    font-size: 14px;
    line-height: 1.38;
    letter-spacing: -0.32px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 768px) {
    max-width: 400px;
    height: 530px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 720px;
    padding: 98px 64px;

    & p {
      width: 470px;
      font-size: 16px;
      margin-bottom: 64px;
    }
  }
`;

export const MainHeader = styled.h1`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.96px;
  margin-bottom: 32px;

  & div {
    display: inline-block;
    width: 160px;
    height: 32px;
    border-radius: 8px;
    background-color: var(--accent-secondary);
    transform: translateY(10px);
    padding-left: 4px;
  }

  & span {
    display: inline-block;
    font-style: italic;
    font-weight: 400;
    transform: translateY(-12px);
  }

  @media screen and (min-width: 768px) {
    font-size: 48px;

    & div {
      width: 195px;
      height: 40px;
      transform: translateY(8px);
    }
  }
`;

export const GetStartedLink = styled(Link)`
  padding: 16px 88px;
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
  max-width: 95vw;
  height: 420px;
  overflow: hidden;
  object-fit: cover;
  background-color: var(--accent-secondary);
  animation: ${fadeInScale} 800ms ease-in-out;

  & img {
    width: 100%;
    height: auto;
  }

  @media screen and (min-width: 768px) {
    max-width: 568px;
    height: 530px;
  }
`;

export const StatList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
  padding: 20px 40px;
  width: 90vw;
  border-radius: 30px;
  border: 2px dashed var(--accent-main);
  animation: ${fadeInScale} 800ms ease-in-out;

  @media screen and (min-width: 1440px) {
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 100px;
    padding: 40px 100px;
    width: 1312px;
    height: 116px;
  }
`;

export const StatItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const NumericData = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.14;
  letter-spacing: -0.56px;

  @media screen and (min-width: 1440px) {
    font-size: 28px;
  }
`;

export const Text = styled.span`
  width: 40%;
  color: var(--text-light);
  font-size: 14px;
  line-height: 1.29;

  @media screen and (min-width: 1440px) {
    width: 96px;
  }
`;
