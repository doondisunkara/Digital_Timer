import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    startTimer: false,
  }

  render() {
    const {startTimer} = this.state
    const playImgUrl = startTimer
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const playAltVal = startTimer ? 'pause' : 'play'
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
                <button type="button" className="button">
                  <img
                    src={playImgUrl}
                    alt={playAltVal}
                    className="option-img"
                  />
                </button>
                <p>Start</p>
              </div>
              <div className="control">
                <button type="button" className="button">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset"
                    className="option-img"
                  />
                </button>
                <p>Reset</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
