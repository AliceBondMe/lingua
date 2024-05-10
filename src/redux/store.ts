import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth/authSlice";
import { teachersReducer } from "./slices/teachers/teachersSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  teachers: teachersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV === "development",
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
