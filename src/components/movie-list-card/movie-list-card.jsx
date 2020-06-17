import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import MoviePropType from '../../prop-types/movie';
import VideoPlayer from '../video-player/video-player.jsx';

const MovieListCard = ({movie, onMovieMouseOver, onMovieMouseLeave, activeItemId}) => {
  const {id, title, posterSrc, videoSrc} = movie;

  const handleMouseOver = () => onMovieMouseOver(id);
  const handleMouseLeave = () => onMovieMouseLeave();

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-movie-card__image">
        <VideoPlayer isPlaying={activeItemId === id} posterSrc={posterSrc} videoSrc={videoSrc} />
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
  activeItemId: PropTypes.string,
};

export default MovieListCard;
