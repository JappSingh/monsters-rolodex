import React from 'react';

import './search-box.styles.css';

// Since cardList component needs SearchField state, we can't put that state into SearchBox component.
// Need to "Lift State Up"!
export const SearchBox = ({ placeholder, handleChange }) => (
  <input className='search' type='search' 
         placeholder={placeholder} 
         onChange={handleChange}
  />
);
