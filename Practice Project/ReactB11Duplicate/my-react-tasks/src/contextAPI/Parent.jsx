import React, { useState } from 'react'
import Child1 from './Child1';

const Parent = () => {

  const[welcomeMsg, setWelcomeMsg] = useState('Welcome to CodeMind Technology');

  return (
    <>
      <h> Parent component Prop Drilling</h>
      {/* <p> {welcomeMsg} </p>  */}
      <Child1 message = {welcomeMsg} />
    </>
  )
}

export default Parent
