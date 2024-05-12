import styled from "styled-components";
import { fadeInScale } from "../../assets/styles/GlobalStyles";

export const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 44px;
  margin-bottom: 20px;
  gap: 8px;
  animation: ${fadeInScale} 800ms ease-in-out;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-top: 32px;
    margin-bottom: 32px;
    gap: 20px;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const SelectName = styled.p`
  color: var(--text-secondary);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  padding: 8px 8px 8px 12px;
  border-radius: 14px;
  background-color: var(--bg-main);
  border: 2px solid var(--bg-main);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.11;
  transition: border var(--transition-main), color var(--transition-main);

  &:hover {
    border: 2px solid var(--accent-secondary);
    color: var(--accent-main);
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 14px 14px 14px 18px;
  }
`;

export const Select = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 124px;

  & svg {
    margin-left: 4px;
  }
`;

export const Options = styled.ul`
  position: absolute;
  z-index: 900;
  top: calc(100% + 2px);
  left: 0;
  min-width: 124px;
`;

export const Option = styled.li`
  display: flex;
  align-items: center;
  border-radius: 14px;
  padding: 8px 8px 8px 12px;
  background-color: var(--bg-main);
  transition: background-color var(--transition-main),
    color var(--transition-main);

  &:hover {
    background-color: var(--accent-secondary);
    color: var(--text-contrast);
  }

  @media screen and (min-width: 768px) {
    padding: 14px 14px 14px 18px;
  }
`;

export const ResetButton = styled.button`
  position: absolute;
  top: 80px;
  right: 12px;
  display: flex;
  gap: 8px;
  align-items: flex-start;
  background-color: transparent;
  font-weight: 500;
  color: var(--accent-main);
  transition: color var(--transition-main);

  &:disabled {
    color: var(--border-light);
    cursor: auto;

    &:hover {
      color: var(--border-light);
    }
  }

  & svg {
    transition: stroke var(--transition-main);
  }

  &:hover {
    color: var(--accent-sat);
  }

  @media screen and (min-width: 768px) {
    position: static;
    margin-left: 40px;
  }
`;
