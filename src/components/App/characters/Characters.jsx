import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Character from '../character/Character';

const Characters = ({ characters }) => {

  const characterElements = characters.map(character=> (
    <li key={character.name}>
      <Link to={`/${character.name}`}>
        <Character {...character} />
      </Link>
    </li>
  ));

  return (
    <ul>
      {characterElements}
    </ul>
  );

};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    photoUrl: PropTypes.string
  })).isRequired
};

export default Characters;
