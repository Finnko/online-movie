import * as React from 'react';
import * as renderer from 'react-test-renderer';
import VideoPlayer from '../../components/video-player/video-player';
import withPreview from './with-preview';

const props = {
  muted: true,
  isPlaying: false,
  videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
};

const MockComponentWrapped = withPreview(VideoPlayer);

describe(`withPreview works correctly`, () => {
  it(`withPreview is rendered correctly`, () => {

    const tree = renderer.create((
      <MockComponentWrapped
        {...props}
        onMovieMouseEnter={() => {}}
        onMovieMouseLeave={() => {}}
        isPlaying
      />
    ), {
      createNodeMock() {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
