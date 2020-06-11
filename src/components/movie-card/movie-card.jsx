import React from 'react';
import MoviePropType from '../../prop-types/movie';
import PropTypes from 'prop-types';

const MovieCard = ({movie, onMovieMouseOver, onMovieMouseLeave}) => {
  const {id, title, thumb} = movie;

  const handleMouseOver = () => onMovieMouseOver(id);
  const handleMouseLeave = () => onMovieMouseLeave();

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-movie-card__image">
        <img src={`${thumb}`} alt={`${title}`} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">
          {title}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  onMovieMouseOver: PropTypes.func,
  onMovieMouseLeave: PropTypes.func,
  movie: MoviePropType.isRequired,
};

export default MovieCard;
