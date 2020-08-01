import * as React from 'react';
import * as renderer from 'react-test-renderer';
import FullPagePlayer from './full-page-player';

const props = {
  title: `Title`,
  progress: 200,
  duration: 300,
  timeLeft: `01:00:00`,
  currentTime: 200,
  onTogglePlay: () => null,
  onRequestFullScreen: () => null,
  onProgressBarClick: () => null,
};

describe(`FullPagePlayer snapshot test`, () => {
  it(`FullPagePlayer should render correctly`, () => {
    const tree = renderer
      .create(
          <FullPagePlayer
            isPlaying={true}
            isWaiting={false}
            {...props}
          >
            <video />
          </FullPagePlayer>,
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
