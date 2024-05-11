import { PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "./slices/auth/authSlice";

export const handleUserIn = (state: AuthState, action: PayloadAction<any>) => {
  state.uid = action.payload.uid;
  state.name = action.payload.name;
  state.authError = null;

  state.isLoggedIn = true;
};

export const handleRejectedAuth = (
  state: AuthState,
  action: PayloadAction<any>
) => {
  state.authError = action.payload;
};
