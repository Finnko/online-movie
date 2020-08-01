import * as React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getMovieById} from '../../store/reducers/movies/selectors';
import {PathName} from '../../const';
import {Movie} from '../../interfaces';
import FullPagePlayer from '../../components/full-page-player/full-page-player';
import withVideoControls from '../../hocs/with-video-controls/with-video-controls';

const FullPagePlayerWrapped = withVideoControls(FullPagePlayer);

type Props = {
  currentMovie: Movie;
}

const PlayerPage: React.FC<Props> = (props: Props) => {
  const {currentMovie} = props;

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

const mapStateToProps = (state, ownProps) => {
  const {match} = ownProps;
  const movieId = parseInt(match.params.id, 10);

  return {
    currentMovie: getMovieById(state, movieId),
  };
};

export {PlayerPage};
export default connect(mapStateToProps)(PlayerPage);
