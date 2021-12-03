import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monsters => this.setState({ monsters: monsters }));
  }

  render() {
    return (
      <div className="App">
        <CardList name='yuhang' >
          {this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)}
        </CardList>

      </div>
    );
  }

}


export default App;
