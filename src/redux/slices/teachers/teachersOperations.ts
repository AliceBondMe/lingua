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
import { RootState } from "../../store";

export const fetchTeachers = createAsyncThunk(
  "teachers/fetchTeachers",
  async (page: number, thunkAPI) => {
    const startIndex = String(page - 1);
    const limit = page * 4;

    try {
      const teachersQuery = query(
        teachersRef,
        orderByKey(),
        startAt(startIndex),
        limitToFirst(limit)
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

export const fetchFilteredTeachers = createAsyncThunk(
  "teachers/fetchFilteredTeachers",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;
      const filters = state.teachers.filters;
      const price = filters.price_per_hour
        ? Number(filters.price_per_hour.split(" ")[0])
        : null;

      const language = filters.language;
      const level = filters.level;

      const snapshot = await get(teachersRef);

      const filteredTeachers: TeachersData[] = [];

      snapshot.forEach((snap) => {
        const teacher = snap.val();

        if (
          (!price || teacher.price_per_hour === price) &&
          (!language || teacher.languages.includes(language)) &&
          (!level || teacher.levels.includes(level))
        ) {
          filteredTeachers.push(teacher);
        }
      });

      return filteredTeachers;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchOptions = createAsyncThunk(
  "teachers/fetchOptions",
  async (_, thunkAPI) => {
    try {
      const languages: string[] = [];
      const prices: string[] = [];
      let totalItems: number = 0;

      const teachersQuery = query(teachersRef);
      const snapshot = await get(teachersQuery);

      snapshot.forEach((snap) => {
        languages.push(...snap.val().languages);
        prices.push(`${snap.val().price_per_hour} $`);
        totalItems += 1;
      });

      const totalPages = Math.ceil(totalItems / 4);

      return { languages, prices, totalPages };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
