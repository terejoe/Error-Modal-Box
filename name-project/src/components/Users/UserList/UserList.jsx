import React from 'react';
import UserItem from '../UserItem/UserItem';
import styles from './UserList.module.css'

export default function UserList(props) {
  return (

    <ul>
      {props.users.map((user) => (
        // <div>{user.name}</div>
        <UserItem key={user.id} name={user.name} age={user.age}/>
      ))}
    </ul>
      
   
  )
}
