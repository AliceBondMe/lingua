import styled from "styled-components";
import { fadeInLeft } from "../../assets/styles/GlobalStyles";

interface ReviewerProps {
  $firstLetter: string;
}

interface FavBtnProps {
  $isFavorite: boolean;
}

interface LevelItemProps {
  $isFiltered: boolean;
}

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 95vw;
  padding: 12px;
  align-items: flex-start;
  gap: 20px;
  border-radius: 24px;
  background-color: var(--bg-main);

  @media screen and (min-width: 768px) {
    padding: 24px;
  }

  @media screen and (min-width: 1440px) {
    position: static;
    flex-wrap: nowrap;
    width: 1184px;
    gap: 48px;
  }
`;

export const PhotoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid var(--accent-secondary);
  flex-shrink: 0;

  & div {
    width: 72px;
    height: 72px;
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
    top: 6px;
    right: 6px;
  }

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 120px;

    & div {
      width: 96px;
      height: 96px;
    }

    & svg {
      position: absolute;
      top: 19px;
      right: 16px;
    }
  }
`;

export const FirstRowWrap = styled.div`
  position: absolute;
  top: 40px;
  left: 96px;
  display: flex;
  margin-bottom: 8px;

  & > p {
    display: none;
    color: var(--text-secondary);
    font-weight: 500;
    line-height: 1.5;
    margin-right: 12px;

    @media screen and (min-width: 768px) {
      margin-right: 100px;
    }

    @media screen and (min-width: 1440px) {
      display: block;
      margin-right: 192px;
    }
  }

  @media screen and (min-width: 768px) {
    position: static;
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
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 12px;

  & svg {
    fill: var(--accent-sat);
    stroke: var(--accent-sat);
  }

  & span {
    color: var(--price);
  }

  & p {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.5;

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 16px;
    }
  }

  & p:not(:last-of-type) {
    position: relative;

    &::after {
      position: absolute;
      content: "";
      top: 4px;
      right: -6px;
      width: 0px;
      height: 16px;
      border-right: 2px solid var(--accent-secondary);

      @media screen and (min-width: 1440px) {
        right: -16px;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 32px;
  }
`;

export const FavButton = styled.button<FavBtnProps>`
  position: absolute;
  top: -28px;
  right: 8px;
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

  @media screen and (min-width: 768px) {
    position: static;
  }
`;

export const Name = styled.h3`
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;

export const Feature = styled.span`
  font-size: 14px;
  color: var(--text-secondary);
  font-weight: 500;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
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
  margin-bottom: 20px;
  transition: color var(--transition-main);

  &:hover {
    color: var(--accent-sat);
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;

export const ReadLessBtn = styled.button`
  background-color: transparent;
  width: fit-content;
  padding: 0;
  margin-bottom: 20px;
  align-self: center;

  & svg {
    color: var(--text-secondary);
    transition: color var(--transition-main), filter var(--transition-main);

    &:hover {
      filter: drop-shadow(0 0 8px var(--accent-secondary));
      color: var(--accent-main);
    }
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;

export const LevelsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;

  @media screen and (min-width: 1440px) {
    flex-wrap: nowrap;
    margin-bottom: 32px;
  }
`;

export const LevelsItem = styled.li<LevelItemProps>`
  padding: 8px;
  border-radius: 35px;
  border: 1px solid
    ${({ $isFiltered }) =>
      $isFiltered ? "var(--accent-main)" : "var(--border-light)"};
  background-color: ${({ $isFiltered }) =>
    $isFiltered ? "var(--accent-main)" : "transparent"};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.14;

  @media screen and (min-width: 768px) {
    padding: 8px 12px;
    font-size: 14px;
  }
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
  animation: ${fadeInLeft} 700ms ease-in-out;

  @media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 32px;
  }
`;

export const ReviewsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 14px;

  & p:last-child {
    font-weight: 500;
    line-height: 1.5;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    gap: 16px;
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
