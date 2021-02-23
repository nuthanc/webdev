import React, {useEffect} from 'react';
import Title from './Title';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';


import './App.css';


const App = ({ fetchUsers, profiles, searchField }) => {
  useEffect(() => {
    (async () => {
      await fetchUsers();
    })();
  }, []);
  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <Title />
      <SearchBox />
      <CardList profiles={filteredProfiles} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { profiles: state.robots, searchField: state.searchField };
};

export default connect(mapStateToProps, { fetchUsers })(App);

