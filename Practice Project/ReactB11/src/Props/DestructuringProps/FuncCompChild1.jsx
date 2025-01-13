import React from 'react'

const FuncCompChild1 = (props) => {
   const {myName, myCompany, myCity}=props;
  return (
  
    <>
    <h3>FuncCompChild1</h3>
      <p>My name is {myName} and Company {myCompany} in City {myCity}</p>
    </>
  )
}

export default FuncCompChild1
