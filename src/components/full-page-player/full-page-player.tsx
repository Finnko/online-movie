import * as React from 'react';
import history from '../../history';
import Loader from '../loader/loader';
import Icon from '../icon/icon';
import {LoaderSetup} from '../../const';

type PlayerProps = {
  title: string,
  progress: number,
  duration: number,
  currentTime: number,
  timeLeft: string,
  isPlaying: boolean,
  isLoading: boolean,
  isWaiting: boolean,
  onTogglePlay: () => void,
  onRequestFullScreen: () => void,
  onProgressBarClick: () => void,
  children: React.ReactNode,
}

class FullPagePlayer extends React.PureComponent<PlayerProps> {
  constructor(props) {
    super(props);

    this.handleExitClick = this.handleExitClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount():void {
    window.addEventListener(`keydown`, this.handleKeyDown);
  }

  componentWillUnmount():void {
    window.removeEventListener(`keydown`, this.handleKeyDown);
  }

  handleExitClick():void {
    history.goBack();
  }

  handleKeyDown({code}):void {
    if (code === `Escape`) {
      this.handleExitClick();
    }
  }

  render() {
    const {
      title,
      progress,
      duration,
      timeLeft,
      currentTime,
      isLoading,
      isPlaying,
      isWaiting,
      onTogglePlay,
      onRequestFullScreen,
      onProgressBarClick,
      children
    } = this.props;


    return (
      <div className="player">
        {children}

        {isLoading && isWaiting &&
        <Loader
          size={LoaderSetup.SIZE.MEDIUM}
          style={LoaderSetup.POSITION.FIXED}
        />}

        {!isLoading && !isWaiting &&
        <React.Fragment >
          <button
            type="button"
            className="player__exit"
            onClick={this.handleExitClick}
          >
            Exit
          </button>

          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <progress
                  className="player__progress"
                  value={currentTime}
                  max={duration}
                  onClick={onProgressBarClick}
                />
                <div className="player__toggler" style={{left: progress + `%`}}>
                  Toggler
                </div>
              </div>
              <div className="player__time-value">{timeLeft}</div>
            </div>

            <div className="player__controls-row">
              <button
                type="button"
                className="player__play"
                onClick={onTogglePlay}
              >
                {!isPlaying
                  ? <React.Fragment>
                    <Icon width="19" height="19" name="play-s"/>
                    <span>Play</span>
                  </React.Fragment>
                  : <React.Fragment>
                    <Icon width="14" height="21" name="pause"/>
                    <span>Pause</span>
                  </React.Fragment>
                }
              </button>

              <div className="player__name">{title}</div>

              <button
                type="button"
                className="player__full-screen"
                onClick={onRequestFullScreen}
              >
                <Icon width="27" height="27" name="full-screen"/>
                <span>Full screen</span>
              </button>
            </div>
          </div>
        </React.Fragment>
        }

      </div>);
  }
}

export default FullPagePlayer;
