import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MoviePropType from '../../prop-types/movie';
import {ViewMode, LoaderSetup, Errors} from '../../const';
import {getErrorStatus, getLoadingStatus, getPromo} from '../../store/reducers/data/selectors';
import Footer from '../../components/footer/footer.jsx';
import MovieBanner from '../../components/movie-banner/movie-banner.jsx';
import Loader from '../../components/loader/loader.jsx';
import Error from '../../components/error/error.jsx';
import MainContent from '../../components/main-content/main-content.jsx';


const MainPage = ({
  promo,
  loading,
  error,
}) => {
  const {title, genre, releaseYear, poster, backgroundImage} = promo;

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
              viewMode={ViewMode.PROMO.MAIN}
            />
          </section>

          <div className="page-content">
            <MainContent />

            <Footer/>
          </div>
        </Fragment>
      }

      {!loading && error && <Error error={Errors.FETCH_DATA}/>}
    </Fragment>
  );
};

MainPage.propTypes = {
  promo: PropTypes.shape(MoviePropType),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    loading: getLoadingStatus(state),
    error: getErrorStatus(state),
    promo: getPromo(state),
  };
};

export {MainPage};
export default connect(mapStateToProps)(MainPage);
