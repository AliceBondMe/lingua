import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  fetchFilteredTeachers,
  fetchOptions,
  fetchTeachers,
} from "./teachersOperations";

export interface TeachersData {
  name: string;
  surname: string;
  languages: string[];
  levels: string[];
  rating: number;
  reviews: {
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
  }[];
  price_per_hour: number;
  lessons_done: number;
  avatar_url: string;
  lesson_info: string;
  conditions: string[];
  experience: string[];
}

export interface TeachersState {
  teachers: TeachersData[];
  prices: string[];
  languages: string[];
  totalPages: number;
  isLoading: boolean;
  error: any;
  isFiltered: boolean;
  filters: {
    language: string | null;
    level: string | null;
    price_per_hour: string | null;
  };
}

const teachersInitialState: TeachersState = {
  teachers: [],
  prices: [],
  languages: [],
  totalPages: 1,
  isLoading: false,
  error: null,
  isFiltered: false,
  filters: {
    language: null,
    level: null,
    price_per_hour: null,
  },
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState: teachersInitialState,
  reducers: {
    setLanguageAction(state, action) {
      state.filters.language = action.payload;
      state.isFiltered = true;
    },
    setLevelAction(state, action) {
      state.filters.level = action.payload;
      state.isFiltered = true;
    },
    setPriceAction(state, action) {
      state.filters.price_per_hour = action.payload;
      state.isFiltered = true;
    },
    setFiltersOff(state) {
      state.filters.language = null;
      state.filters.level = null;
      state.filters.price_per_hour = null;
      state.isFiltered = false;
    },
  },
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
      })
      .addCase(
        fetchFilteredTeachers.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = null;
          state.teachers = action.payload;
        }
      )
      .addCase(fetchFilteredTeachers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchFilteredTeachers.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addCase(fetchOptions.fulfilled, (state, action: PayloadAction<any>) => {
        state.prices = action.payload.prices;
        state.languages = action.payload.languages;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchOptions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOptions.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setLanguageAction,
  setLevelAction,
  setPriceAction,
  setFiltersOff,
} = teachersSlice.actions;
export const teachersReducer = teachersSlice.reducer;
