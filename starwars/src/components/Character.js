// Write your Character component here
import React, { Component } from 'react';
import './App.css';
import CCard from './components/CCard';

// class App extends Component {
//   constructor() {
function Character () {   
    super();
    this.state = {
      rickandmortyChars: []
    }

  componentDidMount() {
    this.getCharacters('https://rickandmortyapi.com/character/')
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

      // render() {
    return (
      <div className="App">
        <h1 className="Header">Rick and Marty</h1>
            <CCard rickandmortyChars = {this.state.rickandmorty} />
      </div>
    );
    //   }
};

export default Character;
