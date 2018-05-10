import React, { Component } from 'react';

import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";

import HomePageScreen from './Components/HomePageScreen'
import CreateIdea from './Components/CreateIdea';
import CategoriesScreen from './Components/CategoriesScreen'


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route path="/" exact component={HomePageScreen}/>
        <Route path="/new" exact component={CreateIdea}/>
        <Route path="/categories" exact component={CategoriesScreen}/>
      </div>
    </Router>
    );
  }
}

export default App;
