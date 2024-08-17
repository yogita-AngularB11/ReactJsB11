// const memorizedFunction = useCallback(()=>{

// }, [])

import React, { useCallback, useState } from 'react'

const MyUseCallbackHook = () => {

  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0)

  // handleClick is created once and never recreated

  // const handleClick = useCallback(() => {
  //   setCount(prevCount => prevCount + 1);
  //   console.log(count)
  // });

  // const handleClick = useCallback(() => {
  //   setCount(prevCount => prevCount + 1);
  // console.log(count)
  // }, []);

  const handleClick = useCallback(()=>{

          console.log(count)
          setCount(count+1)
  },[sum]);

  console.log('handleClick recreated');
  return (
    <>
      <h4>Count : {count}</h4>

      <button onClick={handleClick} >Increment</button>
    </>
  )
}

export default MyUseCallbackHook;
