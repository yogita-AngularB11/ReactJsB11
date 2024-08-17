
import React, { useState } from 'react'
import MyContext from './MyContext';
// import UseContextChild1 from './UseContextChild1';

const ParentUseContext = ({ children }) => {

  const [welcomeMsg, setWelcomeMsg] = useState('Welcome to CodeMind Technology!!!')

  return (
    <>
      <h1> Parent of Context API</h1>

      <MyContext.Provider value={welcomeMsg}>
        {/* <UseContextChild1/> */}
        {children}
      </MyContext.Provider>
    </>
  )
}

export default ParentUseContext
