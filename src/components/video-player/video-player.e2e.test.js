import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from './video-player.jsx';

configure({adapter: new Adapter()});

const mock = {
  isPlaying: true,
  videoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  posterSrc: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
};

describe(`Test e2e VideoPlayer component`, () => {

});
