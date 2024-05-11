import styled from "styled-components";

export const FiltersContainer = styled.div`
  display: flex;
  margin-top: 32px;
  margin-bottom: 32px;
  gap: 20px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SelectName = styled.p`
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
`;

export const SelectContainer = styled.div`
  position: relative;
  padding: 14px 14px 14px 18px;
  border-radius: 14px;
  background-color: var(--bg-main);
  border: 2px solid var(--bg-main);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  transition: border var(--transition-main), color var(--transition-main);

  &:hover {
    border: 2px solid var(--accent-secondary);
    color: var(--accent-main);
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
  padding: 14px 14px 14px 18px;
  background-color: var(--bg-main);
  transition: background-color var(--transition-main),
    color var(--transition-main);

  &:hover {
    background-color: var(--accent-secondary);
    color: var(--text-contrast);
  }
`;

export const ResetButton = styled.button`
  display: flex;
  margin-left: 40px;
  gap: 8px;
  align-items: flex-start;
  background-color: transparent;
  font-weight: 500;
  color: var(--accent-main);
  transition: color var(--transition-main);

  & svg {
    transition: stroke var(--transition-main);
  }

  &:hover {
    color: var(--accent-sat);
  }
`;
