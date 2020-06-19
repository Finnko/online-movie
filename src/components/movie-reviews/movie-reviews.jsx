import React from 'react';
import PropTypes from 'prop-types';
import ReviewPropType from '../../prop-types/review';
import MovieReviewsItem from './movie-reviews-item.jsx';

const MovieReviews = ({reviews}) => {
  const middle = Math.ceil(reviews.length / 2);

  const firstHalf = reviews.slice(0, middle);
  const secondHalf = reviews.slice(middle + 1);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {firstHalf.map((review) => (
          <MovieReviewsItem review={review} key={review.id} />
        ))}
      </div>
      <div className="movie-card__reviews-col">
        {secondHalf.map((review) => (
          <MovieReviewsItem review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
};

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(ReviewPropType).isRequired,
};

export default MovieReviews;
