import React, { useState } from 'react'
import myContext from './MyContext';
import UseContextChild1 from './UseContextChild1';

const ParentUseContext = () => {

  const[welcomeMsg, setWelcomeMsg] = useState('Welcome to CodeMind Technology!!!')

  return (
    <>
        <h1> Parent of Context API</h1>  

        <myContext.Provider value={welcomeMsg}>
            <UseContextChild1/>
        </myContext.Provider>

    </>
  )
}

export default ParentUseContext
