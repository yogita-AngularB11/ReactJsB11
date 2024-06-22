import React, { useState } from 'react'
import UseMemoComp from './UseMemoComp'

const UseMemoParent = () => {

    const[count, setCount] = useState(0)

    const incrementCount=()=>{
        setCount(count+1);
        console.log('Inside Increment Count')
    }

  return (
    <>
        <h3>UseMemo Parent</h3>
        
        <p> Count : {count} </p> <button onClick={incrementCount}>Incement Count</button>

        <UseMemoComp number1={10} number2={count}/>
    </>
  )
}

export default UseMemoParent
