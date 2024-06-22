import React from 'react'

const ConditionalRendering3 = () => {
    const isLoggedIn = true;
  return (
    isLoggedIn ? <h1>Welcome to Conditional Rendering</h1>:<h1>Welcome as Guest</h1>
  )
}

export default ConditionalRendering3
