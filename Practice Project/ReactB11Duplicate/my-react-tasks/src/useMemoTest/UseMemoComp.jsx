
import React, { useMemo } from 'react'

const UseMemoComp = ({ number1, number2 }) => {

  const result = useMemo(() => {
    console.log('Inside sum function')
    let sum;
    sum = number1 + number2;
    return sum

  }, [number1, number2])
  // const result = ()=>{
  //      console.log('Inside sum function')
  //       let sum;
  //       sum = number1+number2;
  //       return sum
  //   }

  return (
    <>
      <h3>Use MemoComp</h3>
      {console.log('Inside UseMemoComp')}
      <h4>Addition is : {result} </h4>
    </>
  )
}

export default UseMemoComp
