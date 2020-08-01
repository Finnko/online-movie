import * as React from 'react';
import {Subtract} from 'utility-types';

type State = {
  isPlaying: boolean;
}

type InjectingProps = {
  isPlaying: boolean;
  onMovieMouseEnter: () => void;
  onMovieMouseLeave: () => void;
}

const withPreview = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithPreview extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false
      };

      this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
      this._handleCardMouseLeave = this._handleCardMouseLeave.bind(this);
    }

    _handleCardMouseEnter(): void {
      this.setState({
        isPlaying: true
      });
    }

    _handleCardMouseLeave(): void {
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

  return WithPreview;
};

export default withPreview;
