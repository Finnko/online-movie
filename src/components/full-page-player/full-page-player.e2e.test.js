import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FullPagePlayer from './full-page-player';

Enzyme.configure({
  adapter: new Adapter()
});

const props = {
  title: `Title`,
  progress: 200,
  duration: 300,
  timeLeft: `01:00:00`,
  currentTime: 200,
  isPlaying: true,
  isLoading: false,
  isWaiting: false,
  children: `<video></video>`,
};

describe(`Test FullPage player fucntionality`, () => {
  const onTogglePlay = jest.fn();
  const onRequestFullScreen = jest.fn();
  const onProgressBarClick = jest.fn();
  // const handleExitClick = jest.fn();

  it(`Player should call callbacks`, () => {
    const player = mount(
        <FullPagePlayer
          {...props}
          onTogglePlay={onTogglePlay}
          onRequestFullScreen={onRequestFullScreen}
          onProgressBarClick={onProgressBarClick}
        />
    );

    const playBtn = player.find(`button.player__play`);
    playBtn.simulate(`click`);
    expect(onTogglePlay).toBeCalledTimes(1);

    const fullScreenBtn = player.find(`button.player__full-screen`);
    fullScreenBtn.simulate(`click`);
    expect(onRequestFullScreen).toBeCalledTimes(1);

    const progressBtn = player.find(`progress.player__progress`);
    progressBtn.simulate(`click`);
    expect(onProgressBarClick).toBeCalledTimes(1);
  });
});
