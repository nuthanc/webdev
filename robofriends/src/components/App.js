import './App.css';
import Title from './Title';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { useState } from 'react';
import { defaultProfiles } from './data/profiles'



const App = () => {
  const [profiles, setProfiles] = useState(defaultProfiles);

  const searchTerm = (term) => {
    console.log("Term:", term);
    let searchedProfiles = defaultProfiles.filter((profile) =>
      profile.name.toLowerCase().includes(term.toLowerCase())
    );
    setProfiles(searchedProfiles);
  };

  return (
    <div className="App">
      <Title />
      <SearchBox searchTerm={searchTerm} />
      <CardList profiles={profiles} />
    </div>
  );
}

export default App;
