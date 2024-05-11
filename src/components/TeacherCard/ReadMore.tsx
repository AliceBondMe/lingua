import { FC } from "react";
import { TeacherCardProps } from "./TeacherCard";
import { nanoid } from "@reduxjs/toolkit";
import {
  IconParagraph,
  ReviewerBlock,
  ReviewsItem,
  ReviewsList,
} from "./TeacherCard.styled";
import { Icon } from "../Icon/Icon";

export const ReadMore: FC<TeacherCardProps> = ({ teacher }) => {
  const { reviews } = teacher;

  return (
    <ReviewsList>
      {reviews.map(({ reviewer_name, reviewer_rating, comment }) => (
        <ReviewsItem key={nanoid()}>
          <ReviewerBlock $firstLetter={reviewer_name[0]}>
            <p>{reviewer_name}</p>
            <IconParagraph>
              <Icon name="icon-star" width={16} height={16} />
              {reviewer_rating.toFixed(1)}
            </IconParagraph>
          </ReviewerBlock>
          <p>{comment}</p>
        </ReviewsItem>
      ))}
    </ReviewsList>
  );
};
