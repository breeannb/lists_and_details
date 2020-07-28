import React from 'react';
import DetailCharacter from '../components/App/detailpagecharacter/DetailCharacter';
import Header from '../components/header/Header';
import { useOneCharacter } from '../hooks/detailPageContainerHooks';

const DetailPageContainer = () => {

  const {
    character
  } = useOneCharacter();

  return (
    <>
      <Header />
      <h1>Detail Page</h1>
      <DetailCharacter {...character} />
    </>
    
  );

};

export default DetailPageContainer;
