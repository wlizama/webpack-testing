import React from 'react'

function Color(props) {
  let myStyle = { color: props.hex }
  return (
    <li>
      {props.name} <span className="color-value" style={myStyle}>{props.hex}</span>
    </li>
  )
}

export default Color