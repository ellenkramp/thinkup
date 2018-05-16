import React from 'react';

import SearchBar from './SearchBar';
import Header from './Header';


let SearchScreen = () => {
  
    return (
      <div className="containter">
        <Header />
        <div className="search-bar-container">
            <SearchBar />
        </div>
      </div>
    )}

export default SearchScreen;