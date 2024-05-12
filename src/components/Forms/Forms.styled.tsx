import styled from "styled-components";

export const Header = styled.h2`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
`;

export const Text = styled.p`
  line-height: 1.38;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(18, 20, 23, 0.1);
  padding: 8px 10px;
  margin-bottom: 12px;
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

  @media screen and (min-width: 768px) {
    padding: 16px 18px;
    margin-bottom: 18px;
  }
`;

export const PasswordContainer = styled.div`
  position: relative;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    margin-bottom: 22px;
  }
`;

export const ShowPasswordBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 10px;
  background-color: transparent;
  transition: color var(--transition-main);

  &:hover {
    color: var(--accent-main);
  }

  @media screen and (min-width: 768px) {
    top: 16px;
    right: 18px;
  }
`;

export const FormBtn = styled.button`
  width: 100%;
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 12px;
  background-color: var(--accent-main);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.55;
  transition: background-color var(--transition-main);

  &:hover {
    background-color: var(--accent-secondary);
  }

  @media screen and (min-width: 768px) {
    width: 438px;
    padding: 16px;
    font-size: 18px;
  }
`;

export const ErrorMessage = styled.p`
  color: var(--text-error);
  text-align: center;
`;

export const MajorErrorMessage = styled.p`
  color: var(--text-error);
  text-align: center;
  font-size: 18px;
  font-weight: 500;
`;

export const TeacherBlock = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`;

export const TeacherPhotoContainer = styled.div`
  width: 44px;
  height: 44px;
  object-fit: cover;
  overflow: hidden;
  border-radius: 50%;

  &img {
    width: 100%;
    height: auto;
  }
`;

export const TextBlock = styled.div`
  & p:first-child {
    margin-bottom: 4px;
    color: var(--text-secondary);
    font-size: 12px;
    font-weight: 500;
    line-height: 1.33;
  }
  & p:last-child {
    font-weight: 500;
    line-height: 1.5;
  }
`;

export const RadioBlock = styled.div`
  margin-bottom: 40px;
`;

export const RadioOption = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
  line-height: 1.37;
  margin-bottom: 18px;

  & input {
    margin: 0;
    width: 20px;
    height: 20px;
    padding: 4px;
    border-radius: 12px;
    border: 2px solid var(--border-light);
    appearance: none;

    &:checked {
      background: radial-gradient(var(--accent-main) 40%, var(--bg-main) 50%);
      border-color: var(--accent-main);
    }
  }
`;

export const RadioText = styled.p`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.33;
`;
