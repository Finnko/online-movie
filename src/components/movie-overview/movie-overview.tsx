import * as React from 'react';
import {Config} from '../../const';
import {getLevelFromRating} from '../../utils/common';

type Props = {
  actors: string[];
  rating: number;
  ratingCount: number;
  description: string;
  director: string;
}

const MovieOverview: React.FC<Props> = (props: Props) => {
  const {
    actors,
    rating,
    ratingCount,
    director,
    description
  } = props;

  const ratingFormatted = getLevelFromRating(rating, Config.MOVIE_RATING_MAP);
  const actorsFormatted = actors.slice(0, Config.MOVIE_ACTORS_TO_SHOW).join(`, `);

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingFormatted}</span>
          <span className="movie-rating__count">{ratingCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

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
    </React.Fragment>
  );
};

export default MovieOverview;
