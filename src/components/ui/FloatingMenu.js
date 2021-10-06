import React from 'react'
import { useState } from 'react'
import { PlusCircle, XCircle, FileText, Menu } from 'react-feather'

import FloatingMenuItem from './FloatingMenuItem'

//import './FloatingMenu.css'

const FloatingMenu = (props) => {
  const [toggled, setToggled] = useState(false)

  const toggleMenu = () => {
    setToggled(!toggled)
  }

  let buttons = []
  let icon = <PlusCircle className='floating-menu-icon' />

  if (toggled) {
    buttons.push(
      <FloatingMenuItem
        icon={<PlusCircle size={32} />}
        action={props.toggleModal}
        toggleMenu={toggleMenu}
        key='i1'
      />
    )

    buttons.push(
      <FloatingMenuItem
        icon={<FileText size={32} />}
        action={props.handleExport}
        toggleMenu={toggleMenu}
        key='i2'
      />
    )
  }

  buttons.push(
    <FloatingMenuItem
      icon={toggled ? <XCircle size={36} /> : <Menu size={36} />}
      toggleMenu={toggleMenu}
      key='m'
    />
  )

  return (
    <div className='position-absolute bottom-0 end-0 me-3 mb-3'>{buttons}</div>
  )
}

export default FloatingMenu
