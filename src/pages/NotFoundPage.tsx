import { useNavigate } from "react-router";
import pageNotFound from "../assets/images/page-not-found.png";
import { useEffect } from "react";
import { NotFoundPageMessage } from "./TeachersPage/TeachersPage.styled";

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  }, [navigate]);

  return (
    <>
      <NotFoundPageMessage>
        Page not found :( You will be automatically redirected to the Homepage
      </NotFoundPageMessage>
      <img src={pageNotFound} alt="404 RIP" />
    </>
  );
};

export default NotFoundPage;
