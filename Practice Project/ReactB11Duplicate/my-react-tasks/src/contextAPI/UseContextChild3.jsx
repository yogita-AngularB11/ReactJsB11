
import React, { useContext } from 'react'
import MyContext from './MyContext'

const UseContextChild3 = () => {

    const {welcomeMsg} = useContext(MyContext)

  return (
    <>
      <h4>In UseContextChild3</h4>
      <p>{welcomeMsg}</p>
    </>
  )
}

export default UseContextChild3
