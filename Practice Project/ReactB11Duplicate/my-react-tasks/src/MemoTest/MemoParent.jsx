import React, { useState } from 'react'
import MemoComp from './MemoComp'

const MemoParent = () => {

    const[count, setCount] = useState(0)

    const incrementCount=()=>{
        setCount(count+1);
        console.log('Inside Increment Count')
    }

  return (
    <>
        <h2>Memo Parent</h2>
        <p> Count : {count} </p> <button onClick={incrementCount}>Incement Count</button>

        <MemoComp name={'Umesh'} count={count}/>
    </>
  )
}

export default MemoParent
