import React from 'react';
import AddUser from '../AddUser/AddUser';

export default function NewUser(props) {
  const addNameHandler = (enteredDataObject) =>{
    const DataObject = {
      ...enteredDataObject
    }
    props.onAddData(DataObject)
  }
  return (
    <div>
      <AddUser onAddName={addNameHandler}/>
    </div>
  )
}