import { Route, Routes } from "react-router";
import { GlobalStyle } from "./assets/styles/GlobalStyles";
import { lazy } from "react";
import Layout from "./components/Layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage"));
const TeachersPage = lazy(() => import("./pages/TeachersPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
