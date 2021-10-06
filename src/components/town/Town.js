import React from 'react'
import { CloseButton } from 'react-bootstrap'

const Town = (props) => {
  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.town.name}</td>
      <td>{props.town.region}</td>
      <td>
        <CloseButton onClick={() => props.handleDeleteTown(props.index)} />
      </td>
    </tr>
  )
}

export default Town
