import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import styles from "./AddUser.module.css";


export default function AddUser(props) {
  const [enteredName, setEnteredName] = useState("")
  const [enteredAge, setEnteredAge] = useState("")
  

  const handleNameChange = (event) =>{
    setEnteredName(event.target.value)
  }
  // console.log(enteredName)

  const handleAgeChange = (event) =>{
    setEnteredAge(event.target.value)
  }
  // console.log(enteredAge)

  const submitHandler = (event) =>{
    event.preventDefault();

    const DataObject = {
      name: enteredName,
      age: enteredAge
    };
    console.log(DataObject)
    props.onAddName(DataObject);
    setEnteredName("");
    setEnteredAge("");
    
  }

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className={styles.user}>
          <label>Username</label>
          <input type="text" value={enteredName} onChange={handleNameChange} />
        </div>

        <div className={styles.user}>
          <label>Age (Years)</label>
          <input type="number" value={enteredAge} onChange={handleAgeChange}/>
        </div>

        <Button>Add User</Button>
      </form>
    </Card>
    
  )
}
