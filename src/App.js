import React, { Component } from 'react';

import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";

import HomePageScreen from './Components/HomePageScreen'
import CreateIdea from './Components/CreateIdea';
import CategoriesScreen from './Components/CategoriesScreen'
import AllIdeasScreen from './Components/AllIdeasScreen';


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route path="/" exact component={HomePageScreen}/>
        <Route path="/new" exact component={CreateIdea}/>
        <Route path="/categories" exact component={CategoriesScreen}/>
        <Route path="/ideas" exact component={AllIdeasScreen}/>
      </div>
    </Router>
    );
  }
}

export default App;
