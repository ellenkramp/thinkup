import React from 'react';


let OneCategory = ({categoryName}) => {
  
    return (
      <div className="one-category">
        <h4>{categoryName.category}</h4>
          {
            categoryName.map(eachCategory => {
              return (
                <div>
                    <h1>{eachCategory.title}</h1>
                    <img className="post-img" alt="img" src={eachCategory.img_id} />
                    <p>{eachCategory.content}</p>
                </div>
              );
            })
          }
      </div>
    )}

export default OneCategory;
