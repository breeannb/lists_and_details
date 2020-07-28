import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, photoUrl }) => {
  return (
    <section>
      <h4>{name}</h4>
      <img src={photoUrl} alt={name} width="250" />

    </section>
  );
};

Character.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired, 
  enemies: PropTypes.string.isRequired,
};


export default Character;
