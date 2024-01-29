import React, { useState, useRef} from 'react';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import ModalBox from '../../UI/ModalBox/ModalBox';
import styles from "./AddUser.module.css";



export default function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [modal, setModal] = useState();


  
  const submitHandler = (event) =>{
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
      setModal({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).'
      });
      return;
    }

    if(+enteredAge < 1){
      setModal({
        title: 'Invalid Input',
        message: 'Please enter a valid age (> 0).'
      });
      return;
    }


    const DataObject = {
      name: enteredName,
      age: enteredAge
    };
   
    props.onAddData(enteredName, enteredAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  }

  const modalHandler = () => {
    setModal(null);
  }

  return (
    <div>
      {modal && <ModalBox title={modal.title} message={modal.message} onConfirm={modalHandler}/>}
      <Card> 
        <form onSubmit={submitHandler}>
          <div className={styles.user}>
            <label htmlFor='username'>Username</label>
            <input type="text" ref={nameInputRef}/>
          </div>

          <div className={styles.user}>
            <label htmlFor='age'>Age (Years)</label>
            <input type="number" ref={ageInputRef}/>
          </div>
          <Button onClick={submitHandler}>Add User</Button>

        </form>
      </Card>
    </div>
    
    
  )
}
