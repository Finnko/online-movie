import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from '../../components/video-player/video-player';
import withPreview from './with-preview';

configure({
  adapter: new Adapter()
});

const props = {
  muted: true,
  isPlaying: false,
  videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
};

const MockComponentWrapped = withPreview(VideoPlayer);

describe(`Tests withPreview functionality`, () => {
  const onMovieMouseEnter = jest.fn();
  const onMovieMouseLeave = jest.fn();

  it(`withPreview toggles isPlaying value correctly`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          {...props}
          onMovieMouseEnter={onMovieMouseEnter}
          onMovieMouseLeave={onMovieMouseLeave}
        />);

    expect(wrapper.props().isPlaying).toEqual(false);

    wrapper.props().onMovieMouseEnter();
    expect(wrapper.props().isPlaying).toEqual(true);

    wrapper.props().onMovieMouseLeave();
    expect(wrapper.props().isPlaying).toEqual(false);
  });
});
