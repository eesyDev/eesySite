import React from 'react'

function Button(props) {
  return (
    <button className={props.classes}>{props.content}</button>
  )
}

export default Button