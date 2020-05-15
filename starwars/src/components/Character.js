// Write your Character component here
import React, { Component } from 'react';
import './App.css';
import CharCard from './components/CharCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      rickandmortyChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://rickandmortyapi.com/character/');
  }

  getCharacters = URL => {
    //Fetching data
    
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ rickandmorty: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">Rick and Marty</h1>
            <CCard rickandmortyChars = {this.state.rickandmorty} />
      </div>
    );
  }
}

export default App;
