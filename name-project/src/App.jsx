import React, {useState} from 'react';
import './App.css';
import NewUser from './components/Users/NewUser/NewUser'
import UserList from './components/Users/UserList/UserList';

const array = []
function App() {
  const [users, setUsers] = useState(array);

  const addDataHandler = (data)=>{
    setUsers((prevExpenses) =>{
      return [data, ...prevExpenses]
    })
  }
  

  return (
    <>
      <NewUser onAddData = {addDataHandler}/>
      <UserList users = {users}/>
      
    </>
  )
}

export default App
