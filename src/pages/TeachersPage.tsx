import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "../redux/slices/teachers/teachersOperations";
import { AppDispatch } from "../redux/store";
import { selectTeachers } from "../redux/selectors";
import { TeachersData } from "../redux/slices/teachers/teachersSlice";
import { TeacherCard } from "../components/TeacherCard/TeacherCard";
import { nanoid } from "@reduxjs/toolkit";
import { List } from "./TeachersPage.styled";

const TeachersPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const teachers: TeachersData[] = useSelector(selectTeachers);

  useEffect(() => {
    dispatch(fetchTeachers("0"));
  }, [dispatch]);

  return (
    <List>
      {teachers.map((teacher: TeachersData) => (
        <li key={nanoid()}>
          <TeacherCard teacher={teacher} />
        </li>
      ))}
    </List>
  );
};

export default TeachersPage;
