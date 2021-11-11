import Attributes from './Attributes'

class Character {
  constructor(id, name, race, charClass, str, dex, con, wis, int, cha) {
    this.id = id
    this.name = name
    this.race = race
    this.charClass = charClass
    this.attributes = new Attributes(str, dex, con, wis, int, cha)
  }
}

export default Character
