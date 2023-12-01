import React from 'react'
import Card from '../../UI/Card/Card'
import UserItem from '../UserItem/UserItem'

export default function UserList(props) {
  return (
    <Card>
      <ul>
        {props.users.map((user) => (
          // <div>{user.name}</div>
          <UserItem name={user.name} age={user.age}/>
        ))}
      </ul>
    </Card>
   
  )
}
