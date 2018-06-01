import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RouteSettings from './containers/RouteSettings/RouteSettings';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouteSettings />
      </div>
    );
  }
}

export default App;
