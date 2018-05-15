import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";

import { loadIdeasToStore } from './Actions/actions';
import { getAllIdeas } from './Lib/api-calls';

import HomePageScreen from './Components/HomePageScreen'
import CreateIdea from './Components/CreateIdea';
import CategoriesScreen from './Components/CategoriesScreen';
import AllIdeasScreen from './Components/AllIdeasScreen';
import OneCategoryScreen from './Components/OneCategoryScreen';


let mapDispatchToProps = dispatch => {
  return { loadIdeasToStore: ideas => dispatch(loadIdeasToStore(ideas)) }
};

class App extends Component {
  componentDidMount() {
    getAllIdeas() 
      .then(res => res.json())
      .then(ideas => {
        this.props.loadIdeasToStore(ideas);
      }); 
  }

  render() {
    return (
      <Router>
      <div>
        <Route path="/" exact component={HomePageScreen}/>
        <Route path="/new" exact component={CreateIdea}/>
        <Route path="/categories" exact component={CategoriesScreen}/>
        <Route path="/categories/:category" exact component={OneCategoryScreen}/>
        <Route path="/ideas" exact component={AllIdeasScreen}/>
      </div>
    </Router>
    );
  }
}

export default connect (null,mapDispatchToProps)(App);
