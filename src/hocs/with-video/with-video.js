import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";

const withVideo = (Component) => {
  class WithVideo extends PureComponent {
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

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.onplay = null;
      video.src = ``;
    }

    render() {
      const {isPlaying} = this.state;
      const {preview, videoSrc} = this.props;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
        >
          <video
            ref={this._videoRef}
            poster={preview}
            src={videoSrc}
            muted
            width="100%"
            height="175"
          />
        </Component>
      );
    }
  }

  WithVideo.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    preview: PropTypes.string.isRequired,
    videoSrc: PropTypes.string.isRequired,
  };

  return WithVideo;
};

export default withVideo;
