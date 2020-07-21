import React from "react";
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from "./video-player.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const props = {
  muted: true,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

describe(`Test e2e Video Player Component`, () => {
  it(`Testing play works correctly`, () => {
    const videoPlayer = mount(
        <VideoPlayer
          {...props}
          isPlaying={false}
        />
    );

    jest.spyOn(videoPlayer.instance(), `play`);
    videoPlayer.instance().componentDidMount();

    videoPlayer.setProps({isPlaying: true});

    expect(videoPlayer.instance().play).toHaveBeenCalledTimes(1);
  });

  it(`Testing load(stop) works correctly`, () => {
    window.HTMLMediaElement.prototype.load = () => {};

    const videoPlayer = mount(
        <VideoPlayer
          {...props}
          isPlaying={true}
        />
    );

    const {_videoRef} = videoPlayer.instance();
    jest.spyOn(_videoRef.current, `load`);
    videoPlayer.instance().componentDidMount();

    videoPlayer.setProps({isPlaying: false});

    expect(_videoRef.current.load).toHaveBeenCalledTimes(1);
  });
});


