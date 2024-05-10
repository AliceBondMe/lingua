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
  transition: border-color var(--transition-main);

  &::placeholder {
    color: var(--text-main);
    font-family: Roboto;
    line-height: 1.37;
    transition: color var(--transition-main);
  }

  &:focus {
    border-color: var(--accent-main);

    &::placeholder {
      color: var(--accent-main);
    }
  }
`;

export const PasswordContainer = styled.div`
  position: relative;
  margin-bottom: 22px;
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

export const FormBtn = styled.button`
  width: 438px;
  padding: 16px;
  margin-bottom: 8px;
  border-radius: 12px;
  background-color: var(--accent-main);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.55;
  transition: background-color var(--transition-main);

  &:hover {
    background-color: var(--accent-secondary);
  }
`;

export const ErrorMessage = styled.p`
  color: var(--text-error);
  text-align: center;
`;
