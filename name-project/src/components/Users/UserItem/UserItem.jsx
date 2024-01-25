import React from 'react';
import Card from '../../UI/Card/Card';
import styles from "./UserItem.module.css";

export default function UserItem(props) {
  return (
    <Card>
      <li>{props.name} ({props.age} years old)</li>
    </Card>
   
  )
}
