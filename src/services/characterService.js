import localforage from 'localforage'

import Character from '../components/character/Character'

const addCharacter = () => {}

const deleteCharacter = () => {}

const getCharacterData = () => {}

const getAllCharacterData = () => {
  return localforage
    .getItem('characters')
    .then((value) => {
      console.log(value)
      return value
    })
    .catch()
}

const saveCharacterData = () => {}

const saveAllCharacterData = (characters) => {
  localforage
    .setItem('characters', characters)
    .then((value) => {
      return value.map(
        (char) =>
          new Character(
            char.id,
            char.name,
            char.race,
            char.charClass,
            char.str,
            char.dex,
            char.con,
            char.wis,
            char.int,
            char.cha
          )
      )
    })
    .catch()
}

const CharacterService = {
  addCharacter,
  deleteCharacter,
  getCharacterData,
  getAllCharacterData,
  saveCharacterData,
  saveAllCharacterData,
}

export default CharacterService
