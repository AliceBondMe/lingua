import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { FC } from "react";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/selectors";

export interface PrivateRouteProps {
  component: React.ComponentType<any>;
  redirectTo: string;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const notAuthorised = !isLoggedIn && !isRefreshing;

  return notAuthorised ? <Navigate to={redirectTo} /> : <Component />;
};
