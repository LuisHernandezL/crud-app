import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import UsersForm from './components/UsersForm';

function App() {

  const [users,setUsers]=useState([]);
  const[selectUser,setSelectUser]=useState(null);

  useEffect(()=>{
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res=>setUsers(res.data))
  },[])
  
  const getUsers = ()=>{
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res=>setUsers(res.data))
      
  }

  const editUser = user =>{
    setSelectUser(user)

  }

  const deselectUser = ()=>{
    setSelectUser(null)
  }

  const deleteUser = user =>{
    axios.delete(`https://users-crud1.herokuapp.com/users/${user.id}/`)
    .then(()=>getUsers())
    
  }
  

  
  
  return (
    <div className="App">
      
      <UsersForm
        getUsers={getUsers}
        selectUser={selectUser}
        deselectUser={deselectUser}
      />

      <UserList 
        users={users}
        editUser={editUser}
        deleteUser={deleteUser}
      />

      
    </div>
  );
}

export default App;
