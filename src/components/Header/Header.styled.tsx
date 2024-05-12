import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  width: 95vw;
  margin: 12px auto;
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

  @media screen and (min-width: 1440px) {
    width: 1184px;
    margin: 20px auto;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    gap: 28px;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  gap: 8px;
  align-items: center;

  & p {
    font-size: 14px;
    font-weight: 500;
    line-height: 1.2;

    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const AuthGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  & p {
    font-size: 14px;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 64px;
  }

  @media screen and (min-width: 768px) {
    gap: 16px;

    & p {
      font-size: 16px;
      max-width: max-content;
      white-space: nowrap;
      overflow: visible;
    }
  }
`;

export const LoginOutBtn = styled.button`
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
  width: 88px;
  padding: 6px;
  border-radius: 12px;
  background-color: var(--accent-contrast);
  color: var(--text-contrast);
  font-size: 14px;
  font-weight: 500;
  transition: background-color var(--transition-main);

  &:hover {
    background-color: var(--accent-sat);
  }

  @media screen and (min-width: 768px) {
    width: 140px;
    padding: 12px;
    font-size: 16px;
    font-weight: 700;
  }

  @media screen and (min-width: 1440px) {
    width: 166px;
  }
`;
