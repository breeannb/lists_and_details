export const getOneCharacter = name => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?name=${name}`)
    .then(res => res.json())
    .then(([character]) => ({
      name: character.name,
      photoUrl: character.photoUrl,
      affiliation: character.affiliation,
      enemies: character.enemies,
    }));
};

export const getAvatarCharactersList = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(characters => characters.map(character => ({
      id: character._id,
      name: character.name,
      photoUrl: character.photoUrl
    })));
};
