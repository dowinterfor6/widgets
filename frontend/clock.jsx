import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date()
    }
    this.tick = this.tick.bind(this);
    this.render = this.render.bind(this);
  }

  componentDidMount() {
    this.handle = setInterval(this.tick, 1000);
  }

  tick() {
    this.setState({time: new Date()});
  }

  render() {
    let timeParse = this.state.time.toTimeString();
    timeParse = timeParse.split(" ");
    let timeDisplay = timeParse.shift();
    let timeZoneParse = timeParse.slice(1);
    timeZoneParse = timeZoneParse.join(" ");
    let timeZone = timeZoneParse.split("")
    timeZone = timeZone.filter((el) => {
      return el === el.toUpperCase() && !/[^a-zA-Z]/.test(el);
    });
    timeZone = timeZone.join("");
    return (
      <div id="clock-widget">
        <h2>Clock</h2>
        <p>Time: {timeDisplay} {timeZone}</p>
        <p>Date: {this.state.time.toDateString()}</p>
      </div>
    )
  }
}

export default Clock;