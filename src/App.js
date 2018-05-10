import React, { Component } from 'react';

import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";

import HomePageScreen from './Components/HomePageScreen'
import CreateIdea from './Components/CreateIdea';


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route path="/" exact component={HomePageScreen}/>
        <Route path="/new" exact component={CreateIdea}/>
      </div>
    </Router>
    );
  }
}

export default App;
