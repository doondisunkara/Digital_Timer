import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    isTimerRunning: false,
    timeInSeconds: 0,
    timer: 25,
  }

  incrementTimeInSeconds = () => {
    this.setState(prev => ({timeInSeconds: prev.timeInSeconds + 1}))
  }

  onClickPlayPause = () => {
    const {isTimerRunning} = this.state
    if (isTimerRunning) {
      clearInterval(this.intervalId)
    } else {
      this.intervalId = setInterval(this.incrementTimeInSeconds, 1000)
    }
    this.setState(prev => ({isTimerRunning: !prev.isTimerRunning}))
  }

  getElapsedTimeFormat = () => {
    const {timeInSeconds, timer} = this.state

    const remainingSeconds = timer * 60 - timeInSeconds
    if (remainingSeconds === 0) {
      this.onClickPlayPause()
      return {}
    }
    const minutes = Math.floor(remainingSeconds / 60)
    const seconds = remainingSeconds % 60

    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return {stringifiedMinutes, stringifiedSeconds}
  }

  increaseTimer = () => {
    this.setState(prev => ({timer: prev.timer + 1}))
  }

  decreaseTimer = () => {
    const {timer} = this.state
    if (timer > 1) {
      this.setState(prev => ({timer: prev.timer - 1}))
    }
  }

  onResetTimer = () => {
    clearInterval(this.intervalId)
    this.setState({timer: 25, timeInSeconds: 0, isTimerRunning: false})
  }

  render() {
    const {isTimerRunning, timeInSeconds, timer} = this.state
    const {
      stringifiedMinutes = '25',
      stringifiedSeconds = '00',
    } = this.getElapsedTimeFormat()
    const playImgUrl = isTimerRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const playAltVal = isTimerRunning ? 'pause icon' : 'play icon'
    const playButton = isTimerRunning ? 'Pause' : 'Start'
    return (
      <div className="app-container">
        <h1>Digital Timer</h1>
        <div className="content-container">
          <div className="timer-display-container">
            <div className="timer-card">
              <h1 className="timer-display">{`${stringifiedMinutes}:${stringifiedSeconds}`}</h1>
              <p className="timer-status">
                {isTimerRunning ? `Running` : `Paused`}
              </p>
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
                  <p className="interaction-text">{playButton}</p>
                </button>
              </div>
              <div className="control">
                <button type="button" className="button">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    className="option-img"
                    onClick={this.onResetTimer}
                  />
                  <p className="interaction-text">Reset</p>
                </button>
              </div>
            </div>
            <p className="set-limit-heading">Set Timer Limit</p>
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
