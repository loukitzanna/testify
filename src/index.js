import React, { Component } from 'react';
import { render } from 'react-dom';
import './main.scss';
import Empty from './js/Empty';
import List from './js/List';

class App extends Component {
  // constructor() {
  //   super(props);
  // }
  state = {
    show: false,
  }

  showList = () => {
    switch(this.state.show) {
    case true:
      return (<List items={[{ text: 'one' }, { text: 'two' }]} />);
    case false:
    default:
      return (<Empty />);
    }
  }
  
  render() {
    return (
      <div>
        Here's where our app goes!
        <button onClick={(e) => {this.setState({show: !this.state.show});}}>Toggle List!</button>
        { this.showList()}
      </div>
    );
  }
}

var mountNode = document.getElementById('app');
render(<App />, mountNode);