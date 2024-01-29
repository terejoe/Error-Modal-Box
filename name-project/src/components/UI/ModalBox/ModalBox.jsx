import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button/Button';
import styles from "./ModalBox.module.css";

export default function ModalBox(props) {
  const Backdrop = (props) => {
    return <div className={styles.darkBG} onClick={props.onConfirm}/>
  }

  const ModalOverlay= (props) => {
    return (
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
    )
  }


  return (
    <>
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>, document.getElementById('overlay-root'))}

    </>
  )
}
