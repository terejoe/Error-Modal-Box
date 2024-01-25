import React from 'react';
import Button from '../Button/Button';
import styles from "./ModalBox.module.css";

export default function ModalBox(props) {

  return (
    <>
      <div className={styles.darkBG} onClick={props.onConfirm}/>
      <div className={styles.centered}>
        <div className={styles.modal}>

          <div className={styles.modalHeader}>
            <h3>{props.title}</h3>
          </div>

          <div className={styles.modalContent}>
            <h5 className={styles.heading}>{props.message}</h5>
          </div>

          <Button className={styles.deleteBtn} onClick={props.onConfirm}>Close</Button>
          
        </div>
      </div>
    
    </>
   
  )
}
