import React, {PureComponent} from "react";

const withPreview = (Component) => {
  class WithPreview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false
      };

      this.handleCardMouseEnter = this.handleCardMouseEnter.bind(this);
      this.handleCardMouseLeave = this.handleCardMouseLeave.bind(this);
    }

    handleCardMouseEnter() {
      this.setState({
        isPlaying: true
      });
    }

    handleCardMouseLeave() {
      this.setState({
        isPlaying: false
      });
    }

    render() {
      const {isPlaying} = this.state;

      return <Component
        {...this.props}
        onMovieMouseEnter={this.handleCardMouseEnter}
        onMovieMouseLeave={this.handleCardMouseLeave}
        isPlaying={isPlaying}
      />;
    }
  }

  WithPreview.propTypes = {};

  return WithPreview;
};

export default withPreview;
