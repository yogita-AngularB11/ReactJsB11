import React from 'react'

const UnControlledForm = () => {
    
    const userNameRef= React.createRef();
    const passwordRef = React.createRef();

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Username : ${userNameRef.current.value} Password : ${passwordRef.current.value}`)
    }

  return (
    <>
      <h4>Uncontrolled Login Form</h4>

    <form onSubmit={handleSubmit} >

    <div className='row'>

        <div className='five Columns'>
            <label>User Name</label>
            <input type='text' placeholder='Entre User Name' ref={userNameRef} />    
        </div>

    </div>

    <div className='row'>

        <div className='five Columns' style={{marginTop:'20px'}}>
            <label>Password</label>
            <input type='password' placeholder='Entre Password' ref={passwordRef}/>    
        </div>

    </div>
    <button type='submit'>Login</button>
</form>
    </>
  )
}

export default UnControlledForm
