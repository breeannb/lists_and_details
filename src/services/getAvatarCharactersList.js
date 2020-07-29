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

export const getAvatarCharactersList = page => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?page=${page}`)
    .then(res => res.json());
};
