import React, { useState } from 'react'

const StateInFunctComp = () => {
  const [userName, setUserName] = useState("Guest");
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState({ Name: "Pawan", Age: 24 })

  const changeUserName = () => {
    setUserName("Admin");
  }
  const changeCount = () => {
    setCount(count + 1)
  }
  // The spread operator (...prevPerson) is used to copy all properties from prevPerson into the new object. This ensures that all existing properties are retained in the new state object.
  
  // After spreading prevPerson, the Name property is explicitly set to "Priyanka". This overwrites the Name property in the new state object with the new value "Priyanka".
  const changePerson = () => {
    setPerson(prePerson => (
      { ...prePerson, Name: "Priyanka" }
    ))
  }
  return (
    <div>
      <h1>State In Functional Component</h1>
      <h3>Current User: {userName}</h3>
      <button onClick={changeUserName}>Login as Admin</button>
      <h3>Current Count:{count}</h3>
      <button onClick={changeCount}>Count</button>
      <h3>Person : {JSON.stringify(person)}</h3>
      <button onClick={changePerson}>Change Person</button>

    </div>
  )
}

export default StateInFunctComp
