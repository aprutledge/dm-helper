import { useState, useRef, useEffect } from 'react'

import CharacterCard from './CharacterCard'
import Character from './Character'
import FloatingMenu from '../ui/FloatingMenu'
import AddCharacterModal from './AddCharacterModal'
import CharacterService from '../../services/CharacterService'
import FileService from '../../services/FileService'

const CharacterList = (props) => {
  const [character, setCharacter] = useState([])
  const [exportDownloadURL, setExportDownloadURL] = useState('')
  const [modalShow, setModalShow] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = () => {
    CharacterService.getAllCharacterData()
      .then((value) => {
        setCharacter(value)
      })
      .catch((err) => alert(err))
  }

  const handleSaveChar = (
    name,
    race,
    charClass,
    str,
    dex,
    con,
    wis,
    int,
    cha
  ) => {
    const tempChars = [
      ...character,
      new Character(
        character.length + 1,
        name,
        race,
        charClass,
        str,
        dex,
        con,
        wis,
        int,
        cha
      ),
    ]
    character.forEach((character, index) => {
      character.id = index + 1
    })
    setCharacter(tempChars)
    CharacterService.saveAllCharacterData(tempChars)
  }

  const handleDeleteChar = (id) => {
    const tempChars = character.filter((char) => char.id !== id)
    setCharacter(tempChars)
    CharacterService.saveAllCharacterData(tempChars)
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
    <div
      className={`d-flex flex-row flex-wrap justify-content-center pt-3 mb-5`}
    >
      {character.map((char) => (
        <CharacterCard
          id={char.id}
          char={char}
          handleDeleteChar={handleDeleteChar}
        />
      ))}
      <FloatingMenu toggleModal={toggleModal} handleExport={handleExport} />

      <AddCharacterModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        handleSaveChar={handleSaveChar}
      />
      <a
        style={{ display: 'none' }}
        download='text.json'
        href={exportDownloadURL}
        ref={inputRef}
      >
        download
      </a>
    </div>
  )
}

export default CharacterList
