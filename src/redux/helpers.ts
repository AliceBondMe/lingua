import { PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "./slices/auth/authSlice";
import { equalTo, get, orderByChild, query } from "firebase/database";
import { usersRef } from "../firebase";

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

export const findUser = async (id: string) => {
  const userQuery = query(usersRef, orderByChild("uid"), equalTo(id));
  const snapshot = await get(userQuery);
  const user = snapshot.val();
  const userNested: any = Object.values(user)[0];
  const { name, uid } = userNested;

  return { uid, name };
};
