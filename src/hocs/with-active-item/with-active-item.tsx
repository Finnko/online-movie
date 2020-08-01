import * as React from 'react';
import {Subtract} from 'utility-types';

type State = {
  activeItem: string,
}

type InjectingProps = {
  activeItem: string,
  onActiveItemChange: () => void,
}

const withActiveItem = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithActiveItem extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: this.props.activeItem,
      };

      this._handleActiveItemChange = this._handleActiveItemChange.bind(this);
    }

    _handleActiveItemChange(newItem: string):void {
      this.setState({
        activeItem: newItem,
      });
    }

    render() {
      const {activeItem} = this.state;

      return (
        <Component
          {...this.props}
          activeItem={activeItem}
          onActiveItemChange={this._handleActiveItemChange}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
