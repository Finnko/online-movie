import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import MoviePropType from '../../prop-types/movie';
import withPreview from '../../hocs/with-preview/with-preview';

const MovieListCard = ({movie, /* from hoc */ renderPlayer, onMovieMouseEnter, onMovieMouseLeave}) => {
  const {id, title, preview, videoSrc} = movie;

  const handleMouseEnter = () => onMovieMouseEnter(id);
  const handleMouseLeave = () => onMovieMouseLeave();

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-movie-card__image">
        {renderPlayer(videoSrc, preview, id)}
      </div>
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
};

const MovieListCardWrapped = withPreview(MovieListCard);

export default MovieListCardWrapped;
export {MovieListCard};
