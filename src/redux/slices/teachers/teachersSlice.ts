import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchTeachers } from "./teachersOperations";

export interface TeachersData {
  id: string;
  name: string;
}

export interface TeachersState {
  teachers: TeachersData[];
  isLoading: boolean;
  error: any;
}

const teachersInitialState: TeachersState = {
  teachers: [],
  isLoading: false,
  error: null,
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState: teachersInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = null;
        state.teachers = action.payload;
      })
      .addCase(fetchTeachers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTeachers.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const teachersReducer = teachersSlice.reducer;
