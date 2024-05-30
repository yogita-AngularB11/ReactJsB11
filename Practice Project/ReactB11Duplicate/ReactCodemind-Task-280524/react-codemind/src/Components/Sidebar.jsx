import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import ReactHome from './ReactHome.jsx';

const Sidebar = () => {
  return (
    <div className="d-flex">
      <div className="sidebar bg-light border-right" style={sidebarStyle}>
        <div className="sidebar-heading">React Tutorial</div>
        <ul className="list-unstyled">
          <li className="nav-item my-3">
            <a className="nav-link" href="/home">React Home</a>
          </li>
          <li className="nav-item my-3">
            <a className="nav-link" href="/intro">React Intro</a>
          </li>
          <li className="nav-item my-3">
            <a className="nav-link" href="/start">React Get Started</a>
          </li>
          <li className="nav-item my-3">
            <a className="nav-link" href="/comp">React Component</a>
          </li>
          <li className="nav-item my-3">
            <a className="nav-link" href="/jsx">React JSX</a>
          </li>
          <li className="nav-item my-3">
            <a className="nav-link" href="/cls">React Class</a>
          </li>
          <li className="nav-item my-3">
            <a className="nav-link" href="/props">React Props</a>
          </li>
          <li className="nav-item my-3">
            <a className="nav-link" href="/">React Events</a>
          </li>
          <li className="nav-item my-3">
            <a className="nav-link" href="/">React Get Conditionals</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const sidebarStyle = {
  width: '250px',
  height: '100vh',
  position: 'fixed',
  top: '150px', // Adjust based on Navbar height
  left: 20,
  overflowY: 'auto',
  textAlign: 'left'
};

export default Sidebar;
