import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getOneCharacter } from '../services/getAvatarCharactersList';

export const useOneCharacter = () => {
  const [character, setCharacter] = useState([]);
  const match = useRouteMatch('/:name');

  useEffect(() => {
    getOneCharacter(match.params.name)
      .then(oneCharacter => setCharacter(oneCharacter));
  }, []);

  return {
    character
  };
};
