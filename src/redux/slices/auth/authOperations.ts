import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, usersRef } from "../../../firebase";
import { push } from "firebase/database";
import { UserData } from "../../../components/Forms/Registration";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { UserDataLogin } from "../../../components/Forms/Login";
import { findUser } from "../../helpers";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData: UserData, thunkApi) => {
    try {
      const { name, email, password } = userData;
      // registering user:
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // adding user to users collection
      const registeredUser = {
        name,
        email,
        uid: user.uid,
      };
      await push(usersRef, registeredUser);

      return registeredUser;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData: UserDataLogin, thunkApi) => {
    try {
      const { email, password } = userData;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const id = userCredential.user.uid;

      return findUser(id);
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  (id: string, thunkApi) => {
    try {
      return findUser(id);
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logout", (_, thunkApi) => {
  try {
    signOut(auth);
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});
