import React from 'react';
import renderer from 'react-test-renderer';
import FullPagePlayer from './full-page-player.jsx';

const props = {
  title: `Title`,
  progress: 200,
  duration: 300,
  timeLeft: `01:00:00`,
  currentTime: 200,
  onTogglePlay: () => {},
  onRequestFullScreen: () => {},
  onProgressBarClick: () => {},
  children: [],
};

describe(`FullPagePlayer snapshot test`, () => {
  it(`FullPagePlayer should render correctly`, () => {
    const tree = renderer
      .create(
          <FullPagePlayer
            isPlaying={true}
            isLoading={false}
            isWaiting={false}
            {...props}
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
