import axios from 'axios';

export const fetchUsers = () => async (dispatch) => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  dispatch({ type: 'FETCH_USERS', payload: response.data });
};

export const searchFor = (term) => {
  return {
    type: 'SEARCH_FOR',
    payload: term
  }
}