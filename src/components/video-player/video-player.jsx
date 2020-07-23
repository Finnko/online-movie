import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
    this._timer = null;
  }

  componentDidMount() {
    const {muted} = this.props;

    const video = this._videoRef.current;
    video.muted = muted;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      this.play();
    } else {
      clearTimeout(this._timer);
      video.load();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    clearTimeout(this._timer);

    video.src = ``;
    video.muted = null;
    video.onplay = null;
  }

  play() {
    const video = this._videoRef.current;
    const videoPlay = () => {
      video.play();
    };
    this._timer = setTimeout(videoPlay, 1000);
  }

  render() {
    const {poster, videoSrc} = this.props;

    return (
      <video
        width="280"
        height="175"
        src={videoSrc}
        poster={poster}
        ref={this._videoRef}
      />
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  muted: PropTypes.bool.isRequired,
  poster: PropTypes.string.isRequired,
  videoSrc: PropTypes.string.isRequired,
};

export default VideoPlayer;
