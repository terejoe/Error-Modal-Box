import React from 'react';
import styles from "./Button.module.css";

export default function Button(props) {
  return (
   <button type={props.type} className={ `${styles.button} ${props.className}`} onClick={props.onClick}>
      {props.children}
   </button>
  )
}
