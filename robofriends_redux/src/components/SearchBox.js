import React from 'react';
import './SearchBox.css';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { searchFor } from '../actions'

const SearchBox = ({ searchTerm, searchFor }) => {
  
  return (
    <div className="SearchBox">
      <input
        className="SearchBox-input"
        placeholder="search robots"
        value={searchTerm}
        onChange={(e) => {searchFor(e.target.value);}}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { searchTerm: state.searchField };
};

export default connect(mapStateToProps, { searchFor })(SearchBox);

