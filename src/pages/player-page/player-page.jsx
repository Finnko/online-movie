import React from "react";
import {getMovieById} from '../../store/reducers/movies/selectors';
import MoviePropType from '../../prop-types/movie';
import {connect} from 'react-redux';
import withVideoControls from '../../hocs/with-video-controls/with-video-controls';
import FullPagePlayer from '../../components/full-page-player/full-page-player.jsx';

const FullPagePlayerWrapped = withVideoControls(FullPagePlayer);

const PlayerPage = ({currentMovie}) => {
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
