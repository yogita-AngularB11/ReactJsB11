import React, { useContext, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { EmployeeContext } from './EmployeeProvider';


const AddEmployee = () => {
  // State to manage form validation and input fields
  const [validated, setValidated] = useState(false);
  const [empId, setEmpId] = useState('');
  const [empName, setEmpName] = useState('');
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');

  // Access addEmployee function from context
  const { addEmployee } = useContext(EmployeeContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    // Create an employee object
    const employee = { id: Date.now(), empId, empName, position, company };

    // Call the addEmployee function from context
    addEmployee(employee);

    // Reset the form fields
    setEmpId('');
    setEmpName('');
    setPosition('');
    setCompany('');

    // Set validation to false to reset feedback messages
    setValidated(false);

    console.log("Employee added:", employee);
  };

  return (
    <>
      <h4 style={{ textAlign: 'center' }}>Add Employee</h4>
      <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ margin: '60px' }}>
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

          <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>Position</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a position.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom04">
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
  );
};

export default AddEmployee;
