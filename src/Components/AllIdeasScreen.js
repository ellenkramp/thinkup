import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';

import { loadIdeasToStore } from '../Actions/actions';
import { getAllIdeas } from '../Lib/api-calls';


let mapPropsToState = (state) => {
  return { allIdeas: state.ideasList}
};

let mapDispatchToProps = dispatch => {
  return { loadIdeasToStore: ideas => dispatch(loadIdeasToStore(ideas)) }
};

class AllIdeasScreen extends Component {

  componentDidMount() {
    getAllIdeas() 
      .then(res => res.json())
      .then(ideas => {
        this.props.loadIdeasToStore(ideas);
      }); 
  }

  render() {
    let allIdeas = this.props.allIdeas;
    return (
        <div>
          <header>
            <Header />
          </header>
        <div className="all-ideas-container">
            { allIdeas.map(idea => {
                return (
                  <div key={idea.id}>
                      <p>{idea.title}</p>
                  <div>
                    <p>{idea.time}</p>
                    <p>{idea.content}</p>
                  </div>
                  </div>  
                )}
              )}
          </div>
        </div>
    );
  }}

export default connect(mapPropsToState, mapDispatchToProps)(AllIdeasScreen);
