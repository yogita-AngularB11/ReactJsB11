import React, { createContext, useState } from 'react';

export const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([
    { id: 1, empId: 'E001', empName: 'John Doe', position: 'Developer', company: 'Company A' },
    { id: 2, empId: 'E002', empName: 'Jane Smith', position: 'Designer', company: 'Company B' }
  ]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees(employees.map(emp => emp.id === updatedEmployee.id ? updatedEmployee : emp));
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee, updateEmployee, deleteEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeProvider;
