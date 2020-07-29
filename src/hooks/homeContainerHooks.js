import { useState, useEffect } from 'react';
import { getAvatarCharactersList } from '../services/getAvatarCharactersList';

export const useCharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getAvatarCharactersList()
      .then(fetchList => setCharacters(fetchList));
  }, []);

  useEffect(() => {
    getAvatarCharactersList(page)
      .then(perPageCharacters => setCharacters(perPageCharacters));
  }, [page]);

  const handleChange = ({ target }) => {
    if(page === 1 && Number(target.value) === -1) return;
    if(characters[0] === undefined && Number(target.value) === 1) return;
    setPage(page + Number(target.value));
  };

  return {
    characters,
    handleChange,
  };

};
