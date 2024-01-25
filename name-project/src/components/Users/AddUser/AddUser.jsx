import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import ModalBox from '../../UI/ModalBox/ModalBox';
import styles from "./AddUser.module.css";



export default function AddUser(props) {
  const [enteredName, setEnteredName] = useState("")
  const [enteredAge, setEnteredAge] = useState("")
  const [modal, setModal] = useState();


  const handleNameChange = (event) =>{
    setEnteredName(event.target.value) 
  };
  console.log(enteredName)
  
  const handleAgeChange = (event) =>{
    setEnteredAge(event.target.value) 
  };
  console.log(enteredAge)
 

  const submitHandler = (event) =>{
    event.preventDefault();
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
    console.log(DataObject)
    props.onAddData(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge(""); 
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
            <input type="text" value={enteredName} onChange={handleNameChange} />
          </div>

          <div className={styles.user}>
            <label htmlFor='age'>Age (Years)</label>
            <input type="number" value={enteredAge} onChange={handleAgeChange}/>
          </div>

          {/* <Button onClick={() => setIsOpen(true)}>Add User</Button> */}
          <Button onClick={submitHandler}>Add User</Button>
          {/* {isOpen && <ModalBox setIsOpen={setIsOpen}/>} */}
        </form>
      </Card>
    </div>
    
    
  )
}
