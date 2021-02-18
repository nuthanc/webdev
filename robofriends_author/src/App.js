import React from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends React.Component {
  state = {
    robots: robots,
    searchfield: ''
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render() {
    const filteredRobots = this.state.robots.filter((robot) =>
      robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    );
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
};

export default App;
