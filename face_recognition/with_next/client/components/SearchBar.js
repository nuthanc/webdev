import { useState } from 'react';

const SearchBar = () => {
  const [url, setURL] = useState('');
  return (
    <div className="SearchBar">
      <div className="input-group">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Image URL"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={(e) => setURL(e.target.value)}
        />
        <button type="button" className="btn btn-outline-primary">
          Detect
        </button>
      </div>
      <div className="mt-2 text-center">
        <img src={url}/>
      </div>
    </div>
  );
};

export default SearchBar;
