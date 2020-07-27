export const getAvatarCharactersList = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(characters => characters.map(character => ({
      _id: character._id,
      name: character.name,
      photoUrl: character.photoUrl
    })));
};

export const getOneAvatarCharacter = () => {
  return fetch(`https://last-airbender-api.herokuapp.com//api/v1/characters/${id}`)
    .then(res => res.json())
    .then(characters => characters.map(character => ({
      allies: character.allies, 
      enemies: character.enemies, 
      photoUrl: character.photoUrl,
      name: character.name, 
      _id: character._id,
      gender: character.gender,
      first: character.first, 
      affilition: character.affilition
    })));
};
