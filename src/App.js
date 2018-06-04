import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RouteSettings from './containers/RouteSettings/RouteSettings';
import TrainInfo from './containers/TrainInfo/TrainInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouteSettings />
        <TrainInfo />
      </div>
    );
  }
}

export default App;
