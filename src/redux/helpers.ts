import { PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "./slices/auth/authSlice";
import { TeachersState } from "./slices/teachers/teachersSlice";
import { equalTo, get, orderByChild, query } from "firebase/database";
import { usersRef } from "../firebase";

export const handleUserIn = (state: AuthState, action: PayloadAction<any>) => {
  state.uid = action.payload.uid;
  state.name = action.payload.name;
  state.error = null;

  state.isLoggedIn = true;
};

export const handleRejected = (
  state: AuthState | TeachersState,
  action: PayloadAction<any>
) => {
  state.error = action.payload;
};

export const findUser = async (id: string) => {
  const userQuery = query(usersRef, orderByChild("uid"), equalTo(id));
  const snapshot = await get(userQuery);
  const user = snapshot.val();
  const userNested: any = Object.values(user)[0];
  const { name, uid } = userNested;

  return { uid, name };
};
