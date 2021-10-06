import React from 'react'

const FloatingMenuItem = (props) => {
  const handleClick = () => {
    console.log('hello from handleClick')
    if (props.action) props.action()
    props.toggleMenu()
  }

  let label

  if (props.label) {
    label = <label>{props.label}</label>
  }

  return (
    <div onClick={() => handleClick()} className='p-2'>
      {label}
      <div>
        <i>{props.icon}</i>
      </div>
    </div>
  )
}

export default FloatingMenuItem
