import React, {PureComponent} from 'react';
import withVideo from '../with-video/with-video';
import VideoPlayer from '../../components/video-player/video-player.jsx';

const VideoPlayerWrapped = withVideo(VideoPlayer);

const withPreview = (Component) => {
  class WithPreview extends PureComponent {
    constructor(props) {
      super(props);

      this.timer = null;

      this.state = {
        activeId: null,
      };

      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    componentWillUnmount() {
      clearTimeout(this.timer);
      this.setState({
        activeId: null,
      });
    }

    handleMouseEnter(id) {
      this.timer = setTimeout(() => {
        this.setState({
          activeId: id
        });
      }, 1000);
    }

    handleMouseLeave() {
      clearTimeout(this.timer);
      this.setState({
        activeId: null,
      });
    }

    render() {
      const {activeId} = this.state;

      return <Component
        {...this.props}
        onMovieMouseEnter={this.handleMouseEnter}
        onMovieMouseLeave={this.handleMouseLeave}
        renderPlayer={(videoSrc, preview, id) => {
          return (
            <VideoPlayerWrapped
              videoSrc={videoSrc}
              preview={preview}
              isPlaying={id === activeId}
            />
          );
        }}
      />;
    }
  }

  return WithPreview;
};

export default withPreview;
