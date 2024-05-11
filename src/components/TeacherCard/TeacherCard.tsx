import { FC, useEffect, useState } from "react";
import { TeachersData } from "../../redux/slices/teachers/teachersSlice";
import {
  Card,
  ContentBlock,
  DataBlock,
  FavButton,
  Feature,
  FeatureValue,
  FeaturesList,
  FirstRowWrap,
  IconParagraph,
  LevelsItem,
  LevelsList,
  Name,
  PhotoWrap,
  ReadLessBtn,
  ReadMoreBtn,
} from "./TeacherCard.styled";
import { Icon } from "../Icon/Icon";
import { nanoid } from "@reduxjs/toolkit";
import { ReadMore } from "./ReadMore";
import { IoIosArrowUp } from "react-icons/io";
import { BookTrialBtn } from "../BookTrial/BookTrialBtn";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../../redux/slices/auth/authOperations";
import { AppDispatch } from "../../redux/store";
import {
  selectFavorites,
  selectIsLoggedIn,
  selectUserId,
} from "../../redux/selectors";

export interface TeacherCardProps {
  teacher: TeachersData;
}

export const TeacherCard: FC<TeacherCardProps> = ({ teacher }) => {
  const dispatch: AppDispatch = useDispatch();
  const uid = useSelector(selectUserId);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const favorites = useSelector(selectFavorites);
  const [isReadMore, setIsReadMore] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const isInFavorites = favorites?.find(
      (fav: TeachersData) => fav.avatar_url === teacher.avatar_url
    );

    isInFavorites ? setIsFavorite(true) : setIsFavorite(false);
  }, [favorites]);

  const handleFavorite = () => {
    if (!isFavorite) {
      isLoggedIn && dispatch(addFavorite({ item: teacher, id: uid }));
    } else {
      isLoggedIn &&
        dispatch(removeFavorite({ avatarUrl: teacher.avatar_url, id: uid }));
    }
    isLoggedIn
      ? setIsFavorite((prev) => !prev)
      : alert("Please Log in to add favorites");
  };

  const {
    avatar_url,
    name,
    lessons_done,
    rating,
    price_per_hour,
    surname,
    languages,
    lesson_info,
    conditions,
    levels,
  } = teacher;

  return (
    <Card>
      <PhotoWrap>
        <div>
          <img src={avatar_url} alt={`&{teacher.name} photo`} />
        </div>
        <Icon name="icon-online" width={12} height={12} />
      </PhotoWrap>
      <ContentBlock>
        <FirstRowWrap>
          <p>Languages</p>
          <DataBlock>
            <IconParagraph>
              <Icon name="icon-book" width={16} height={16} />
              Lessons online
            </IconParagraph>
            <p>Lessons done: {lessons_done}</p>
            <IconParagraph>
              <Icon name="icon-star" width={16} height={16} />
              Rating: {rating}
            </IconParagraph>
            <p>
              Price / 1 hour: <span>{price_per_hour}$</span>
            </p>
          </DataBlock>

          <FavButton
            type="button"
            aria-label="add to favorites"
            onClick={handleFavorite}
            $isFavorite={isFavorite}
          >
            <Icon name="icon-heart" width={26} height={26} />
          </FavButton>
        </FirstRowWrap>
        <Name>
          {name} {surname}
        </Name>
        <FeaturesList>
          <li>
            <Feature>Speaks: </Feature>
            <FeatureValue className="underlined">
              {languages.join(", ")}
            </FeatureValue>
          </li>
          <li>
            <Feature>Lesson Info: </Feature>
            <FeatureValue>{lesson_info}</FeatureValue>
          </li>
          <li>
            <Feature>Conditions: </Feature>
            <FeatureValue>{conditions.join(" ")}</FeatureValue>
          </li>
        </FeaturesList>

        {isReadMore ? (
          <>
            <ReadMore teacher={teacher} />
            <ReadLessBtn
              type="button"
              aria-label="read less"
              onClick={() => setIsReadMore(false)}
            >
              <IoIosArrowUp size={28} />
            </ReadLessBtn>
          </>
        ) : (
          <ReadMoreBtn type="button" onClick={() => setIsReadMore(true)}>
            Read more
          </ReadMoreBtn>
        )}

        <LevelsList>
          {levels.map((level) => (
            <LevelsItem key={nanoid()}>
              <span>{level}</span>
            </LevelsItem>
          ))}
        </LevelsList>

        {isReadMore && (
          <BookTrialBtn
            teacherName={`${name} ${surname}`}
            teacherPhoto={avatar_url}
          />
        )}
      </ContentBlock>
    </Card>
  );
};
