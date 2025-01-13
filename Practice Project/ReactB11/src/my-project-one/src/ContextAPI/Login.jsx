import React, { useContext, useState } from 'react'
import userContext from './UserContext'


const Login = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const {user,setUser}=useContext(userContext)
    const handleSubmit=(e)=>{
        e.preventDefault();
        // setUser({email,password})
        const newUser = { email, password };
        setUser([...user, newUser]);

    }
    return (
        <>
        <h1 style={{textAlign:'center'}}>Login Form</h1>
            <form className='m-4 w-25'style={{alignItems:'center'}}>
                <div class="form-group m-2">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                    placeholder="Enter email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div class="form-group m-2">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                </div>
               
                <button type="submit" class="btn btn-primary m-2"
                onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

export default Login
