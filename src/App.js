import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => this.setState({ monsters: monsters }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    console.log(searchField)

    return (
      <div className="App">
        {/* <input type='search' placeholder='search monsters' onChange={e => this.setState({ searchField: e.target.value })} /> */}
        <SearchBox placeholder='search monsters' handleChange={this.handleChange} />
        {/* <SearchBox placeholder='search monsters' handlerChange={this.onSearchChange} /> */}

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

}


export default App;
