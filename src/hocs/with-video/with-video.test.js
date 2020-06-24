import React, {Fragment} from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withVideo from './with-video';

const MockComponent = (props) => {
  const {children} = props;

  return (
    <Fragment>
      {children}
    </Fragment>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const props = {
  videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  preview: `img/the-grand-budapest-hotel-poster.jpg`,
};

const MockComponentWrapped = withVideo(MockComponent);

describe(`withAudio Tests`, () => {
  it(`withAudio is rendered correctly`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        isPlaying={false}
        {...props}
      />
    ), {
      createNodeMock() {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

