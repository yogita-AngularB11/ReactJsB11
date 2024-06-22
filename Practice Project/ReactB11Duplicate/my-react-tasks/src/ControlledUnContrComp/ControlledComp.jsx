import React, { useState } from 'react'

const ControlledComp = () => {
    
    const[userName, setUserName] = useState('')
    const[password, setPassword] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Username : ${userName} Password : ${password}`)
    }

  return (
    <>
        <h4>Login Form</h4>

        <form onSubmit={handleSubmit} >

            <div className='row'>

                <div className='five Columns'>
                    <label>User Name</label>
                    <input type='text' placeholder='Entre User Name' value={userName} onChange={(e)=>setUserName(e.target.value)} />    
                </div>

            </div>

            <div className='row'>

                <div className='five Columns' style={{marginTop:'20px'}}>
                    <label>Password</label>
                    <input type='password' placeholder='Entre Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>    
                </div>

            </div>
        <button type='submit'>Login</button>
        </form>

    </>
  )
}

export default ControlledComp
