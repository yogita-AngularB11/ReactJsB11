import React from 'react'
import Child2 from './Child2'

const Child1 = (props) => {
  return (
    <>  
        <h1>Child component1</h1>
        {/* <p> {props.message} </p> */}
        <Child2 message = {props.message} />
    </>
  )
}

export default Child1
