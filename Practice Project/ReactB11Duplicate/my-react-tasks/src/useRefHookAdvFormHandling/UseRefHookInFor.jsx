import React,{ useRef, useState,useEffect }from 'react'

const UseRefHookInForm = () => {
    const[form, setForm] = useState({
        userName :'',
        password : '',
        email : ''

})

    const nameRef=useRef();

     useEffect(()=>{
        nameRef.current.focus();
     },[])

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
  alert(`userName:${form.userName} Password:${form.password} Email:${form.email}`);
   e.preventDefault()
}

  return (
    <>
      
<form onSubmit={handleSubmit}>

    <div>
        User Name : <input type='text' 
        name='userName' 
        value={form.userName}  
        onChange={handleChange}
        ref={nameRef}
        />
    </div> <br/>

    <div>
        Password : <input type='password' 
        name='password' 
        value={form.password} 
        onChange={handleChange} />
    </div>

    <div>
        Email : <input type='email' name='email' value={form.email} onChange={handleChange} />
    </div>
<button type='submit'>SUBMIT</button>
</form>

    </>
  )
}

export default UseRefHookInForm
