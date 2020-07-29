import React, {PureComponent} from "react";

const withPreview = (Component) => {
  class WithPreview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false
      };

      this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
      this._handleCardMouseLeave = this._handleCardMouseLeave.bind(this);
    }

    _handleCardMouseEnter() {
      this.setState({
        isPlaying: true
      });
    }

    _handleCardMouseLeave() {
      this.setState({
        isPlaying: false
      });
    }

    render() {
      const {isPlaying} = this.state;

      return <Component
        {...this.props}
        onMovieMouseEnter={this._handleCardMouseEnter}
        onMovieMouseLeave={this._handleCardMouseLeave}
        isPlaying={isPlaying}
      />;
    }
  }

  WithPreview.propTypes = {};

  return WithPreview;
};

export default withPreview;
