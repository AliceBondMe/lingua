import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  logoutUser,
  refreshUser,
  registerUser,
} from "./authOperations";
import { handleRejected, handleUserIn } from "../../helpers";

export interface AuthState {
  uid: string | null;
  name: string | null;
  error: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

const authInitialState: AuthState = {
  uid: null,
  name: null,
  error: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(registerUser.fulfilled, handleUserIn)
      .addCase(registerUser.rejected, handleRejected)
      .addCase(loginUser.fulfilled, handleUserIn)
      .addCase(loginUser.rejected, handleRejected)
      .addCase(refreshUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.uid = action.payload.uid;
        state.name = action.payload.name;
        state.isLoggedIn = true;
        state.error = null;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.isRefreshing = false;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.uid = null;
        state.name = null;
        state.error = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logoutUser.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
