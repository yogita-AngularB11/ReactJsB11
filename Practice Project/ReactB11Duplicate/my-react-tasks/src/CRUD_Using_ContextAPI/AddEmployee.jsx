import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import { EmployeeContext } from './EmployeeProvider';

const AddEmployee = () => {
  // Take data in state 
  const [validated, setValidated] = useState(false);
  const [empId, setEmpId] = useState('');
  const [empName, setEmpName] = useState('');
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');

  //access context
  const{addEmployee}=useContext(EmployeeContext)




  const handleSubmit = (event) => {
    console.log("Inside Handle Submit");
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    /*create object : all in one data */
    const employee = { id: Date.now(), empId, empName, position, company }
    //call the function from employeeProvider here
    addEmployee(employee);

    console.log(employee);

    setValidated(true);
  };


  return (
    <>
      <h4 style={{ textAlign: 'center' }}>Add Employee</h4>


      <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ margin: "60px" }}>
        <Row className="mb-4">
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>Employee ID</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Employee ID"
              value={empId}
              onChange={(e) => setEmpId(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Label>Employee Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Employee Name"
              value={empName}
              onChange={(e) => setEmpName(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustomUsername">
            <Form.Label>Position</Form.Label>

            <Form.Control
              type="text"
              placeholder="Enter Position"
              aria-describedby="inputGroupPrepend"
              required
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose position.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>Company</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <div style={{ textAlign: 'center' }}>
          <Button type="submit">Add Employee</Button>
        </div>
      </Form>

    </>
  )
}

export default AddEmployee
