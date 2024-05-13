import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFilteredTeachers,
  fetchOptions,
  fetchTeachers,
} from "../../redux/slices/teachers/teachersOperations";
import { AppDispatch } from "../../redux/store";
import {
  selectTeachers,
  selectFiltered,
  selectFilteredLanguage,
  selectFilteredLevel,
  selectFilteredPrice,
  selectTotalPages,
  selectIsLoading,
} from "../../redux/selectors";
import { TeachersData } from "../../redux/slices/teachers/teachersSlice";
import { TeacherCard } from "../../components/TeacherCard/TeacherCard";
import { nanoid } from "@reduxjs/toolkit";
import { List, LoadMoreBtn, NoTeachersMessage } from "./TeachersPage.styled";
import { Filters } from "../../components/Filters/Filters";
import { ScrollUpButton } from "../../components/ScrollUpButton/ScrollUpButton";

const TeachersPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const teachers: TeachersData[] = useSelector(selectTeachers);
  const isLoading = useSelector(selectIsLoading);
  const isFiltered = useSelector(selectFiltered);
  const filteredLanguage = useSelector(selectFilteredLanguage);
  const filteredLevel = useSelector(selectFilteredLevel);
  const filteredPrice = useSelector(selectFilteredPrice);
  const totalPages = useSelector(selectTotalPages);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchOptions());
  }, [dispatch]);

  useEffect(() => {
    isFiltered
      ? dispatch(fetchFilteredTeachers())
      : dispatch(fetchTeachers(page));
  }, [
    dispatch,
    isFiltered,
    filteredLanguage,
    filteredLevel,
    filteredPrice,
    page,
  ]);

  return (
    <>
      <Filters />
      {!isLoading && !teachers?.length ? (
        <NoTeachersMessage>
          {isFiltered
            ? "There are no teachers that meet your filter criterias. Please try something else"
            : "Something went wrong :( Please try again later"}
        </NoTeachersMessage>
      ) : (
        <>
          <List>
            {teachers.map((teacher: TeachersData) => (
              <li key={nanoid()}>
                <TeacherCard teacher={teacher} />
              </li>
            ))}
          </List>

          {!isFiltered && page < totalPages - 1 && (
            <LoadMoreBtn
              type="button"
              onClick={() => setPage((prev) => prev + 1)}
            >
              Load more
            </LoadMoreBtn>
          )}
        </>
      )}
      <ScrollUpButton />
    </>
  );
};

export default TeachersPage;
