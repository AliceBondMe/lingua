import { RootState } from "./store";

export const selectUserName = (state: RootState) => state.auth.name;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectAuthError = (state: RootState) => state.auth.authError;
export const selectTeachers = (state: RootState) => state.teachers.teachers;
