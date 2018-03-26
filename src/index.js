import React, { Component } from 'react';
import { render } from 'react-dom';
import './main.scss';
import Empty from './js/Empty';
import ListViewer from './js/ListViewer';

class App extends Component {
  state = {
    show: true,
  }

  showList = () => {
    switch(this.state.show) {
    case true:
      return (<ListViewer />);
    case false:
    default:
      return (<Empty />);
    }
  }
  
  render() {
    return (
      <div>
        Here's where our app goes!
        <div>
          <button onClick={() => {this.setState({show: !this.state.show});}}>Show Me The List</button>
        </div>
        { this.showList()}
      </div>
    );
  }
}

var mountNode = document.getElementById('app');
render(<App />, mountNode);