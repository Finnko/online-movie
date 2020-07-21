import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {formatSecondsToTime} from '../../utils/common';
import Icon from '../../components/icon/icon.jsx';

const FullPagePlayer = ({
  title,
  onExitButtonClickHandler,
  progress,
  duration,
  isPlaying,
  onTogglePlay,
  requestFullScreen,
  children
}) => {
  return (
    <div className="player">
      {children}
      <button type="button" className="player__exit" onClick={onExitButtonClickHandler}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max={duration}/>
            <div className="player__toggler" style={{left: ((progress * 100) / duration) + `%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{formatSecondsToTime(duration)}</div>
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

          {/* <div className="player__name">{title}</div>*/}

          <button
            type="button"
            className="player__full-screen"
            onClick={requestFullScreen}
          >
            <Icon width="27" height="27" name="full-screen"/>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>);
};

FullPagePlayer.propTypes = {
  title: PropTypes.string.isRequired,
  onExitButtonClickHandler: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  formatDurationToTime: PropTypes.func.isRequired,
  onTogglePlay: PropTypes.func.isRequired,
  requestFullScreen: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default FullPagePlayer;
