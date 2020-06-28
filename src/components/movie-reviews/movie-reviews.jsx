import React from 'react';
import PropTypes from 'prop-types';
import ReviewPropType from '../../prop-types/review';
import MovieReviewsItem from './movie-reviews-item.jsx';

const MovieReviews = ({reviews}) => {
  const middle = Math.ceil(reviews.length / 2);

  const firstColumn = reviews.slice(0, middle);
  const secondColumn = reviews.slice(middle);

  const renderReviews = (reviewsList) => (
    reviewsList.map(({id, rating, user, date, comment}) => <MovieReviewsItem key={id} rating={rating} user={user} date={date} comment={comment}/>)
  );

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {renderReviews(firstColumn)}
      </div>
      <div className="movie-card__reviews-col">
        {secondColumn.length > 0 && renderReviews(secondColumn)}
      </div>
    </div>
  );
};

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(ReviewPropType).isRequired,
};

export default MovieReviews;
