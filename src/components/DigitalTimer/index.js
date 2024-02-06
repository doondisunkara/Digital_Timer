import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    isTimerRunning: false,
    timer: 25,
  }

  onClickPlayPause = () => {
    this.setState(prev => ({isTimerRunning: !prev.isTimerRunning}))
  }

  increaseTimer = () => {
    this.setState(prev => ({timer: prev.timer + 1}))
  }

  decreaseTimer = () => {
    this.setState(prev => ({timer: prev.timer - 1}))
  }

  render() {
    const {isTimerRunning, timer} = this.state
    const playImgUrl = isTimerRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const playAltVal = isTimerRunning ? 'pause' : 'play'
    const playButton = isTimerRunning ? 'Pause' : 'Start'
    return (
      <div className="app-container">
        <h1>Digital Timer</h1>
        <div className="content-container">
          <div className="timer-display-container">
            <div className="timer-card">
              <p>Paused</p>
            </div>
          </div>
          <div className="timer-features-container">
            <div className="controls-container">
              <div className="control">
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickPlayPause}
                >
                  <img
                    src={playImgUrl}
                    alt={playAltVal}
                    className="option-img"
                  />
                </button>
                <p className="interaction-text">{playButton}</p>
              </div>
              <div className="control">
                <button type="button" className="button">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset"
                    className="option-img"
                  />
                </button>
                <p className="interaction-text">Reset</p>
              </div>
            </div>
            <h1 className="set-limit-heading">Set Timer Limit</h1>
            <div className="timer-limit-section">
              <button
                type="button"
                className="set-button"
                onClick={this.decreaseTimer}
                disabled={isTimerRunning}
              >
                -
              </button>
              <div className="limit-value-container">
                <p className="limit-value">{timer}</p>
              </div>
              <button
                type="button"
                className="set-button"
                onClick={this.increaseTimer}
                disabled={isTimerRunning}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
