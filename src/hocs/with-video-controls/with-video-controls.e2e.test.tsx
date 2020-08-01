import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import withVideoControls from './with-video-controls';
import FullPagePlayer from '../../components/full-page-player/full-page-player';

Enzyme.configure({
  adapter: new Adapter()
});

const props = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
};

const MockComponentWrapped = withVideoControls(FullPagePlayer);

const componentDidMountSpy = jest.spyOn(MockComponentWrapped.prototype, `componentDidMount`);
const componentDidUpdateSpy = jest.spyOn(MockComponentWrapped.prototype, `componentDidUpdate`);
const componentWillUnmountSpy = jest.spyOn(MockComponentWrapped.prototype, `componentWillUnmount`);

const setUp = () => Enzyme.mount(<MockComponentWrapped {...props} />);
window.HTMLMediaElement.prototype.play = () => Promise.resolve();
window.HTMLMediaElement.prototype.pause = () => Promise.resolve();

describe(`Should hoc withVideoControls works correctly`, () => {
  let component;
  let instance;

  beforeEach(() => {
    component = setUp();
    instance = component.instance();
  });

  describe(`Lifecycle methods`, () => {
    it(`should call componentDidMount once`, () => {
      expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
    });

    it(`should not call componentWillUnmount when component just mounted`, () => {
      expect(componentDidMountSpy).toHaveBeenCalled();
      expect(componentWillUnmountSpy).toHaveBeenCalledTimes(0);
    });

    it(`should call componentDidUpdate`, () => {
      instance.setState({isPlaying: true});
      expect(componentDidUpdateSpy).toHaveBeenCalledTimes(1);
      instance.setState({isPlaying: false});
      expect(componentDidUpdateSpy).toHaveBeenCalledTimes(2);
    });

    it(`should call componentWillUnmount`, () => {
      component.unmount();
      expect(componentWillUnmountSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe(`Component handler`, () => {
    it(`should _handleTogglePlay works correctly`, () => {
      instance.setState({isPlaying: false});
      instance._handleTogglePlay();
      expect(component.state().isPlaying).toBe(true);
    });
  });
});
