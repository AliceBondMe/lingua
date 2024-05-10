import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (_, thunkAPI) => {
    try {
      //...
      const teachers = [1, 2, 3];

      return teachers;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
