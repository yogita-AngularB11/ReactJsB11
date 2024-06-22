// const memorizedFunction = useCallback(()=>{

// }, [])

import React, { useCallback, useState } from 'react'

const MyUseCallbackHook = () => {

    const[count, setCount] = useState(0);
    const[sum, setSum] = useState(0)

    const handleClick = useCallback(()=>{
            setCount(count+1)
            console.log(count)
    },[sum]);

  return (
    <>
        <h4>Count : {count}</h4>  

        <button onClick={handleClick} >Increment</button>
    </>
  )
}

export default MyUseCallbackHook;
