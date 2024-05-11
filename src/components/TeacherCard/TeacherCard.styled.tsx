import styled from "styled-components";
import { fadeInLeft } from "../../assets/styles/GlobalStyles";

interface ReviewerProps {
  $firstLetter: string;
}

interface FavBtnProps {
  $isFavorite: boolean;
}

export const Card = styled.div`
  display: flex;
  width: 1184px;
  padding: 24px;
  align-items: flex-start;
  gap: 48px;
  border-radius: 24px;
  background-color: var(--bg-main);
`;

export const PhotoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid var(--accent-secondary);
  flex-shrink: 0;

  & div {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    object-fit: cover;
    overflow: hidden;
  }

  & img {
    width: 100%;
    height: auto;
  }

  & svg {
    position: absolute;
    top: 19px;
    right: 16px;
  }
`;

export const FirstRowWrap = styled.div`
  display: flex;
  margin-bottom: 8px;

  & > p {
    color: var(--text-secondary);
    font-weight: 500;
    line-height: 1.5;
    margin-right: 192px;
  }
`;

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const IconParagraph = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DataBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  & svg {
    fill: var(--accent-sat);
    stroke: var(--accent-sat);
  }

  & span {
    color: var(--price);
  }

  & p {
    font-weight: 500;
    line-height: 1.5;
  }

  & p:not(:last-of-type) {
    position: relative;

    &::after {
      position: absolute;
      content: "";
      top: 4px;
      right: -16px;
      width: 0px;
      height: 16px;
      border-right: 2px solid var(--accent-secondary);
    }
  }
`;

export const FavButton = styled.button<FavBtnProps>`
  margin-left: auto;
  background-color: transparent;
  fill: ${({ $isFavorite }) =>
    $isFavorite ? "var(--accent-main)" : "transparent"};
  stroke: var(--accent-main);
  transition: fill var(--transition-main);

  &:hover {
    fill: ${({ $isFavorite }) =>
      $isFavorite ? "var(--border-light)" : "var(--accent-main)"};
  }
`;

export const Name = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 32px;
`;

export const Feature = styled.span`
  color: var(--text-secondary);
  font-weight: 500;
  line-height: 1.5;
`;

export const FeatureValue = styled(Feature)`
  color: var(--text-main);

  &.underlined {
    text-decoration: underline;
  }
`;

export const FeaturesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

export const ReadMoreBtn = styled.button`
  background-color: transparent;
  width: fit-content;
  padding: 0;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  margin-bottom: 32px;
  transition: color var(--transition-main);

  &:hover {
    color: var(--accent-sat);
  }
`;

export const ReadLessBtn = styled.button`
  background-color: transparent;
  width: fit-content;
  padding: 0;
  margin-bottom: 32px;
  align-self: center;

  & svg {
    color: var(--text-secondary);
    transition: color var(--transition-main), filter var(--transition-main);

    &:hover {
      filter: drop-shadow(0 0 8px var(--accent-secondary));
      color: var(--accent-main);
    }
  }
`;

export const LevelsList = styled.ul`
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
`;

export const LevelsItem = styled.li`
  padding: 8px 12px;
  border-radius: 35px;
  border: 1px solid var(--border-light);
  background-color: transparent;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.14;
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 32px;
  animation: ${fadeInLeft} 700ms ease-in-out;
`;

export const ReviewsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;

  & p:last-child {
    font-weight: 500;
    line-height: 1.5;
  }
`;

export const ReviewerBlock = styled.div<ReviewerProps>`
  position: relative;
  margin-left: 56px;

  &::before {
    position: absolute;
    top: 0;
    left: -56px;
    display: flex;
    justify-content: center;
    align-items: center;
    content: "${({ $firstLetter }) => $firstLetter}";
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 4px double var(--accent-main);
    color: var(--accent-sat);
    font-weight: bold;
    font-size: 20px;
  }

  & svg {
    fill: var(--accent-main);
    stroke: var(--accent-main);
  }

  & p:first-child {
    color: var(--text-secondary);
    font-weight: 500;
    line-height: 1.5;
  }

  & p:nth-child(2) {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;
  }
`;
