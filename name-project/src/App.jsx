import React, {useState} from 'react';
import './App.css';
import AddUser from './components/Users/AddUser/AddUser';
import UserList from './components/Users/UserList/UserList';

const array = []
function App() {
  const [usersList, setUsersList] = useState(array);

  const addDataHandler = (enteredName,enteredAge)=>{
    setUsersList((prevUsersList) =>{
      return [{name:enteredName, age: enteredAge,  id: Math.random().toString()}, ...prevUsersList]
    })
  }

  
  return (
    <>
      <AddUser onAddData = {addDataHandler}/>
      <UserList users = {usersList}/>
  
    </>
  )
}

export default App
