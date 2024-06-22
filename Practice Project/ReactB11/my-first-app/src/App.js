import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeProvider from './CRUD/EmployeeProvider';
import EmployeeList from './CRUD/EmployeeList';
import AddEmployee from './CRUD/AddEmployee';
import EditEmployee from './CRUD/EditEmployee';

const App = () => {
  return (
    <EmployeeProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<EmployeeList/>} />
          <Route exact path="/addEmployee" element={<AddEmployee/>} />
          <Route exact path="/editEmployee/:id" element={<EditEmployee/>} />
        </Routes>
      </BrowserRouter>
    </EmployeeProvider>
  );
};

export default App;
