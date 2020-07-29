import React from 'react';
import renderer from 'react-test-renderer';
import withVideoControls from './with-video-controls';
import FullPagePlayer from '../../components/full-page-player/full-page-player.jsx';

const props = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
};

const MockComponentWrapped = withVideoControls(FullPagePlayer);

describe(`Should hoc withVideoControls render correctly`, () => {
  it(`Snapshot render withVideoControls`, () => {
    const tree = renderer.create(
        <MockComponentWrapped {...props} />, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
