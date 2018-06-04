import React, { Component } from 'react';
import classes from './App.css';
import RouteSettings from './containers/RouteSettings/RouteSettings';
import TrainInfo from './containers/TrainInfo/TrainInfo';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Header />
        <RouteSettings />
        <TrainInfo />
      </div>
    );
  }
}

export default App;
