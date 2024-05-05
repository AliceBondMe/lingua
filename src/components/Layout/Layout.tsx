import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Main } from "./Layout.styled";
import { Header } from "../Header/Header";
import { Loader } from "../Loader/Loader";

const Layout = () => {
  return (
    <>
      <Header />

      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default Layout;
