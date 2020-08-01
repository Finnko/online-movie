import * as React from 'react';
import {Subtract} from 'utility-types';
import {formatSecondsToTime} from '../../utils/common';

type State = {
  progress: number;
  duration: number;
  currentTime: number;
  timeLeft: string;
  isPlaying: boolean;
  isWaiting: boolean;
}

type InjectingProps = {
  title: string;
  src: string;
  poster: string;
  activeItem: string;
  onActiveItemChange: () => void;
  progress: number;
  duration: number;
  currentTime: number;
  timeLeft: string;
  isPlaying: boolean;
  isWaiting: boolean;
  onTogglePlay: () => void;
  onRequestFullScreen: () => void;
  onProgressBarClick: () => void;
}

const withVideoControls = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithVideoControls extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this._videoRef = React.createRef();

      this._handleTogglePlay = this._handleTogglePlay.bind(this);
      this._handleFullScreenChange = this._handleFullScreenChange.bind(this);
      this._handleEnded = this._handleEnded.bind(this);
      this._handleProgressBarClick = this._handleProgressBarClick.bind(this);

      this.state = {
        progress: 0,
        duration: 0,
        currentTime: 0,
        timeLeft: `00:00:00`,
        isPlaying: false,
        isWaiting: true,
      };
    }

    componentDidMount(): void {
      const {src} = this.props;
      const video = this._videoRef.current;

      video.src = src;

      video.onloadedmetadata = () => {
        this.setState({
          isWaiting: false,
          duration: Math.floor(video.duration),
        });
      };

      video.oncanplaythrough = () => {
        this.setState({
          isPlaying: true,
        });
      };

      video.ontimeupdate = () => {
        this.setState({
          currentTime: Math.floor(video.currentTime),
          progress: (Math.floor(video.currentTime) * 100) / video.duration,
          timeLeft: formatSecondsToTime(video.duration - video.currentTime),
        });
      };
    }

    componentDidUpdate(): void {
      const video = this._videoRef.current;
      const {isPlaying} = this.state;

      if (!document.fullscreenElement) {
        video.controls = false;
      }

      if (isPlaying && !video.ended) {
        video.play();
      } else {
        video.pause();
      }
    }

    componentWillUnmount(): void {
      const video = this._videoRef.current;
      video.onplay = null;
      video.onpause = null;
      video.ontimeupdate = null;
      video.onloadedmetadata = null;
      video.src = ``;
    }

    private readonly _videoRef: React.RefObject<HTMLVideoElement>;

    _handleTogglePlay(): void {
      this.setState((prevState) => {
        return {
          isPlaying: !prevState.isPlaying
        };
      });
    }

    _handleFullScreenChange(): void {
      const video = this._videoRef.current;
      video.requestFullscreen();
      video.controls = true;
    }

    _handleEnded(): void {
      const video = this._videoRef.current;
      video.play();
    }

    _handleProgressBarClick(evt: React.MouseEvent<HTMLProgressElement>): void {
      const {clientX, currentTarget} = evt;
      const video = this._videoRef.current;
      const progressBar = currentTarget;
      const offsetX = clientX - progressBar.getBoundingClientRect().left;

      const time = Math.round((offsetX / progressBar.clientWidth) * parseInt(progressBar.getAttribute(`max`), 10));

      video.currentTime = time;
      this.setState({
        isPlaying: true,
        currentTime: time,
      });
    }

    render() {
      const {
        progress,
        duration,
        timeLeft,
        currentTime,
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
        onTogglePlay={this._handleTogglePlay}
        onRequestFullScreen={this._handleFullScreenChange}
        onProgressBarClick={this._handleProgressBarClick}
      >
        <video
          ref={this._videoRef}
          className="player__video"
          poster={poster}
          onEnded={this._handleEnded}
        />
      </Component>;
    }
  }

  return WithVideoControls;
};

export default withVideoControls;
