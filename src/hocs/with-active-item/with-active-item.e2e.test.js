import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveItem from "./with-active-item.js";

configure({
  adapter: new Adapter()
});

const MockComponent = () => {
  return (
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  );
};

const MockComponentWrapped = withActiveItem(MockComponent);

describe(`Tests withActiveItem functionality`, () => {
  const onActiveItemChange = jest.fn();

  it(`withActiveItem set passed value correctly`, () => {
    const wrapper = shallow(<MockComponentWrapped
      activeItem={`Item 2`}
      onActiveItemChange={onActiveItemChange}
    />);

    expect(wrapper.state().activeItem).toEqual(`Item 2`);
  });

  it(`withActiveItem should change active item`, () => {
    const wrapper = shallow(<MockComponentWrapped
      activeItem={`Item 2`}
      onActiveItemChange={onActiveItemChange}
    />);

    wrapper.props().onActiveItemChange(`Item 1`);
    expect(wrapper.props().onActiveItemChange).toBeInstanceOf(Function);
    expect(wrapper.state().activeItem).toBe(`Item 1`);
  });
});
