import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import MoviePropType from '../../prop-types/movie';
import {ViewMode} from '../../const';
import withPreview from '../../hocs/with-preview/with-preview';

const MovieListCard = ({movie, viewMode, /* from hoc */ renderPlayer, onMovieMouseEnter, onMovieMouseLeave}) => {
  const {id, title, preview, videoSrc} = movie;
  const isWithPlayer = viewMode === ViewMode.MOVIE_CARD.WITH_PLAYER;

  const handleMouseEnter = () => onMovieMouseEnter(id);
  const handleMouseLeave = () => onMovieMouseLeave();

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isWithPlayer &&
      <div className="small-movie-card__image">
        {renderPlayer(videoSrc, preview, id)}
      </div>}

      {!isWithPlayer &&
      <div className="small-movie-card__image">
        <img src={preview} alt={title} width="280" height="175"/>
      </div>}

      <h3 className="small-movie-card__title">
        <Link
          className="small-movie-card__link"
          to={`/movie/${id}`}
        >
          {title}
        </Link>
      </h3>
    </article>
  );
};

MovieListCard.propTypes = {
  onMovieMouseEnter: PropTypes.func,
  onMovieMouseLeave: PropTypes.func,
  movie: MoviePropType.isRequired,
  renderPlayer: PropTypes.func,
  viewMode: PropTypes.string.isRequired,
};

const MovieListCardWrapped = withPreview(MovieListCard);

export {MovieListCard};
export default MovieListCardWrapped;
