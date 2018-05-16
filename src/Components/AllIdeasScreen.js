import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import cloudinary from 'cloudinary-core';
const cloudinaryCore = new cloudinary.Cloudinary({cloud_name: 'demo'});

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
        <div>
            { allIdeas.map(idea => {
                return (
                  <div className="container" key={idea.id}>
                      <h2>{idea.title} | {idea.category}</h2>
                      <h5><i>{Date(idea.time)}</i></h5>
                      <img className="post-img" src={cloudinaryCore.url('sample')} alt="post-img" />
                      <p>{idea.content}</p>
                  </div>
                )}
              )}
          </div>
        </div>
    );
  }}

export default connect(mapPropsToState)(AllIdeasScreen);
