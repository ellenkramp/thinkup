import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { getAllIdeas } from '../Lib/api-calls';
import { loadIdeasToStore } from '../Actions/actions';

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
          <div className="all-ideas">
        <div className="individual-idea">
            { allIdeas.map(idea => {
                return (
                  <div className="container" key={idea.id}>
                      <h2>{idea.title} | {idea.category}</h2>
                      <h5><i>{Date(idea.time)}</i></h5>
                      <img className="post-img" src={idea.img_id} alt="post-img" />
                      <p>{idea.content}</p>
                  </div>
                )}
              )}
          </div>
          </div>
        </div>
    );
  }}

export default connect(mapPropsToState, mapDispatchToProps)(AllIdeasScreen);
