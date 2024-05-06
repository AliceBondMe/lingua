import { NavLink } from "react-router-dom";
import {
  BtnsGroup,
  HeaderStyled,
  LoginBtn,
  Logo,
  Navigation,
  RegistrationBtn,
} from "./Header.styled";
import { Icon } from "../Icon/Icon";
import { FC } from "react";
import { useShowModal } from "../../hooks/useShowModal";
import { Modal } from "../Modal/Modal";
import { Registration } from "../Forms/Registration";

export const Header: FC = () => {
  const { isShowModal, openModal, closeModal } = useShowModal();

  return (
    <>
      <HeaderStyled>
        <Logo to="/">
          <Icon name="icon-ukraine" width={28} height={28} />
          <p>LearnLingo</p>
        </Logo>
        <Navigation>
          <NavLink to="/">Home</NavLink>
          <NavLink to="teachers">Teachers</NavLink>
          <NavLink to="favorites">Favorites</NavLink>
        </Navigation>
        <BtnsGroup>
          <LoginBtn type="button" onClick={openModal}>
            <Icon name="icon-login" width={20} height={20} />
            Log in
          </LoginBtn>
          <RegistrationBtn type="button" onClick={openModal}>
            Registration
          </RegistrationBtn>
        </BtnsGroup>
      </HeaderStyled>
      {isShowModal && (
        <Modal closeModal={closeModal} children={<Registration />} />
      )}
    </>
  );
};
