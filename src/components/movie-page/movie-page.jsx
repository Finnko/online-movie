import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {getMovieById} from '../../utils/common';
import {PathName, PromoViewMode} from '../../const';
import MoviePropType from '../../prop-types/movie';
import MoviePromo from '../movie-promo/movie-promo.jsx';
import Tabs from '../tabs/tabs.jsx';
import Footer from '../footer/footer.jsx';


const MoviePage = ({movies, match}) => {
  const movieId = match.params.id;
  const currentMovie = getMovieById(movies, movieId);

  if (!currentMovie) {
    return <Redirect to={PathName.ROOT}/>;
  }

  const {title, genre, releaseYear, poster, backgroundImage} = currentMovie;

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <MoviePromo
            title={title}
            genre={genre}
            poster={poster}
            releaseYear={releaseYear}
            backgroundImage={backgroundImage}
            viewMode={PromoViewMode.DETAILS}
          />
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={`${title} poster`} width="218" height="327"/>
            </div>

            <Tabs movie={currentMovie}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
                  alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">Fantastic Beasts: The Crimes of
                  Grindelwald</a>
              </h3>
            </article>

            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175"/>
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">Bohemian Rhapsody</a>
              </h3>
            </article>

            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175"/>
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">Macbeth</a>
              </h3>
            </article>

            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src="img/aviator.jpg" alt="Aviator" width="280" height="175"/>
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">Aviator</a>
              </h3>
            </article>
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
};

MoviePage.propTypes = {
  movies: PropTypes.arrayOf(MoviePropType).isRequired,
  match: PropTypes.object.isRequired,
};

export default MoviePage;
