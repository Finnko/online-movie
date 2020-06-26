import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MoviePropType from '../../prop-types/movie';
import {Config, ViewMode} from '../../const';
import {getMovieGenres} from '../../utils/common';
import NameSpace from '../../store/name-space';
import MoviesList from '../movies-list/movies-list.jsx';
import Footer from '../footer/footer.jsx';
import MoviePromo from '../movie-promo/movie-promo.jsx';
import Loader from '../loader/loader.jsx';
import Error from '../error/error.jsx';
import GenresList from '../genres-list/genres-list.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item';

const GenresListWrapped = withActiveItem(GenresList);

const Main = ({promo, movies, loading, error}) => {
  const {title, genre, releaseYear, poster, backgroundImage} = promo;
  const genres = getMovieGenres(movies);

  return (
    <Fragment>
      {loading && <Loader size={Config.LOADER.MEDIUM}/>}

      {!loading && !error &&
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

            <GenresListWrapped activeItem={Config.DEFAULT_SORTING} genres={genres} />

            <MoviesList movies={movies} viewMode={ViewMode.MOVIE_CARD.WITH_PLAYER}/>

            <div className="catalog__more">
              <button className="catalog__button" type="button">Show more</button>
            </div>
          </section>

          <Footer/>
        </div>
      </Fragment>
      }

      {!loading && error && <Error error={Config.ERRORS.FETCH_DATA} />}
    </Fragment>
  );
};

Main.propTypes = {
  promo: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(MoviePropType).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    movies: state[NameSpace.DATA].movies,
    loading: state[NameSpace.DATA].loading,
    error: state[NameSpace.DATA].error,
    promo: state[NameSpace.DATA].promo,
  };
};

export {Main};
export default connect(mapStateToProps)(Main);
