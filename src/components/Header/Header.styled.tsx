import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  width: 1184px;
  margin: 20px auto 0 auto;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 12px 0;
  color: var(--text-main);

  & a {
    transition: color var(--transition-main);
  }

  & a.active {
    color: var(--accent-sat);
  }

  & a:hover {
    color: var(--accent-sat);
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 28px;
`;

export const Logo = styled(Link)`
  display: flex;
  gap: 8px;
  align-items: center;

  & p {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.2;
  }
`;

export const BtnsGroup = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const LoginBtn = styled.button`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  background-color: transparent;
  font-weight: 700;
  transition: color var(--transition-main);

  & svg {
    stroke: var(--accent-main);
    transition: stroke var(--transition-main);
  }

  &:hover {
    color: var(--accent-sat);
    & svg {
      stroke: var(--accent-sat);
    }
  }
`;

export const RegistrationBtn = styled.button`
  width: 166px;
  padding: 12px;
  border-radius: 12px;
  background-color: var(--accent-contrast);
  color: var(--text-contrast);
  font-weight: 700;
  transition: background-color var(--transition-main);

  &:hover {
    background-color: var(--accent-sat);
  }
`;
