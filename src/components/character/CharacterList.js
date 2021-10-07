import { useState, useRef } from 'react'

import { Character } from './Character'
import CharacterModel from './characterModel'
import FloatingMenu from '../ui/FloatingMenu'
import AddCharacterModal from './AddCharacterModal'
import CharacterService from '../../services/CharacterService'
import FileService from '../../services/FileService'

export const CharacterList = (props) => {
  const [character, setCharacter] = useState([
    new CharacterModel(0, 'Alex', 'Human', 'Fighter', 10, 10, 10, 10, 10, 10),
    new CharacterModel(1, 'Katie', 'Human', 'Barbarian', 10, 10, 10, 10, 10, 10),
    new CharacterModel(2, 'Matt', 'Human', 'Wizard', 10, 10, 10, 10, 10, 10),
  ])
  const [exportDownloadURL, setExportDownloadURL] = useState('')
  const [modalShow, setModalShow] = useState(false)
  const inputRef = useRef(null)

  //TODO
  const handleSaveChar = (name, race, charClass, str, dex, con, wis, int, cha) => {
    const tempChars = [
      ...character,
      new CharacterModel(character.length + 1, name, race, charClass, str, dex, con, wis, int, cha),
    ]
    character.forEach((character, index) => {
      character.id = index + 1
    })
    setCharacter(tempChars)
    //CharacterService.saveTowns(tempChars)
  }

  const handleDeleteChar = (id) => {
    setCharacter(() => character.filter((char) => char.id !== id))
  }

  const toggleModal = () => {
    setModalShow(!modalShow)
  }

  const handleExport = () => {
    console.log('export')
    FileService.exportAllToJson('text.json').then((fileUrl) => {
      setExportDownloadURL(fileUrl)
      inputRef.current.click()
    })
  }

  return (
    <div className={`d-flex flex-row flex-wrap justify-content-center pt-3 mb-5`}>
      {character.map((char) => (
        <Character id={char.id} char={char} handleDeleteChar={handleDeleteChar} />
      ))}
      <FloatingMenu toggleModal={toggleModal} handleExport={handleExport} />

      <AddCharacterModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        handleSaveChar={handleSaveChar}
      />
      <a style={{ display: 'none' }} download='text.json' href={exportDownloadURL} ref={inputRef}>
        download
      </a>
    </div>
  )
}
