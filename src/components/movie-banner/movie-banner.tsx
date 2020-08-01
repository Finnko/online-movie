import * as React from 'react';
import {Link} from 'react-router-dom';
import {Errors, PathName, ViewMode} from '../../const';
import {Movie} from '../../interfaces';
import classNames from 'classnames';
import history from '../../history';
import Header from '../header/header';
import Icon from '../icon/icon';

type Props = {
  movie: Movie;
  viewMode: string;
  updateFavoriteStatus: (id: number, status: number) => void;
  loading: boolean;
  error: boolean;
  isAuth: boolean;
}

const MovieBanner: React.FC<Props> = (props: Props) => {
  const {
    movie,
    viewMode,
    updateFavoriteStatus,
    loading,
    error,
    isAuth,
  } = props;

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

  const movieCardClass = classNames({'movie-card__info': isMainView});
  const moviePosterClass = classNames({
    'movie-card__poster': isMainView,
    'visually-hidden': !isMainView,
  });

  const handleMyListButtonClick = () => {
    if (!isAuth) {
      history.push(PathName.SIGN_IN);
      return;
    }
    updateFavoriteStatus(id, Number(!isFavorite));
  };

  return (
    <React.Fragment>
      <div className="movie-card__bg" >
        <img src={backgroundImage} alt={title}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header className={`movie-card__head`}/>

      <div className="movie-card__wrap">
        <div className={movieCardClass}>
          <div className={moviePosterClass}>
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
    </React.Fragment>
  );
};

export default MovieBanner;
