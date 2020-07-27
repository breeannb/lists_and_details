export const getAvatarCharactersList = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(characters => characters.map(character => ({
      _id: character._id,
      name: character.name,
      photoUrl: character.photoUrl
    })));
};
