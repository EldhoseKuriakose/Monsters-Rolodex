import React from 'react';
import { CardList } from './components/card-list/CardList.component';
import { SearchBox } from './components/search-box/SearchBox.component';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder='search-monsters'
          handleChange={e =>
            this.setState({ searchField: e.target.value })
          }
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
