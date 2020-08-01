import * as React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getErrorStatus, getLoadingStatus, getSimilarMovies} from '../../store/reducers/movies/selectors';
import {getMovieById} from '../../store/reducers/movies/selectors';
import {AuthStatus, Config, LoaderSetup, PathName, TabName, ViewMode} from '../../const';
import {getFavoriteError, getFavoriteLoading} from '../../store/reducers/movies/selectors';
import {getAuthStatus} from '../../store/reducers/user/selectors';
import {Operation as MoviesOperation} from '../../store/reducers/movies/operations';
import {Movie} from '../../interfaces';
import MovieBanner from '../../components/movie-banner/movie-banner';
import MoviesList from '../../components/movies-list/movies-list';
import Tabs from '../../components/tabs/tabs.jsx';
import Footer from '../../components/footer/footer';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import Loader from '../../components/loader/loader';

const TabsWrapped = withActiveItem(Tabs);

type MoviePageProps = {
  currentMovie: Movie,
  loading: boolean,
  error: boolean,
  favoriteLoading: boolean,
  favoriteError: boolean,
  similarMovies: Movie[],
  authStatus: string,
  updateFavoriteStatus: () => void,
}

const MoviePage:React.FC<MoviePageProps> = ({
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
    <React.Fragment>
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
    </React.Fragment>
  );
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
