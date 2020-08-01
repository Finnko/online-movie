import * as React from 'react';
import {getFormattedMovieTime} from '../../utils/common';

type Props = {
  actors: string[],
  releaseYear: number,
  genre: string,
  runTime: number,
  director: string,
}

const MovieDetails:React.FC<Props> = ({
  actors,
  releaseYear,
  genre,
  runTime,
  director
}) => {
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
              <React.Fragment key={actor + index}>
                {actor}
                <br/>
              </React.Fragment>))
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

export default MovieDetails;
