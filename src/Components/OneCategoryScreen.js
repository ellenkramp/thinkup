import React from 'react';
import { connect } from 'react-redux';

import Header from '../Components/Header';


let mapStateToProps = (state, props) => {
  return { allIdeas: state.ideasList, 
    categoryId: props.match.params.category }
};

  
  let OneCategoryScreen = ({allIdeas, categoryId}) => {
    console.log(categoryId);
    let theCategory = allIdeas.find(Eachcategory => Eachcategory.category === parseInt(categoryId, 10))
    console.log(allIdeas);
    console.log(theCategory);
      return (
          <div>
            <header>
              <Header />
            </header>
            <div>
              <h1>{theCategory.title}</h1>
              <p>{theCategory.content}</p>
            </div>
          </div>
    )
  }
  
  export default connect(mapStateToProps)(OneCategoryScreen);
  