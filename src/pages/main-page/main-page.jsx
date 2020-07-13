import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MoviePropType from '../../prop-types/movie';
import {ViewMode, LoaderSetup} from '../../const';
import {getErrorStatus, getErrorText, getLoadingStatus, getPromo} from '../../store/reducers/data/selectors';
import Footer from '../../components/footer/footer.jsx';
import MovieBanner from '../../components/movie-banner/movie-banner.jsx';
import Loader from '../../components/loader/loader.jsx';
import Error from '../../components/error/error.jsx';
import MainContent from '../../components/main-content/main-content.jsx';


const MainPage = ({
  promo,
  loading,
  error,
  errorText,
}) => {
  const {
    title,
    genre,
    releaseYear,
    poster,
    backgroundImage,
    backgroundColor
  } = promo;

  return (
    <Fragment>
      {loading &&
        <Loader
          size={LoaderSetup.SIZE.MEDIUM}
          position={LoaderSetup.POSITION.FIXED}
        />
      }

      {!loading && !error &&
        <Fragment>
          <section className="movie-card">
            <MovieBanner

              title={title}
              genre={genre}
              releaseYear={releaseYear}
              poster={poster}
              backgroundImage={backgroundImage}
              backgroundColor={backgroundColor}
              viewMode={ViewMode.PROMO.MAIN}
            />
          </section>

          <div className="page-content">
            <MainContent />

            <Footer/>
          </div>
        </Fragment>
      }

      {!loading && error && <Error error={errorText}/>}
    </Fragment>
  );
};

MainPage.propTypes = {
  promo: MoviePropType,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  errorText: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    loading: getLoadingStatus(state),
    error: getErrorStatus(state),
    errorText: getErrorText(state),
    promo: getPromo(state),
  };
};

export {MainPage};
export default connect(mapStateToProps)(MainPage);
