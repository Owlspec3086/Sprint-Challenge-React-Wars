import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CCard from './components/CCard';
import { Container, Row } from 'reactstrap';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then((response) => {
        const charData = response.data.results;
        console.log('Character Data', charData);
        setCharacter(charData);
      })
      .catch((error) => {
        console.log('Do you want to develop an app?', error);
      });
  }, []); //Dependency array

  return (
    <div className='App'>
      <h1 className='Header'>Rick and Morty</h1>
      <Container>
        <Row>
          {character.map((character, index) => {
            //Where my character card will go
            return (
              <CCard
                key={index}
                name={character.name}
                gender={character.gender}
                location={character.location}
                episode={character.episode}
                image={character.image}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default App;
