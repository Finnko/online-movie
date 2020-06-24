import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';

const children = [];

describe(`VideoPlayer snapshot tests`, () => {
  it(`VideoPlayer should render correctly`, () => {
    const tree = renderer
      .create(
          <VideoPlayer>
            {children}
          </VideoPlayer>,
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
