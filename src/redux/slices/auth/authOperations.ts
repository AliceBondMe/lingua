import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db, usersRef } from "../../../firebase";
import {
  equalTo,
  get,
  orderByChild,
  push,
  query,
  ref,
  update,
} from "firebase/database";
import { UserData } from "../../../components/Forms/Registration";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { UserDataLogin } from "../../../components/Forms/Login";
import { TeachersData } from "../teachers/teachersSlice";

interface AddFavoritesData {
  id: string | null;
  item: TeachersData;
}

interface RemoveFavoritesData {
  id: string | null;
  avatarUrl: string;
}

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
      if (user) {
        const registeredUser = {
          name,
          email,
          uid: user.uid,
          favorites: [],
        };
        await push(usersRef, registeredUser);

        return registeredUser;
      }
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
      const uid = userCredential.user.uid;
      const usersQuery = query(usersRef, orderByChild("uid"), equalTo(uid));
      const snapshot = await get(usersQuery);
      const user = snapshot.val();
      const userKey = Object.keys(user)[0];

      return user[userKey];
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (id: string, thunkApi) => {
    try {
      const usersQuery = query(usersRef, orderByChild("uid"), equalTo(id));
      const snapshot = await get(usersQuery);
      const user = snapshot.val();
      const userKey = Object.keys(user)[0];

      return user[userKey];
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

export const addFavorite = createAsyncThunk(
  "auth/addFavorite",
  async (data: AddFavoritesData, thunkApi) => {
    try {
      const { id: uid, item } = data;

      const usersQuery = query(usersRef, orderByChild("uid"), equalTo(uid));
      const snapshot = await get(usersQuery);
      const userData = snapshot.val();
      const userKey = Object.keys(userData)[0];

      const favorites = !userData[userKey].favorites
        ? [item]
        : [...userData[userKey].favorites, item];

      const userFavoritesPath = `/users/${userKey}`;

      await update(ref(db, userFavoritesPath), { favorites });

      return favorites;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const removeFavorite = createAsyncThunk(
  "auth/removeFavorite",
  async (data: RemoveFavoritesData, thunkApi) => {
    try {
      const { id: uid, avatarUrl } = data;

      const usersQuery = query(usersRef, orderByChild("uid"), equalTo(uid));
      const snapshot = await get(usersQuery);
      const userData = snapshot.val();
      const userKey = Object.keys(userData)[0];

      const favorites = !userData[userKey].favorites
        ? []
        : [
            ...userData[userKey].favorites.filter(
              (fav: TeachersData) => fav.avatar_url !== avatarUrl
            ),
          ];

      const userFavoritesPath = `/users/${Object.keys(userData)[0]}`;

      await update(ref(db, userFavoritesPath), { favorites });

      return favorites;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
