import * as React from 'react';
import * as renderer from 'react-test-renderer';
import withActiveItem from './with-active-item';

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


describe(`withActiveItem works correctly`, () => {
  it(`withActiveItem is rendered correctly`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        activeItem={`Item 1`}
        onActiveItemChange={() => {}}
      />
    ), {
      createNodeMock() {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
