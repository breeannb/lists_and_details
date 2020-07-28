import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getOneCharacter } from '../services/getAvatarCharactersList';
import DetailCharacter from '../components/App/detailpagecharacter/DetailCharacter';
import Header from '../components/header/Header';

const DetailPageContainer = () => {
  const [character, setCharacter] = useState();
  const match = useRouteMatch('/:name');

  useEffect(() => {
    getOneCharacter(match.params.name)
      .then(oneCharacter => setCharacter(oneCharacter));
  }, []);

  return (
    <>
      <Header />
      <h1>Detail Page</h1>
      <DetailCharacter {...character} />
    </>
    
  );

};

export default DetailPageContainer;
