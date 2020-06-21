import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Config} from '../../const';
import {getLevelFromRating} from '../../utils/common';


const MovieOverview = ({actors, rating, ratingCount, director, description}) => {
  const ratingFormatted = getLevelFromRating(rating, Config.MOVIE_RATING_MAP);
  const actorsFormatted = actors.slice(0, Config.MOVIE_ACTORS_TO_SHOW).join(`, `);

  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingFormatted}</span>
          <span className="movie-rating__count">{ratingCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description.toString()}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring">
          <strong>
            Starring:
            {` ${actors.length < Config.MOVIE_ACTORS_TO_SHOW
              ? actorsFormatted
              : `${actorsFormatted} and other`}`}
          </strong>
        </p>
      </div>
    </Fragment>
  );
};

MovieOverview.propTypes = {
  actors: PropTypes.arrayOf(PropTypes.string).isRequired,
  director: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  ratingCount: PropTypes.number.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieOverview;
