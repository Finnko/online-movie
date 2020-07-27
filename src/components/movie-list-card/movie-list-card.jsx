import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {compose} from 'redux';
import MoviePropType from '../../prop-types/movie';
import {PathName, ViewMode} from '../../const';
import withPreview from '../../hocs/with-preview/with-preview';
import VideoPlayer from '../video-player/video-player.jsx';

const MovieListCard = ({movie, viewMode, /* from hoc */ isPlaying, onMovieMouseEnter, onMovieMouseLeave}) => {
  const {id, title, thumb, preview} = movie;
  const isWithPlayer = viewMode === ViewMode.MOVIE_CARD.WITH_PLAYER;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={onMovieMouseEnter}
      onMouseLeave={onMovieMouseLeave}
    >
      <Link
        className="small-movie-card__link"
        to={`${PathName.MOVIE_PAGE}${id}`}
      >
        <div className="small-movie-card__image">
          {isWithPlayer
            ? (
              <VideoPlayer
                muted
                videoSrc={preview}
                poster={thumb}
                isPlaying={isPlaying}
              />)
            : <img src={thumb} alt={title} width="280" height="175"/>
          }
        </div>
      </Link>

      <h3 className="small-movie-card__title">
        <Link
          className="small-movie-card__link"
          to={`${PathName.MOVIE_PAGE}${id}`}
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
  viewMode: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

const MovieListCardWrapped = compose(
    withPreview,
    memo
)(MovieListCard);

export {MovieListCard};
export default MovieListCardWrapped;
