import React from 'react';
import './SearchBox.css';
import { useState } from 'react';

const SearchBox = ({ hello }) => {
  const [term, setTerm] = useState(null);
  return (
    <div className="SearchBox">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          hello(term);
        }}
      >
        <input
          className="SearchBox-input"
          placeholder="search robots"
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBox;
