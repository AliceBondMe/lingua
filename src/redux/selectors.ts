import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const selectUserName = (state: RootState) => state.auth.name;
export const selectUserId = (state: RootState) => state.auth.uid;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;
export const selectAuthError = (state: RootState) => state.auth.authError;
export const selectFavorites = (state: RootState) => state.auth.favorites;
export const selectTeachers = (state: RootState) => state.teachers.teachers;
export const selectIsLoading = (state: RootState) => state.teachers.isLoading;
export const selectFiltered = (state: RootState) => state.teachers.isFiltered;
export const selectTotalPages = (state: RootState) => state.teachers.totalPages;
export const selectFilteredLanguage = (state: RootState) =>
  state.teachers.filters.language;
export const selectFilteredPrice = (state: RootState) =>
  state.teachers.filters.price_per_hour;
export const selectFilteredLevel = (state: RootState) =>
  state.teachers.filters.level;

const selectLanguages = (state: RootState) => state.teachers.languages;
const selectPrices = (state: RootState) => state.teachers.prices;

export const selectSortedLanguages = createSelector(
  [selectLanguages],

  (languages) => {
    const clearLanguages = [...new Set(languages)];
    clearLanguages.sort();
    return clearLanguages;
  }
);

export const selectSortedPrices = createSelector([selectPrices], (prices) => {
  const clearPrices = [...new Set(prices)];
  clearPrices.sort();
  return clearPrices;
});
