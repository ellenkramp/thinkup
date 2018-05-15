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
            <div key={filteredIdeasByCategory.id}>
              {
                filteredIdeasByCategory.map(idea => {
                return (
                  <div>
                    <h1>{idea.title}</h1>
                    <p>{idea.content}</p>
                  </div>
                )
              })
              
              }
            </div>
          </div>
    )
  }
  
  export default connect(mapStateToProps)(OneCategoryScreen);
  