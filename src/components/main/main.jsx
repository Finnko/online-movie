import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MoviePropType from '../../prop-types/movie';
import {ViewMode} from '../../const';
import NameSpace from '../../store/name-space';
import MoviesList from '../movies-list/movies-list.jsx';
import Footer from '../footer/footer.jsx';
import MoviePromo from '../movie-promo/movie-promo.jsx';

const Main = ({promo, movies}) => {
  const {title, genre, releaseYear, poster, backgroundImage} = promo;
  return (
    <Fragment>
      <section className="movie-card">
        <MoviePromo
          title={title}
          genre={genre}
          releaseYear={releaseYear}
          poster={poster}
          backgroundImage={backgroundImage}
          viewMode={ViewMode.PROMO.MAIN}
        />
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">All genres</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Comedies</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Crime</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Dramas</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Horror</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Kids & Family</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Romance</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Sci-Fi</a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">Thrillers</a>
            </li>
          </ul>

          <MoviesList movies={movies} viewMode={ViewMode.MOVIE_CARD.WITH_PLAYER}/>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer/>
      </div>
    </Fragment>
  );
};

Main.propTypes = {
  promo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(MoviePropType).isRequired,
};

const mapStateToProps = (state) => {
  return {
    movies: state[NameSpace.DATA].movies,
  };
};

export {Main};
export default connect(mapStateToProps)(Main);
