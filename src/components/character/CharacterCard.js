import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const CharacterCard = (props) => {
  return (
    <Card
      id={props.id}
      className={`col-12 col-sm-6 col-md-6 col-lg-4 mx-2 mb-5`}
      style={{ width: '18rem' }}
    >
      <Card.Body>
        <Card.Title>{props.char.name}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          {'A ' + props.char.race + ' ' + props.char.charClass + '.'}
        </Card.Subtitle>
        <Card.Text>
          <p>{'STR: ' + props.char.attributes.str}</p>
          <p>{'DEX: ' + props.char.attributes.dex}</p>
          <p>{'CON: ' + props.char.attributes.con}</p>
          <p>{'WIS: ' + props.char.attributes.wis}</p>
          <p>{'INT: ' + props.char.attributes.int}</p>
          <p>{'CHA: ' + props.char.attributes.cha}</p>
        </Card.Text>
        <Button variant='primary' onClick={() => props.handleDeleteChar(props.id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  )
}

export default CharacterCard
