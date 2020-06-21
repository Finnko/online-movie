import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: this.props.activeItem,
      };

      this.handleActiveItemChange = this.handleActiveItemChange.bind(this);
    }

    handleActiveItemChange(newItem) {
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
          onActiveItemChange={this.handleActiveItemChange}
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
