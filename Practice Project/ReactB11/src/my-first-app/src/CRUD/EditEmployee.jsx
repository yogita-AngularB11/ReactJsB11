import React, { useContext, useState, useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { EmployeeContext } from './EmployeeProvider';

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { employees, updateEmployee } = useContext(EmployeeContext);

  const [validated, setValidated] = useState(false);
  const [empId, setEmpId] = useState('');
  const [empName, setEmpName] = useState('');
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');

  useEffect(() => {
    const employee = employees.find((emp) => emp.id === parseInt(id));
    if (employee) {
      setEmpId(employee.empId);
      setEmpName(employee.empName);
      setPosition(employee.position);
      setCompany(employee.company);
    }
  }, [id, employees]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
// to edit record
    const updatedEmployee = { id: parseInt(id), empId, empName, position, company };
    updateEmployee(updatedEmployee);
    navigate('/');
  };

  return (
    <>
      <h4 style={{ textAlign: 'center' }}>Edit Employee</h4>
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
          <Button type="submit">Update Employee</Button>
        </div>
      </Form>
    </>
  );
};

export default EditEmployee;
