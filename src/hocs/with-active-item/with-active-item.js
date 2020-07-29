import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: this.props.activeItem,
      };

      this._handleActiveItemChange = this._handleActiveItemChange.bind(this);
    }

    _handleActiveItemChange(newItem) {
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

  WithActiveItem.propTypes = {
    activeItem: PropTypes.any,
  };

  return WithActiveItem;
};

export default withActiveItem;
