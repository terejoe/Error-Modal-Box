import React from 'react';
import styles from './Card.module.css'

export default function Card(props) {
  // const classes = 'card' + props.className;
  return (
    <div className={styles.card}>{props.children}</div>
  )
}

