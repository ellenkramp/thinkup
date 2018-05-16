import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { loadIdeasToStore } from './Actions/actions';
import { getAllIdeas } from './Lib/api-calls';

import HomePageScreen from './Components/HomePageScreen'
import CreateIdea from './Components/CreateIdea';
import CategoriesScreen from './Components/CategoriesScreen';
import AllIdeasScreen from './Components/AllIdeasScreen';
import OneCategoryScreen from './Components/OneCategoryScreen';
import SearchScreen from './Components/SearchScreen';


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
      <Switch>
        <Route path="/categories/:category" component={OneCategoryScreen}/>
        <Route path="/new" component={CreateIdea}/>
        <Route path="/categories" component={CategoriesScreen}/>
        <Route path="/ideas" component={AllIdeasScreen}/>
        <Route path="/search" component={SearchScreen}/>
        <Route path="/" component={HomePageScreen}/>      
        </ Switch>
    </Router>
    );
  }
}

export default connect (null,mapDispatchToProps)(App);
