import styled from "styled-components";

export const Header = styled.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  line-height: 1.38;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  padding: 16px 18px;
  margin-bottom: 18px;

  &::placeholder {
    color: var(--text-main);
    font-family: Roboto;
    line-height: 1.37;
  }
`;

export const PasswordContainer = styled.div`
  position: relative;
`;

export const ShowPasswordBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 18px;
  background-color: transparent;
  transition: color var(--transition-main);

  &:hover {
    color: var(--accent-main);
  }
`;
