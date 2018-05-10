import React, { Component } from 'react';

import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";

import HomePageScreen from './Components/HomePageScreen'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route path="/" exact component={HomePageScreen}/>
      </div>
    </Router>
    );
  }
}

export default App;
