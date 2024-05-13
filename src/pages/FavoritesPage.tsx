import { FC } from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "../redux/selectors";
import { TeachersData } from "../redux/slices/teachers/teachersSlice";
import { nanoid } from "@reduxjs/toolkit";
import { TeacherCard } from "../components/TeacherCard/TeacherCard";
import { FavHeader, List } from "./TeachersPage/TeachersPage.styled";

const FavoritesPage: FC = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <>
      <FavHeader>
        {favorites?.length
          ? "Here are all your favorite teachers: "
          : "You don't have favorites yet :("}
      </FavHeader>
      <List>
        {favorites &&
          favorites.map((teacher: TeachersData) => (
            <li key={nanoid()}>
              <TeacherCard teacher={teacher} />
            </li>
          ))}
      </List>
    </>
  );
};

export default FavoritesPage;
