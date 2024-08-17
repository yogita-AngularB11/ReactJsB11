import React, { useState } from 'react'
import UseCallbackC from './UseCallbackC'

const UseCallbackP = () => {

    const[count, setCount] = useState(0)

    const incrementCount =()=>{
        // setCount(count+1)
        setCount(prevCount=>prevCount+1)
    }

  return (
    <>
      <h2>UseCallback Parent</h2>
    <p>Count : {count} </p> <button onClick={incrementCount} >Increment</button>

    <UseCallbackC number1={10} number2={20} count={count} />

    </>
  )
}

export default UseCallbackP
