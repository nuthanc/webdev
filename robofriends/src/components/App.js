import './App.css';
import Title from './Title';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { useState, useEffect } from 'react';
import { defaultProfiles } from './data/profiles'

const hello = (name) => {
  if (name)
    console.log('Hello ' + name);
};

const App = () => {
  const [profiles] = useState(defaultProfiles);
  return (
    <div className="App">
      <Title />
      <SearchBox hello={hello}/>
      <CardList profiles={profiles} />
    </div>
  );
}

export default App;
