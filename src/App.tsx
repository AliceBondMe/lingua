import { Route, Routes } from "react-router";
import { GlobalStyle } from "./assets/styles/GlobalStyles";
import { lazy, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/slices/auth/authOperations";
import { AppDispatch } from "./redux/store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { PrivateRoute } from "./routes/PrivateRoute";

const HomePage = lazy(() => import("./pages/HomePage"));
const TeachersPage = lazy(() => import("./pages/TeachersPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const id = user.uid;
        dispatch(refreshUser(id));
      }
    });
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route
            path="/favorites"
            element={<PrivateRoute redirectTo="/" component={FavoritesPage} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;

