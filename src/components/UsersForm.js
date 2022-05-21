import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/UsersForm.css'

const UsersForm = ({getUsers,selectUser,deselectUser}) => {
    const[name,setName]=useState("");
    const[lastName,setLastName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[birthday,setBirthday]=useState("");

    const submit = e =>{
        e.preventDefault();
        const user = {
            first_name:name,
            last_name:lastName,
            email,
            birthday,
            password
        }
        if(selectUser !== null){
            axios.put(`https://users-crud1.herokuapp.com/users/${selectUser.id}/`,user)
            .then(()=>getUsers())
            .catch(error=>console.log(error.response))
                
        }else{
            axios.post('https://users-crud1.herokuapp.com/users/',user)
            .then(()=>getUsers())
            .catch(error=>console.log(error.response))  
                
        }

        clearInput()
    }

    useEffect(()=>{
        if(selectUser!==null){
            setName(selectUser.first_name)
            setLastName(selectUser.last_name)
            setEmail(selectUser.email)
            setPassword(selectUser.password)
            setBirthday(selectUser.birthday)
        }else{
            clearInput()
        }


    },[selectUser])

    const clearInput = ()=>{
        setName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setBirthday("")
    }
    
    

    
    return (
        <div className='form-container'>
            <form className='form-base' onSubmit={submit}>
                <h1>User Form</h1>
                <div className='form-subPart'>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id='name' 
                        placeholder='Name' 
                        onChange={e => setName(e.target.value)} 
                        value={name}
                    />
                </div>

                <div className='form-subPart'>
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        type="text" 
                        id='lastName'
                        placeholder='Last Name'
                        onChange={e=>setLastName(e.target.value)}
                        value={lastName}
                    />
                </div>

                <div className='form-subPart'>
                    <label htmlFor="email">Email</label>
                    <input 
                        type='email' 
                        id='email'
                        placeholder='Email'
                        onChange={e=>setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className='form-subPart'>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id='password'
                        placeholder='Password'
                        onChange={e=>setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                <div className='form-subPart'>
                    <label htmlFor="birthday">Birthday</label>
                    <input 
                        type='date' 
                        id='birthday'
                        onChange={e=>setBirthday(e.target.value)}
                        value={birthday}
                    />
                </div>

                <div className='buttons-container'>
                    <button className='button-submit'>Submit</button>
                    <button className='button-cancel' type='button' onClick={deselectUser}>Cancel</button>
                </div>

            </form>
        </div>
    );
};

export default UsersForm;