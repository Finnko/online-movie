import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Errors, PathName, ViewMode} from '../../const';
import MoviePropType from '../../prop-types/movie';
import history from '../../history';
import Header from '../header/header.tsx';
import Icon from '../icon/icon.tsx';

const MovieBanner = ({
  movie,
  viewMode,
  updateFavoriteStatus,
  loading,
  error,
  isAuth,
}) => {
  const {
    id,
    title,
    genre,
    releaseYear,
    poster,
    backgroundImage,
    isFavorite,
  } = movie;

  const isMainView = viewMode === ViewMode.PROMO.MAIN;

  const handleMyListButtonClick = () => {
    if (!isAuth) {
      history.push(PathName.SIGN_IN);
      return;
    }
    updateFavoriteStatus(id, Number(!isFavorite));
  };

  return (
    <Fragment>
      <div className="movie-card__bg" >
        <img src={backgroundImage} alt={title}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header className={`movie-card__head`}/>

      <div className="movie-card__wrap">
        <div className={isMainView ? `movie-card__info` : ``}>
          <div className={isMainView ? `movie-card__poster` : `visually-hidden`}>
            <img src={poster} alt={title} width="218" height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{releaseYear}</span>
            </p>

            <div className="movie-card__buttons">
              <Link
                to={`${PathName.PLAYER}${id}`}
                className="btn btn--play movie-card__button"
                type="button"
              >
                <Icon width="19" height="19" name="play-s"/>
                <span>Play</span>
              </Link>

              <button
                className="btn btn--list movie-card__button"
                type="button"
                disabled={loading}
                onClick={handleMyListButtonClick}
              >
                {!isFavorite
                  ? <Icon width="19" height="20" name="add"/>
                  : <Icon width="18" height="14" name="in-list"/>
                }
                <span>My list</span>
              </button>

              {!loading && error && Errors.UPDATE_FAVORITE}

              {!isMainView &&
                <Link
                  to={`${PathName.MOVIE_PAGE}${id}${PathName.ADD_REVIEW}`}
                  className="btn movie-card__button"
                >
                  Add review
                </Link>
              }
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

MovieBanner.propTypes = {
  movie: MoviePropType.isRequired,
  viewMode: PropTypes.string.isRequired,
  updateFavoriteStatus: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
};


export default MovieBanner;
