import React, { useState } from 'react'

const AdvanceFormHand = () => {

    const[form, setForm] = useState({
        userName :'',
        password : '',
        email : ''

})

const handleChange = (e) =>{
    const{name, value} = e.target;
    console.log(`Name : ${name} Value : ${value}`)

    setForm((preState)=>({
        ...preState, [name] : value
    }))
}

const handleSubmit=(e)=>{
    //Save data to DB or sent to some third party api
    console.log('Inside submit button')
  
   e.preventDefault()
}

  return (
    <>
      
<form onSubmit={handleSubmit}>

    <div>
        User Name : <input type='text' name='userName' value={form.userName}  onChange={handleChange} />
    </div> <br/>

    <div>
        Password : <input type='password' name='password' value={form.password} onChange={handleChange} />
    </div>

    <div>
        Email : <input type='email' name='email' value={form.email} onChange={handleChange} />
    </div>
<button type='submit'>SUBMIT</button>
</form>

    </>
  )
}

export default AdvanceFormHand
