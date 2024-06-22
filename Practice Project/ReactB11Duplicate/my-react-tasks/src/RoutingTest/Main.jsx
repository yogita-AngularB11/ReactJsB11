import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Services from './Services';
import ContactUs from './ContactUs';

const Main = () => {
  return (
    <>
      <h1>CodeMind Main Page</h1>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/home">Home</a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/services">Services</a>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/contactus">Contact Us</a>
              </li>

            </ul>

          </div>
        </div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route exact path='/home' element={<Home />}></Route>
          <Route exact path='/services' element={<Services />}></Route>
          <Route exact path='/contactus' element={<ContactUs />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Main
