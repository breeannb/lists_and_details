import React, { useState, useEffect } from 'react';
import { getAvatarCharactersList } from '../services/getAvatarCharactersList';
import Characters from '../characters/Characters';

const DisplayCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getAvatarCharactersList()
      .then(fetchList => setCharacters(fetchList));
  }, []);

  return (
    <>
      <h1>Avatar Character List</h1>
      <Characters characters={characters} />
    </>
  );

};

export default DisplayCharacters;

