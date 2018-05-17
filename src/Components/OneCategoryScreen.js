import React from 'react';
import { connect } from 'react-redux';

import Header from '../Components/Header';


let mapStateToProps = (state, props) => {
  return { allIdeas: state.ideasList, 
    categoryName: props.match.params.category }
};

  
let OneCategoryScreen = ({allIdeas, categoryName}) => {
    console.log(categoryName);
    let filteredIdeasByCategory = allIdeas.filter(Eachcategory => Eachcategory.category === categoryName.toLowerCase())
    console.log(allIdeas);
    console.log(filteredIdeasByCategory);
      return (
          <div>
            <header>
              <Header />
            </header>
            <div className="container" key={filteredIdeasByCategory.id}>
              {
                filteredIdeasByCategory.map((idea, i) => {
                return (
                  <div className="container" key={i}>
                    <h1>{idea.title}</h1>
                    <p><i>{Date(idea.time)}</i></p>
                    <p>{idea.content}</p>
                    <img src={idea.img_id} alt="img" className="post-img" />
                  </div>
                )
              })
              
              }
            </div>
          </div>
    )
  }

export default connect(mapStateToProps)(OneCategoryScreen);
  