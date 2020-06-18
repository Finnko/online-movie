import React, {PureComponent, createRef} from 'react';
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isPlaying: props.isPlaying,
    };
  }

  componentDidMount() {
    const {videoSrc} = this.props;
    const video = this._videoRef.current;

    video.src = videoSrc;

    video.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    const {isPlaying} = this.props;

    if (isPlaying !== this.state.isPlaying) {
      this.setState({isPlaying}, () => {
        if (isPlaying) {
          video.play();
        } else {
          video.load();
        }
      });
    }
  }

  render() {
    const {posterSrc, videoSrc} = this.props;
    return (
      <video
        ref={this._videoRef}
        poster={posterSrc}
        src={videoSrc}
        muted
        width="100%"
        height="175"
      />
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  videoSrc: PropTypes.string.isRequired,
  posterSrc: PropTypes.string.isRequired,
};

export default VideoPlayer;
