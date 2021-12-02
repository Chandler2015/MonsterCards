import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Franklin'
        },
        {
          name: 'Cheers'
        },
        {
          name: 'Bluekey'
        },
      ]
    }
  }



  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => <h1>{monster.name}</h1>)}

      </div>
    );
  }

}


export default App;
