import React from 'react';
import Clock from './clock';

class WidgetsWrapper extends React.Component {
  render() {
    return (
      <>
        <h1>React is working!</h1>
        <br />
        <Clock />
      </>
    )
  }
}

export default WidgetsWrapper;