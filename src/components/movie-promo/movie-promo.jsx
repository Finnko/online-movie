import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {ViewMode} from '../../const';
import Header from '../header/header.jsx';

const MoviePromo = ({title, genre, releaseYear, backgroundImage, poster, viewMode}) => {
  const isMainView = viewMode === ViewMode.PROMO.MAIN;

  return (
    <Fragment>
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={title}/>
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <div className="movie-card__wrap">
        <div className={isMainView ? `movie-card__info` : ``}>
          <div className={isMainView ? `movie-card__poster` : `visually-hidden`}>
            <img src={poster} alt={title} width="218"
              height="327"/>
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{releaseYear}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list movie-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
              {!isMainView && <a href="add-review.html" className="btn movie-card__button">Add review</a>}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

MoviePromo.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  viewMode: PropTypes.string.isRequired,
};


export default MoviePromo;