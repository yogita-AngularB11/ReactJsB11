
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const Child = (props) => {
    const [newName, setNewName] = useState('Yogita')
    
    const sendName = () => {
        console.log("Calling to parent component function for Name");
        props.myName(newName);
    }
   
    return (
        <>
            <h2>Child Callback</h2>
            <Button variant="outline-primary" onClick={sendName}>Send Name Data To Parent</Button>
          
        </>
    )
}
export default Child
