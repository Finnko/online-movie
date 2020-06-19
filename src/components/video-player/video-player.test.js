import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';

const mock = {
  isPlaying: true,
  videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  posterSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

describe(`VideoPlayer snapshot tests`, () => {
  it(`VideoPlayer should render correctly`, () => {
    const {isPlaying, videoSrc, posterSrc} = mock;
    const tree = renderer
      .create(
          <VideoPlayer
            isPlaying={isPlaying}
            videoSrc={videoSrc}
            posterSrc={posterSrc}
          />,
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
