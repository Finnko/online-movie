import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getErrorStatus, getLoadingStatus, getSimilarMovies} from '../../store/reducers/movies/selectors';
import {getMovieById} from '../../store/reducers/movies/selectors';
import {AuthStatus, Config, LoaderSetup, PathName, TabName, ViewMode} from '../../const';
import MoviePropType from '../../prop-types/movie';
import {getFavoriteError, getFavoriteLoading} from '../../store/reducers/movies/selectors';
import MovieBanner from '../../components/movie-banner/movie-banner.jsx';
import MoviesList from '../../components/movies-list/movies-list.jsx';
import Tabs from '../../components/tabs/tabs.jsx';
import Footer from '../../components/footer/footer.tsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import {getAuthStatus} from '../../store/reducers/user/selectors';
import {Operation as MoviesOperation} from '../../store/reducers/movies/operations';
import Loader from '../../components/loader/loader.tsx';

const TabsWrapped = withActiveItem(Tabs);


const MoviePage = ({
  currentMovie,
  similarMovies,
  error,
  loading,
  favoriteError,
  favoriteLoading,
  authStatus,
  updateFavoriteStatus,
}) => {
  if (loading) {
    return <Loader style={LoaderSetup.POSITION.FIXED} size={LoaderSetup.SIZE.MEDIUM}/>;
  }

  if (!loading && !error && !currentMovie) {
    return <Redirect to={PathName.ROOT} />;
  }

  const {poster, title, backgroundColor} = currentMovie;
  const isAuth = AuthStatus.AUTH === authStatus;

  return (
    <Fragment>
      <section className="movie-card movie-card--full" style={{backgroundColor}}>
        <div className="movie-card__hero">
          <MovieBanner
            movie={currentMovie}
            viewMode={ViewMode.PROMO.DETAILS}
            loading={favoriteLoading}
            error={favoriteError}
            isAuth={isAuth}
            updateFavoriteStatus={updateFavoriteStatus}
          />
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={`${title} poster`} width="218" height="327"/>
            </div>

            <TabsWrapped
              activeItem={TabName.OVERVIEW}
              movie={currentMovie}
            />
          </div>
        </div>
      </section>

      <div className="page-content">
        {similarMovies.length > 0 &&
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <MoviesList
              movies={similarMovies.slice(0, Config.SIMILAR_MOVIES_TO_SHOW)}
              viewMode={ViewMode.MOVIE_CARD.IMAGE}
            />
          </section>
        }

        <Footer/>
      </div>
    </Fragment>
  );
};

MoviePage.propTypes = {
  currentMovie: MoviePropType,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  favoriteLoading: PropTypes.bool.isRequired,
  favoriteError: PropTypes.bool.isRequired,
  similarMovies: PropTypes.arrayOf(MoviePropType).isRequired,
  authStatus: PropTypes.string.isRequired,
  updateFavoriteStatus: PropTypes.func.isRequired,
};

const mapStateToProps = (state, {match}) => {
  const movieId = parseInt(match.params.id, 10);

  return {
    favoriteLoading: getFavoriteLoading(state),
    favoriteError: getFavoriteError(state),
    currentMovie: getMovieById(state, movieId),
    similarMovies: getSimilarMovies(state, movieId),
    authStatus: getAuthStatus(state),
    loading: getLoadingStatus(state),
    error: getErrorStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateFavoriteStatus(id, status) {
    dispatch(MoviesOperation.updateFavoriteStatus(id, status));
  }
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
