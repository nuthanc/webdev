import React from 'react';
import './SearchBox.css';
import { useState, useEffect } from 'react';

const SearchBox = ({ searchTerm }) => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    searchTerm(term)
  }, [term])
  
  return (
    <div className="SearchBox">
      <input
        className="SearchBox-input"
        placeholder="search robots"
        value={term}
        onChange={(e) => {setTerm(e.target.value)}}
      />
    </div>
  );
};

export default SearchBox;
