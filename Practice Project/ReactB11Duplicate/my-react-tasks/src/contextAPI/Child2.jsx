import React from 'react'
import Child3 from './Child3'

const Child2 = (props) => {
  return (
    <>
        <Child3 message={props.message} />
    </>
  )
}

export default Child2
