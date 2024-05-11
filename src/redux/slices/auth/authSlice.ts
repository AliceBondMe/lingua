import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  logoutUser,
  refreshUser,
  registerUser,
} from "./authOperations";
import { handleRejectedAuth, handleUserIn } from "../../helpers";

export interface AuthState {
  uid: string | null;
  name: string | null;
  authError: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

const authInitialState: AuthState = {
  uid: null,
  name: null,
  authError: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    clearAuthError(state) {
      state.authError = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(registerUser.fulfilled, handleUserIn)
      .addCase(registerUser.rejected, handleRejectedAuth)
      .addCase(loginUser.fulfilled, handleUserIn)
      .addCase(loginUser.rejected, handleRejectedAuth)
      .addCase(refreshUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.uid = action.payload.uid;
        state.name = action.payload.name;
        state.isLoggedIn = true;
        state.authError = null;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, (state, action: PayloadAction<any>) => {
        state.authError = action.payload;
        state.isRefreshing = false;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.uid = null;
        state.name = null;
        state.authError = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logoutUser.rejected, handleRejectedAuth);
  },
});

export const authReducer = authSlice.reducer;
export const { clearAuthError } = authSlice.actions;
