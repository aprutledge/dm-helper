import { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const AddCharacterModal = (props) => {
  const { handleSaveChar, ...other } = props

  const [characterName, setCharacterName] = useState('')
  const [characterClass, setCharacterClass] = useState('')
  const [race, setRace] = useState('')
  const [str, setStr] = useState('')
  const [dex, setDex] = useState('')
  const [con, setCon] = useState('')
  const [wis, setWis] = useState('')
  const [int, setInt] = useState('')
  const [cha, setCha] = useState('')

  const onCharacterNameInput = (e) => {
    const characterName = e.target.value
    setCharacterName(characterName)
  }
  const onCharacterClassInput = (e) => {
    const characterClass = e.target.value
    setCharacterClass(characterClass)
  }
  const onRaceInput = (e) => {
    const race = e.target.value
    setRace(race)
  }
  const onStrInput = (e) => {
    const str = e.target.value
    setStr(str)
  }
  const onDexInput = (e) => {
    const dex = e.target.value
    setDex(dex)
  }
  const onConInput = (e) => {
    const con = e.target.value
    setCon(con)
  }
  const onWisInput = (e) => {
    const wis = e.target.value
    setWis(wis)
  }
  const onIntInput = (e) => {
    const int = e.target.value
    setInt(int)
  }
  const onChaInput = (e) => {
    const cha = e.target.value
    setCha(cha)
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    handleSaveChar(characterName, characterClass, race, str, dex, con, wis, int, cha)
    props.onHide()
  }

  return (
    <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Add a Character</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onFormSubmit}>
          <Form.Group className='mb-3' controlId='formCharacterName'>
            <Form.Label>Character Name</Form.Label>
            <Form.Control
              onChange={onCharacterNameInput}
              value={characterName}
              placeholder='Enter Character Name'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formCharacterClass'>
            <Form.Label>Class</Form.Label>
            <Form.Control
              onChange={onCharacterClassInput}
              value={characterClass}
              placeholder='Enter Class'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formRace'>
            <Form.Label>Race</Form.Label>
            <Form.Control onChange={onRaceInput} value={race} placeholder='Enter Race' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formStr'>
            <Form.Label>STR</Form.Label>
            <Form.Control onChange={onStrInput} value={str} placeholder='Enter Strength' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formDex'>
            <Form.Label>DEX</Form.Label>
            <Form.Control onChange={onDexInput} value={dex} placeholder='Enter Dexterity' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formCon'>
            <Form.Label>CON</Form.Label>
            <Form.Control onChange={onConInput} value={con} placeholder='Enter Constitution' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formWis'>
            <Form.Label>WIS</Form.Label>
            <Form.Control onChange={onWisInput} value={wis} placeholder='Enter Wisdom' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formInt'>
            <Form.Label>INT</Form.Label>
            <Form.Control onChange={onIntInput} value={int} placeholder='Enter Intelligence' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formCha'>
            <Form.Label>CHA</Form.Label>
            <Form.Control onChange={onChaInput} value={cha} placeholder='Enter Charisma' />
          </Form.Group>
          <Form.Group>
            <Button className='mx-1' type='submit'>
              Save
            </Button>
            <Button className='mx-1' onClick={props.onHide}>
              Close
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default AddCharacterModal
