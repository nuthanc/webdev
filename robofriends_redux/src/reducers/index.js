import { combineReducers } from 'redux';

const robotsReducer = (robots=[], action) => {
  if (action.type === 'FETCH_USERS') {
    console.log("In robotsReducer");
    console.log(...action.payload);
    return [...robots, ...action.payload ]
  }
  return robots;
};

const searchFieldReducer = (searchTerm = '', action) => {
  if (action.type === 'SEARCH_FOR') {
    console.log("In searchFieldReducer");
    console.log(action.payload)
    return action.payload;
  }
  return searchTerm;
};

export default combineReducers({
  robots: robotsReducer,
  searchField: searchFieldReducer,
});