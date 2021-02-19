import './App.css';
import Title from './Title';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { useState, useEffect } from 'react';
// import { defaultProfiles } from './data/profiles'
import axios from 'axios';


const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [searchField, setSearchField] = useState('');

  const searchTerm = (term) => {
    // console.log("Term:", term);
    setSearchField(term);
  };

  useEffect(() => {
    (async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(response.data);
      setProfiles(response.data)
    })();
  }, []);

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <Title />
      <SearchBox searchTerm={searchTerm} />
      <CardList profiles={filteredProfiles} />
    </div>
  );
}

export default App;
