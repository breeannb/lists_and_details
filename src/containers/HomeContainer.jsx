import React from 'react';
import { useCharacterList } from '../hooks/homeContainerHooks';
import Characters from '../components/App/characters/Characters';

const DisplayCharacters = () => {
  
  const {
    characters, 
    incrementPage
  } = useCharacterList();

  return (
    <>
      <h1>Avatar Character List</h1>
      <Characters characters={characters}/>
      <button incrementPage={incrementPage}>Next</button>
  
    </>
  );

};

export default DisplayCharacters;
