import React from "react";
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getMovieById} from '../../store/reducers/movies/selectors';
import {PathName} from '../../const';
import MoviePropType from '../../prop-types/movie';
import withVideoControls from '../../hocs/with-video-controls/with-video-controls';
import FullPagePlayer from '../../components/full-page-player/full-page-player.jsx';

const FullPagePlayerWrapped = withVideoControls(FullPagePlayer);

const PlayerPage = ({currentMovie}) => {
  if (!currentMovie) {
    return <Redirect to={PathName.ROOT}/>;
  }

  const {title, videoSrc, backgroundImage} = currentMovie;

  return <FullPagePlayerWrapped
    src={videoSrc}
    title={title}
    poster={backgroundImage}
  />;
};

PlayerPage.propTypes = {
  currentMovie: MoviePropType.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const {match} = ownProps;
  const movieId = parseInt(match.params.id, 10);

  return {
    currentMovie: getMovieById(state, movieId),
  };
};

export {PlayerPage};
export default connect(mapStateToProps)(PlayerPage);
