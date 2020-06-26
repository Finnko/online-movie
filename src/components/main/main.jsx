import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MoviePropType from '../../prop-types/movie';
import {Config, ViewMode} from '../../const';
import {getErrorStatus, getLoadingStatus, getPromo} from '../../store/reducers/data/selectors';
import {getActiveGenre, getGenres, getMoviesByGenre} from '../../store/reducers/app/selectors';
import {ActionCreator} from '../../store/actions/action-creator';
import MoviesList from '../movies-list/movies-list.jsx';
import Footer from '../footer/footer.jsx';
import MovieBanner from '../movie-banner/movie-banner.jsx';
import Loader from '../loader/loader.jsx';
import Error from '../error/error.jsx';
import GenresList from '../genres-list/genres-list.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item';

const GenresListWrapped = withActiveItem(GenresList);

const Main = ({promo, genres, filteredMovies, loading, error, activeGenre, handleGenreChange}) => {
  const {title, genre, releaseYear, poster, backgroundImage} = promo;

  return (
    <Fragment>
      {loading && <Loader size={Config.LOADER.MEDIUM}/>}

      {!loading && !error &&
      <Fragment>
        <section className="movie-card">
          <MovieBanner
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

            <GenresListWrapped activeItem={activeGenre} genres={genres} onGenreChange={handleGenreChange}/>

            <MoviesList movies={filteredMovies} viewMode={ViewMode.MOVIE_CARD.WITH_PLAYER}/>

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
  filteredMovies: PropTypes.arrayOf(MoviePropType).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  activeGenre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleGenreChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    filteredMovies: getMoviesByGenre(state),
    loading: getLoadingStatus(state),
    error: getErrorStatus(state),
    promo: getPromo(state),
    activeGenre: getActiveGenre(state),
    genres: getGenres(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleGenreChange(genre) {
    dispatch(ActionCreator.changeActiveGenre(genre));
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
