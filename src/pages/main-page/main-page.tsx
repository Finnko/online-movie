import * as React from 'react';
import {connect} from 'react-redux';
import MoviePropType from '../../prop-types/movie';
import {ViewMode, LoaderSetup, AuthStatus} from '../../const';
import {
  getErrorStatus,
  getErrorText,
  getFavoriteError,
  getFavoriteLoading,
  getLoadingStatus,
  getPromo
} from '../../store/reducers/movies/selectors';
import {Operation as MoviesOperation} from '../../store/reducers/movies/operations';
import Footer from '../../components/footer/footer';
import MovieBanner from '../../components/movie-banner/movie-banner';
import Loader from '../../components/loader/loader';
import Error from '../../components/error/error';
import MainContent from '../../components/main-content/main-content';
import {getAuthStatus} from '../../store/reducers/user/selectors';

type MainProps = {
  promo: MoviePropType;
  loading: boolean;
  error: boolean;
  favoriteLoading: boolean;
  favoriteError: boolean;
  errorText: string;
  authStatus: string;
  updateFavoriteStatus: () => void;
}

const MainPage: React.FC<MainProps> = (props: MainProps) => {
  const {
    promo,
    loading,
    error,
    errorText,
    favoriteLoading,
    favoriteError,
    authStatus,
    updateFavoriteStatus,
  } = props;

  const isAuth = AuthStatus.AUTH === authStatus;

  return (
    <React.Fragment>
      {loading &&
        <Loader
          size={LoaderSetup.SIZE.MEDIUM}
          style={LoaderSetup.POSITION.FIXED}
        />
      }

      {!loading && !error &&
        <React.Fragment>
          <section className="movie-card">
            <MovieBanner
              movie={promo}
              viewMode={ViewMode.PROMO.MAIN}
              loading={favoriteLoading}
              error={favoriteError}
              isAuth={isAuth}
              updateFavoriteStatus={updateFavoriteStatus}
            />
          </section>

          <div className="page-content">
            <MainContent />

            <Footer/>
          </div>
        </React.Fragment>
      }

      {!loading && error && <Error error={errorText}/>}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: getLoadingStatus(state),
    error: getErrorStatus(state),
    errorText: getErrorText(state),
    promo: getPromo(state),
    favoriteLoading: getFavoriteLoading(state),
    favoriteError: getFavoriteError(state),
    authStatus: getAuthStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateFavoriteStatus(id, status) {
    dispatch(MoviesOperation.updateFavoriteStatus(id, status));
    dispatch(MoviesOperation.fetchPromo());
  }
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
