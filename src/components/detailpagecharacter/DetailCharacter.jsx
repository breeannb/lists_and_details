import React from 'react';
import PropTypes from 'prop-types';

const DetailCharacter = ({ name, photoUrl, affiliation, enemies, allies }) => {
  return (
    <section>
      <img src={photoUrl} alt={name} width="250" />
      <h4>{name}</h4>
      <p>{affiliation}</p>
      <p>{enemies}</p>
      <p>{allies}</p>
    </section>
  );
};

DetailCharacter.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired, 
  enemies: PropTypes.string.isRequired,
  allies: PropTypes.string.isRequired,
};


export default DetailCharacter;
