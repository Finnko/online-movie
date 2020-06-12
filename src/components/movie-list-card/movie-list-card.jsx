import React from 'react';
import {Link} from 'react-router-dom';
import MoviePropType from '../../prop-types/movie';
import PropTypes from 'prop-types';

const MovieListCard = ({movie, onMovieMouseOver, onMovieMouseLeave}) => {
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
  onMovieMouseOver: PropTypes.func,
  onMovieMouseLeave: PropTypes.func,
  movie: MoviePropType.isRequired,
};

export default MovieListCard;
