import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player.tsx';

const props = {
  muted: true,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  isPlaying: false,
};

describe(`VideoPlayer snapshot test`, () => {
  it(`VideoPlayer should render correctly`, () => {
    const tree = renderer
      .create(
          <VideoPlayer {...props}/>,
          {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
