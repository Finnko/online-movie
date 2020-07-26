import React, {createRef, PureComponent} from 'react';
import PropTypes from "prop-types";
import {formatSecondsToTime} from '../../utils/common';

const withVideoControls = (Component) => {
  class WithVideoControls extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this._handleTogglePlay = this._handleTogglePlay.bind(this);
      this._handleFullScreenChange = this._handleFullScreenChange.bind(this);
      this._handleEnded = this._handleEnded.bind(this);
      this._handleProgressBarClick = this._handleProgressBarClick.bind(this);

      this.state = {
        progress: 0,
        duration: 0,
        currentTime: 0,
        timeLeft: `00:00:00`,
        isPlaying: true,
        isLoading: true,
        isWaiting: true,
      };
    }

    componentDidMount() {
      const {src} = this.props;
      const video = this._videoRef.current;

      video.src = src;
      video.play();

      video.onloadedmetadata = () => {
        this.setState({
          isWaiting: false,
          duration: Math.floor(video.duration),
        });
      };

      video.oncanplaythrough = () => {
        this.setState({
          isLoading: false,
        });
      };

      video.onplay = () => this.setState({
        isPlaying: true,
      });

      video.onpause = () => this.setState({
        isPlaying: false,
      });

      video.ontimeupdate = () => {
        this.setState({
          currentTime: Math.floor(video.currentTime),
          progress: (Math.floor(video.currentTime) * 100) / video.duration,
          timeLeft: formatSecondsToTime(video.duration - video.currentTime),
        });
      };
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      const {isPlaying} = this.state;

      if (isPlaying && !video.ended) {
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

    _handleTogglePlay() {
      this.setState((prevState) => {
        return {
          isPlaying: !prevState.isPlaying
        };
      });
    }

    _handleFullScreenChange() {
      const video = this._videoRef.current;
      video.requestFullscreen();
    }

    _handleEnded() {
      const video = this._videoRef.current;
      video.play();
    }

    _handleProgressBarClick({clientX, target}) {
      const video = this._videoRef.current;
      const progressBar = target;
      const offsetX = clientX - progressBar.getBoundingClientRect().left;

      const time = Math.round((offsetX / progressBar.clientWidth) * parseInt(progressBar.getAttribute(`max`), 10));

      video.currentTime = time;
      this.setState({
        isPlaying: true,
      });
    }

    render() {
      const {
        progress,
        duration,
        timeLeft,
        currentTime,
        isLoading,
        isWaiting,
        isPlaying
      } = this.state;
      const {poster} = this.props;

      return <Component
        {...this.props}
        progress={progress}
        duration={duration}
        timeLeft={timeLeft}
        currentTime={currentTime}
        isPlaying={isPlaying}
        isWaiting={isWaiting}
        isLoading={isLoading}
        onTogglePlay={this._handleTogglePlay}
        onRequestFullScreen={this._handleFullScreenChange}
        onProgressBarClick={this._handleProgressBarClick}
      >
        <video
          ref={this._videoRef}
          autoPlay
          className="player__video"
          poster={poster}
          onEnded={this._handleEnded}
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
