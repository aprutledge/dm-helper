import React from 'react'
import { ListGroup } from 'react-bootstrap'

const ResultList = (props) => {
  return (
    <ListGroup>
      {props.rollList.map((roll, id) => (
        <ListGroup.Item key={id}>{roll}</ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default ResultList
