import { useState, useEffect } from 'react';
import { getAvatarCharactersList } from '../services/getAvatarCharactersList';

export const useCharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [num, setNum] = useState([]);

  const incrementPage = () => {
    getAvatarCharactersList(num + 1)
      .then(({ results }) => { 
        setCharacters(results);
        setNum(num + 1);
      });
  };

  useEffect(() => {
    getAvatarCharactersList()
      .then(fetchList => setCharacters(fetchList));
  }, []);

  return {
    characters, 
    incrementPage
  };
};
