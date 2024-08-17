import React from 'react'
import Button from 'react-bootstrap/Button';
import './crudStyle.css';
import { useNavigate } from 'react-router-dom';


const EmployeeList = () => {
        const navigate = useNavigate()
      return (
    <>
        <h4>Employee List</h4>

        <div className='addEmployeeBtn'>
            <Button variant="primary" onClick={()=>navigate('/addEmployee')} >Add Employee</Button>
        </div>

        
    </>
  )
}

export default EmployeeList
