import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import moment from 'moment-timezone';
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
        <div className="all-ideas-container">
            { allIdeas.map(idea => {
                return (
                  <div key={idea.id}>
                      <h2>{idea.title}</h2>
                  <div>
                    <h5><i>{Date(idea.time)}</i></h5>
                    <img className="post-img" src={cloudinaryCore.url('sample')} />
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
