import React, {createRef, PureComponent} from 'react';
import PropTypes from "prop-types";

const withVideoControls = (Component) => {
  class WithVideoControls extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.handleTogglePlay = this.handleTogglePlay.bind(this);
      this.requestFullScreen = this.requestFullScreen.bind(this);

      this.state = {
        isPlaying: true,
        progress: 0,
        duration: 0,
        timeLeft: `00:00:00`,
      };
    }

    componentDidMount() {
      const {src} = this.props;
      const video = this._videoRef.current;

      video.src = src;
      video.play();

      video.onloadedmetadata = () => {
        this.setState({
          duration: video.duration,
        });
      };

      video.onplay = () => {
        this.setState({
          isPlaying: true,
        });
      };

      video.onpause = () => this.setState({
        isPlaying: false,
      });

      video.ontimeupdate = () => this.setState({
        progress: Math.floor(video.currentTime),
      });
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;
      video.onplay = null;
      video.onpause = null;
      video.ontimeupdate = null;
      video.onloadedmetadata = null;
      video.src = ``;
    }

    handleTogglePlay() {
      this.setState((prevState) => {
        return {isPlaying: !prevState.isPlaying};
      });
    }

    requestFullScreen() {
      const video = this._videoRef.current;
      video.requestFullscreen();
    }

    render() {
      const {progress, duration, isPlaying} = this.state;
      const {poster} = this.props;

      return <Component
        {...this.props}
        progress={progress}
        duration={duration}
        isPlaying={isPlaying}
        onTogglePlay={this.handleTogglePlay}
        requestFullScreen={this.requestFullScreen}
      >
        <video
          ref={this._videoRef}
          autoPlay
          className="player__video"
          poster={poster}
        />
      </Component>;
    }
  }

  WithVideoControls.propTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  };

  return WithVideoControls;
};

export default withVideoControls;
