import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import './crudStyle.css';
import { useNavigate } from 'react-router-dom';
import { EmployeeContext } from './EmployeeStore';
import Table from 'react-bootstrap/Table';

const EmployeeList = () => {
    
    const navigate = useNavigate()
   const {employee}= useContext(EmployeeContext)
    
  return (
    <>
        <h4>Employee List</h4>

        <div className='addEmployeeBtn'>
            <Button variant="primary" onClick={()=>navigate('/addEmployee')} >Add Employee</Button>
        </div>

        <div>

        <Table striped bordered hover>
      <thead>
        <tr>
          <th>SR NO</th>
          <th>EMP ID</th>
          <th>EMP NAME</th>
          <th>POSTION</th>
          <th>COMPANY</th>
          <th>Actions</th>
        </tr>
      </thead>

              <tbody>
                  <th></th>
                  {employee.map((emp,index)=>(
                      <tr key={emp.id}>
                          <td>{index+1}</td>
                          <td>{emp.empId}</td>
                          <td>{emp.empName}</td>
                          <td>{emp.position}</td>
                          <td>{emp.company}</td>

                          <Button variant="warning" onClick={()=>navigate(`/editEmployee/${emp.id}`)} >EDIT</Button>
                          <Button variant="danger">DELETE</Button>
                      </tr>
                  ))}
              </tbody>
          </Table>

        </div>
        
    </>
  )
}

export default EmployeeList
