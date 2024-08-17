import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { EmployeeContext } from './EmployeeStore';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {

    const [validated, setValidated] = useState(false);

    const[empId, setEmpId] = useState('');
    const[empName, setEmpName] = useState('');
    const[position, setPosition] = useState('');    
    const[company, setCompany] = useState('');

    const{addEmployee} = useContext(EmployeeContext);
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
          event.stopPropagation();
        }
        
        const employee = {id:Date.now(), empId, empName, position, company}
        
        addEmployee(employee)
        navigate('/')
        // console.log(employee);

        event.preventDefault();
        setValidated(true);
      };

  return (
    <>
        <h4>Add Employee</h4>

      <Form noValidate validated={validated} onSubmit={handleSubmit} style={{margin:"60px"}} >
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom01">
          <Form.Label>Employee ID</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Employee ID"
            value={empId} onChange={(e)=>setEmpId(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustom02">
          <Form.Label>Employee Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Employee Name"
           value={empName} onChange={(e)=>setEmpName(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustom02">
          <Form.Label>Position</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Employee Position"
            value={position} onChange={(e)=>setPosition(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustom02">
          <Form.Label>Company</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Employee Company"
           value={company} onChange={(e)=>setCompany(e.target.value)}
          />
        </Form.Group>

      </Row>
      <Button type="submit">Add Employee</Button>
    </Form>

    </>
  )
}

export default AddEmployee
