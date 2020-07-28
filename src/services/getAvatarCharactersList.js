export const getOneCharacter = name => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?name=${name}`)
    .then(res => res.json())
    .then(([character]) => ({
      name: character.name,
      photoUrl: character.photoUrl,
      affiliation: character.affiliation,
      enemies: character.enemies,
      allies: character.allies,

    }));
};

export const getAvatarCharactersList = num => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=${num}?page=${num}`)
    .then(res => res.json())
    .then(characters => characters.map(character => ({
      id: character._id,
      name: character.name,
      photoUrl: character.photoUrl
    })));
};
