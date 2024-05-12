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
import { FC, useEffect, useState } from "react";
import { useShowModal } from "../../hooks/useShowModal";
import { Modal } from "../Modal/Modal";
import { Registration } from "../Forms/Registration";
import { Login } from "../Forms/Login";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserName } from "../../redux/selectors";
import { AppDispatch } from "../../redux/store";
import { logoutUser } from "../../redux/slices/auth/authOperations";
import { LuLogOut } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";

export const Header: FC = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { isShowModal, openModal, closeModal } = useShowModal();
  const [isLogin, setIsLogin] = useState(true);
  const userName = useSelector(selectUserName);
  const dispatch: AppDispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <HeaderStyled>
        <Logo to="/">
          <Icon
            name="icon-ukraine"
            width={isMobile ? 20 : 28}
            height={isMobile ? 20 : 28}
          />
          <p>LearnLingo</p>
        </Logo>
        <Navigation>
          <NavLink to="/">
            {isMobile ? <AiOutlineHome size={20} /> : "Home"}
          </NavLink>
          <NavLink to="teachers">
            {isMobile ? <BsPeople size={20} /> : "Teachers"}
          </NavLink>
          {isLoggedIn && (
            <NavLink to="favorites">
              {isMobile ? <MdFavoriteBorder size={20} /> : "Favorites"}
            </NavLink>
          )}
        </Navigation>
        {userName ? (
          <AuthGroup>
            <p>Welcome, {userName}!</p>
            <LoginOutBtn type="button" onClick={() => dispatch(logoutUser())}>
              <LuLogOut size={20} />
              {!isMobile && "Log out"}
            </LoginOutBtn>
          </AuthGroup>
        ) : (
          <AuthGroup>
            <LoginOutBtn
              type="button"
              onClick={() => {
                setIsLogin(true);
                openModal();
              }}
            >
              <Icon name="icon-login" width={20} height={20} />
              {!isMobile && "Log in"}
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
