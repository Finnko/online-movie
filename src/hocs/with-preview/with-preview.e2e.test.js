import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withVideoControls from '../with-video-controls/with-video-controls';
import VideoPlayer from '../../components/video-player/video-player';
import withPreview from './with-preview';

configure({
  adapter: new Adapter()
});

const props = {
  isPlaying: false,
  videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  preview: `img/the-grand-budapest-hotel-poster.jpg`,
};

const VideoPlayerWrapped = withVideoControls(VideoPlayer);

const MockComponentWrapped = withPreview(VideoPlayerWrapped);

describe(`Tests withPreview functionality`, () => {
  const onMovieMouseEnter = jest.fn();
  const onMovieMouseLeave = jest.fn();

  it(`withPreview inited with correct state value`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          {...props}
          onMovieMouseEnter={onMovieMouseEnter}
          onMovieMouseLeave={onMovieMouseLeave}
          renderPlayer={() => {}}
        />);

    expect(wrapper.state().activeId).toBe(null);
  });

  it(`withActiveItem should change active id`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          {...props}
          onMovieMouseEnter={onMovieMouseEnter}
          onMovieMouseLeave={onMovieMouseLeave}
          renderPlayer={() => {}}
        />);


    jest.useFakeTimers();
    wrapper.props().onMovieMouseEnter(`1`);
    jest.runAllTimers();

    expect(wrapper.state().activeId).toBe(`1`);
  });

  it(`withActiveItem should change active id on mouseleave`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          {...props}
          onMovieMouseEnter={onMovieMouseEnter}
          onMovieMouseLeave={onMovieMouseLeave}
          renderPlayer={() => {}}
        />);

    wrapper.props().onMovieMouseLeave();

    expect(wrapper.state().activeId).toBe(null);
  });
});
