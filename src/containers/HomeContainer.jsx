import React from 'react';
import { useCharacterList } from '../hooks/homeContainerHooks';
import Characters from '../components/characters/Characters';
import PageButtons from '../components/pagebuttons/PageButtons';

const DisplayCharacters = () => {
  
  const {
    characters,  
    page,
    handleChange
  } = useCharacterList();

  return (
    <>
      <h1>Avatar Character List</h1>
      <PageButtons page={page} handleChange={handleChange} />
      <Characters characters={characters}/>
      
    </>
  );
};

export default DisplayCharacters;
