import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

import ResultList from './ResultList'
import DiceService from '../../services/DiceService'

export const DiceRoller = () => {
  const [diceString, setDiceString] = useState('')
  const [rollList, setRollList] = useState([])

  const onDiceStringInput = (e) => {
    const diceString = e.target.value
    console.log(diceString)
    setDiceString(diceString)
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    const result = DiceService.parseDiceString(diceString)
    setRollList([result, ...rollList])
    console.log(rollList)
  }

  return (
    <div>
      <Form onSubmit={onFormSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label></Form.Label>
          <Form.Control
            onChange={onDiceStringInput}
            type='roller'
            placeholder='Enter Dice to Roll'
          />
          <Form.Text className='text-muted'>Enter the dice you want to roll. Ex: 1d6</Form.Text>
        </Form.Group>
        <Button variant='primary' type='submit'>
          Roll
        </Button>
      </Form>
      <ResultList rollList={rollList} />
    </div>
  )
}
