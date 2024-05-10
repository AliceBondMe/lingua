import { NavLink } from "react-router-dom";
import {
  AuthGroup,
  HeaderStyled,
  LoginOutBtn,
  Logo,
  Navigation,
  RegistrationBtn,
} from "./Header.styled";
import { Icon } from "../Icon/Icon";
import { FC, useState } from "react";
import { useShowModal } from "../../hooks/useShowModal";
import { Modal } from "../Modal/Modal";
import { Registration } from "../Forms/Registration";
import { Login } from "../Forms/Login";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/selectors";
import { AppDispatch } from "../../redux/store";
import { logoutUser } from "../../redux/slices/auth/authOperations";
import { LuLogOut } from "react-icons/lu";

export const Header: FC = () => {
  const { isShowModal, openModal, closeModal } = useShowModal();
  const [isLogin, setIsLogin] = useState(true);
  const userName = useSelector(selectUserName);
  const dispatch: AppDispatch = useDispatch();

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
        {userName ? (
          <AuthGroup>
            <p>Welcome, {userName}!</p>
            <LoginOutBtn type="button" onClick={() => dispatch(logoutUser())}>
              <LuLogOut size={20} />
              Log out
            </LoginOutBtn>
          </AuthGroup>
        ) : (
          <AuthGroup>
            <LoginOutBtn type="button" onClick={openModal}>
              <Icon name="icon-login" width={20} height={20} />
              Log in
            </LoginOutBtn>
            <RegistrationBtn
              type="button"
              onClick={() => {
                setIsLogin(false);
                openModal();
              }}
            >
              Registration
            </RegistrationBtn>
          </AuthGroup>
        )}
      </HeaderStyled>
      {isShowModal &&
        (isLogin ? (
          <Modal
            closeModal={closeModal}
            children={<Login closeModal={closeModal} />}
          />
        ) : (
          <Modal
            closeModal={closeModal}
            children={<Registration closeModal={closeModal} />}
          />
        ))}
    </>
  );
};
