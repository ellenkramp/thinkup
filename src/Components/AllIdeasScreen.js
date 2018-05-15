import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';


let mapPropsToState = (state) => {
  return { allIdeas: state.ideasList}
};

class AllIdeasScreen extends Component {
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

export default connect(mapPropsToState)(AllIdeasScreen);
