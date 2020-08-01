import * as React from 'react';

type PlayerProps = {
  isPlaying: boolean;
  muted: boolean;
  poster: string;
  videoSrc: string;
}

class VideoPlayer extends React.PureComponent<PlayerProps> {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
    this._timer = null;
  }

  componentDidMount(): void {
    const {muted} = this.props;

    const video = this._videoRef.current;
    video.muted = muted;
  }

  componentDidUpdate(): void {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      this.play();
    } else {
      clearTimeout(this._timer);
      video.load();
    }
  }

  componentWillUnmount(): void {
    const video = this._videoRef.current;
    clearTimeout(this._timer);

    video.src = ``;
    video.muted = null;
    video.onplay = null;
  }

  private readonly _videoRef: React.RefObject<HTMLVideoElement>;
  private _timer: ReturnType<typeof setTimeout>;

  play(): void {
    const video = this._videoRef.current;
    const videoPlay = () => video.play();
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

export default VideoPlayer;
