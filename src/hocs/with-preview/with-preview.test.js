import React from "react";
import renderer from "react-test-renderer";
import withPreview from './with-preview';
import withVideoControls from '../with-video-controls/with-video-controls';
import VideoPlayer from '../../components/video-player/video-player.jsx';

const props = {
  isPlaying: false,
  videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  preview: `img/the-grand-budapest-hotel-poster.jpg`,
};

const VideoPlayerWrapped = withVideoControls(VideoPlayer);

const MockComponentWrapped = withPreview(VideoPlayerWrapped);

describe(`withPreview works correctly`, () => {
  it(`withPreview is rendered correctly`, () => {

    const tree = renderer.create((
      <MockComponentWrapped
        {...props}
        onMovieMouseEnter={() => {}}
        onMovieMouseLeave={() => {}}
        renderPlayer={() => {}}
      />
    ), {
      createNodeMock() {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
