import React from 'react';
import PropTypes from 'prop-types';

import {getFormattedDate, getFormattedTagDate} from '../../utils/common';

const MovieReviewsItem = ({comment, user, date, rating}) => {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user}</cite>
          <time className="review__date" dateTime={getFormattedTagDate(date)}>{getFormattedDate(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

MovieReviewsItem.propTypes = {
  comment: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  date: PropTypes.object.isRequired,
};

export default MovieReviewsItem;
