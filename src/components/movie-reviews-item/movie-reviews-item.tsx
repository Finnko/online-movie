import * as React from 'react';
import {getFormattedDate, getFormattedTagDate} from '../../utils/common';
import {Review} from "../../interfaces";

type Props = {
  review: Review;
}

const MovieReviewsItem: React.FC<Props> = (props: Props) => {
  const {review} = props;
  const {comment, user, date, rating} = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={getFormattedTagDate(date)}>{getFormattedDate(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

export default MovieReviewsItem;
