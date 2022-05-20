import React from 'react';

const UserList = ({users,editUser,deleteUser}) => {

    

    return (
        <div>
            <h2>Users List</h2>
            
                {
                    users.map(user => (
                            <ul key={user.id} className='userList-container'>
                                <li>{user.first_name} {user.last_name}</li>
                                <li> <b>Email: </b>{user.email}</li>
                                <li>{user.birthday}</li>
                                <button onClick={()=>deleteUser(user)}>Delete</button>
                                <button onClick={()=> editUser(user) }>Edit</button>
                            </ul>
                    ))
                }
            
        </div>
    );
};

export default UserList;