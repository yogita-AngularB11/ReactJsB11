import React, { useState } from 'react'
import UseCallbackC from './UseCallbackC'

const UseCallbackP = () => {

    const[count, setCount] = useState(0)

    const incementCount =()=>{
        setCount(count+1)
    }

  return (
    <>
      <h2>UseCallback Parent</h2>
    <p>Count : {count} </p> <button onClick={incementCount} >Increment</button>

    <UseCallbackC number1={10} number2={count} count={count} />

    </>
  )
}

export default UseCallbackP
