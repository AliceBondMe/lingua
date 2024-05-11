import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectAuthError } from "../redux/selectors";
import { clearAuthError } from "../redux/slices/auth/authSlice";

export const useAutoClearAuthError = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearAuthError());
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [error, dispatch]);

  return error;
};
