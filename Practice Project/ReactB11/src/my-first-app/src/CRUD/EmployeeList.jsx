import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { EmployeeContext } from './EmployeeProvider';

const EmployeeList = () => {
  const { employees, deleteEmployee } = useContext(EmployeeContext);

  return (
    <div style={{ margin: '60px' }}>
      <h4 style={{ textAlign: 'center' }}>Employee List</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Company</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.empId}</td>
              <td>{employee.empName}</td>
              <td>{employee.position}</td>
              <td>{employee.company}</td>
              <td>
                <Link to={`/editEmployee/${employee.id}`}>
                  <Button variant="warning" className="me-2">Edit</Button>
                </Link>
                <Button
                  variant="danger"
                  onClick={() => deleteEmployee(employee.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link to="/addEmployee">
          <Button variant="primary">Add Employee</Button>
        </Link>
      </div>
    </div>
  );
};

export default EmployeeList;
