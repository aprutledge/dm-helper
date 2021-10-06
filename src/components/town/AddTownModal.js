import { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const AddTownModal = (props) => {
  const { handleSaveTown, ...other } = props

  const [town, setTown] = useState('')
  const [region, setRegion] = useState('')

  const onTownInput = (e) => {
    const town = e.target.value
    setTown(town)
  }
  const onRegionInput = (e) => {
    const region = e.target.value
    setRegion(region)
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    console.log(town + ' ' + region)
    handleSaveTown(town, region)
    props.onHide()
  }

  return (
    <Modal
      {...other}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Add a Town</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onFormSubmit}>
          <Form.Group className='mb-3' controlId='formTownName'>
            <Form.Label>Town Name</Form.Label>
            <Form.Control
              onChange={onTownInput}
              value={town}
              placeholder='Enter Town Name'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formRegionName'>
            <Form.Label>Region Name</Form.Label>
            <Form.Control
              onChange={onRegionInput}
              value={region}
              placeholder='Enter Region Name'
            />
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

export default AddTownModal
