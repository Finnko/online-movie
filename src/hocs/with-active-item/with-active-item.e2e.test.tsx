import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import withActiveItem from './with-active-item';

Enzyme.configure({
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
  const activeItemChangeHandler = jest.fn();

  it(`withActiveItem set passed value correctly`, () => {
    const wrapper = Enzyme.shallow(<MockComponentWrapped
      activeItem={`Item 2`}
      onActiveItemChange={activeItemChangeHandler}
    />);

    expect(wrapper.state().activeItem).toEqual(`Item 2`);
  });

  it(`withActiveItem should change active item`, () => {
    const wrapper = Enzyme.shallow(<MockComponentWrapped
      activeItem={`Item 2`}
      onActiveItemChange={activeItemChangeHandler}
    />);

    wrapper.props().onActiveItemChange(`Item 1`);
    expect(wrapper.props().onActiveItemChange).toBeInstanceOf(Function);
    expect(wrapper.state().activeItem).toBe(`Item 1`);
  });
});
