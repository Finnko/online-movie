import React from 'react';
import ReviewPropType from '../../prop-types/review';
import {getFormattedDate} from '../../utils/common';

const MovieReviewsItem = ({review}) => {
  const {comment, user, date, rating} = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user}</cite>
          <time className="review__date" dateTime="2016-12-20">{getFormattedDate(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

MovieReviewsItem.propTypes = {
  review: ReviewPropType.isRequired,
};

export default MovieReviewsItem;
