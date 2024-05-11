import { createAsyncThunk } from "@reduxjs/toolkit";
import { teachersRef } from "../../../firebase";
import {
  get,
  limitToFirst,
  orderByKey,
  query,
  startAt,
} from "firebase/database";
import { TeachersData } from "./teachersSlice";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (startIndex: string, thunkAPI) => {
    try {
      const teachersQuery = query(
        teachersRef,
        orderByKey(),
        startAt(startIndex),
        limitToFirst(4)
      );

      const teachers: TeachersData[] = [];

      const snapshot = await get(teachersQuery);

      snapshot.forEach((snap) => {
        teachers.push(snap.val());
      });

      return teachers;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
