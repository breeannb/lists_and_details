import { useState, useEffect } from 'react';
import { getAvatarCharactersList } from '../services/getAvatarCharactersList';

export const useCharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getAvatarCharactersList()
      .then(fetchList => setCharacters(fetchList));
  }, []);

  return {
    characters
  };
};
