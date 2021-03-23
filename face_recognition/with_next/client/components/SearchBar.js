const SearchBar = ({ onInputChange, onSubmit }) => {
  return (
    <div className="SearchBar">
      <div className="input-group">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Image URL"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={onInputChange}
        />
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={onSubmit}
        >
          Detect
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
