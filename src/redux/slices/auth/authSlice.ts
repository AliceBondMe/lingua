import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  addFavorite,
  loginUser,
  logoutUser,
  refreshUser,
  registerUser,
  removeFavorite,
} from "./authOperations";
import { handleRejectedAuth, handleUserIn } from "../../helpers";
import { TeachersData } from "../teachers/teachersSlice";

export interface AuthState {
  uid: string | null;
  name: string | null;
  favorites: TeachersData[];
  authError: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

const authInitialState: AuthState = {
  uid: null,
  name: null,
  favorites: [],
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
        state.favorites = action.payload.favorites;
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
      .addCase(addFavorite.fulfilled, (state, action: PayloadAction<any>) => {
        state.favorites = action.payload;
      })
      .addCase(
        removeFavorite.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.favorites = action.payload;
        }
      )
      .addCase(logoutUser.fulfilled, (state) => {
        state.uid = null;
        state.name = null;
        state.favorites = [];
        state.authError = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(logoutUser.rejected, handleRejectedAuth);
  },
});

export const authReducer = authSlice.reducer;
export const { clearAuthError } = authSlice.actions;
