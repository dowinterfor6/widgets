import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

class WidgetsWrapper extends React.Component {
  render() {
    let panes = [
      { title: 'tab1', content: 'uno'},
      { title: 'tab2', content: 'dos Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi repellendus dicta perspiciatis ut magni iste excepturi, maiores molestias inventore, eaque eligendi quo aliquam? Sequi in commodi mollitia esse? Est, tenetur.'},
      { title: 'tab3', content: 'tres Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi repellendus dicta perspiciatis ut magni iste excepturi, maiores molestias inventore, eaque eligendi quo aliquam? Sequi in commodi mollitia esse? Est, tenetur.'}
    ]

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
            <Weather />
            <Tabs panes={panes} />
          </div>
        </section>
      </>
    )
  }
}

export default WidgetsWrapper;