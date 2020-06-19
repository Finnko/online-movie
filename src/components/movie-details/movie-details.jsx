import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import {getFormattedMovieTime} from '../../utils/common';

const MovieDetails = ({actors, releaseYear, genre, runTime, director}) => {
  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {actors.map((actor, index) => (
              <Fragment key={actor + index}>
                {actor}
                <br/>
              </Fragment>))
            }
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{getFormattedMovieTime(runTime)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{releaseYear}</span>
        </p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  actors: PropTypes.arrayOf(PropTypes.string).isRequired,
  releaseYear: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  runTime: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
};

export default MovieDetails;
