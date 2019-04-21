import React from 'react';
import Clock from './clock';

class WidgetsWrapper extends React.Component {
  render() {
    return (
      <>
        <div id="nav-bar">
          <h1>Chrome Web Store</h1>
          <h1>dowinterfor6@gmail.com</h1>
        </div>
        <section id="main-content">
          <aside id="side-bar">
            <h1>Search the store</h1>
            <h2>Extensions</h2>
            <h2>Themes</h2>
          </aside>
          <div id="widgets">
            <Clock />
            <div id="weather-widget">weather is shit</div>
          </div>
        </section>
      </>
    )
  }
}

export default WidgetsWrapper;