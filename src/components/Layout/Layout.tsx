import { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Main } from "./Layout.styled";
import { Header } from "../Header/Header";
import { Loader } from "../Loader/Loader";

const Layout = () => {
  const { pathname } = useLocation();
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    if (pathname.includes("teachers") || pathname.includes("favorites")) {
      setIsHomePage(false);
    } else {
      setIsHomePage(true);
    }
  }, [pathname]);

  return (
    <>
      <Header />

      <Main $isHome={isHomePage}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default Layout;
