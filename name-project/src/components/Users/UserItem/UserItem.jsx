import React from 'react'

export default function UserItem(props) {
  return (
    <li>{props.name} ({props.age} years old)</li>
  )
}
