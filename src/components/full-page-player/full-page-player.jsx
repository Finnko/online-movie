import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";
import history from '../../history';
import Loader from '../loader/loader.tsx';
import Icon from '../../components/icon/icon.jsx';
import {LoaderSetup} from '../../const';

class FullPagePlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.handleExitClick = this.handleExitClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener(`keydown`, this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener(`keydown`, this.handleKeyDown);
  }

  handleExitClick() {
    history.goBack();
  }

  handleKeyDown({code}) {
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
          position={LoaderSetup.POSITION.FIXED}
        />}

        {!isLoading && !isWaiting &&
        <Fragment >
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
                  ? <Fragment>
                    <Icon width="19" height="19" name="play-s"/>
                    <span>Play</span>
                  </Fragment>
                  : <Fragment>
                    <Icon width="14" height="21" name="pause"/>
                    <span>Pause</span>
                  </Fragment>
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
        </Fragment>
        }

      </div>);
  }
}

FullPagePlayer.propTypes = {
  title: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  timeLeft: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isWaiting: PropTypes.bool.isRequired,
  onTogglePlay: PropTypes.func.isRequired,
  onRequestFullScreen: PropTypes.func.isRequired,
  onProgressBarClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default FullPagePlayer;
