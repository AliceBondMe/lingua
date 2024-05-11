import { FC, useState } from "react";
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

export interface TeacherCardProps {
  teacher: TeachersData;
}

export const TeacherCard: FC<TeacherCardProps> = ({ teacher }) => {
  const [isReadMore, setIsReadMore] = useState(false);

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
          <FavButton type="button" aria-label="add to favorites">
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

        <BookTrialBtn
          teacherName={`${name} ${surname}`}
          teacherPhoto={avatar_url}
        />
      </ContentBlock>
    </Card>
  );
};
