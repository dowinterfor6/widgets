import React from 'react';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props); //what exactly is this doing again?
    this.state = {
      selectedPane: 0
    };
    this.tabSelector = this.tabSelector.bind(this);
  }

  tabSelector(num) {
    this.setState({selectedPane: num});
  }

  render() {
    const currentPane = this.props.panes[this.state.selectedPane];

    return (
      <div id="tabs-widget">
        <h2>Tabs</h2>
        <div id="tabs-display">
          <Headers 
            selectedPane = {this.state.selectedPane}
            onTabChosen = {this.tabSelector}
            panes = {this.props.panes}
          />
          <div id="tabs-content">
            <article>
              <p>{currentPane.content}</p>
            </article>
          </div>
        </div>
      </div>
    )
  }
}

class Headers extends React.Component {
  render() {
    const selected = this.props.selectedPane;
    const headers = this.props.panes.map((pane, idx) => {
      const title = pane.title;
      const hidden = idx === selected ? 'active' : '';

      return (
        <li 
          key = {idx} 
          className = {hidden}
          onClick = { () => this.props.onTabChosen(idx) }>
          {title}
        </li>
      );
    });

    return (
      <ul id='unit-tab-header'>
        {headers}
      </ul>
    );
  }
}