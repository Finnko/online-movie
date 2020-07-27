import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import withVideoControls from './with-video-controls';

const props = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
};

const TestComponent = ({children}) => {
  return <div>{children}</div>;
};

TestComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

const TestComponentWrapped = withVideoControls(TestComponent);

describe(`Should hoc withVideoControls render correctly`, () => {
  it(`Snapshot render withVideoControls`, () => {
    const tree = renderer.create(
        <TestComponentWrapped
          {...props}
        >
          <video />
        </TestComponentWrapped>, {
          createNodeMock: () => {
            return {};
          }}
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
