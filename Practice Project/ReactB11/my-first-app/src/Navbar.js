import React from "react";
import logo from "./logo.png";
function Navbar() {
    return (
        <nav class="navbar navbar-expand-sm ">
        <div class="container-fluid">
            <a class="navbar-brand" href=" ">
                <img src={logo} alt="Logo" class="w-25" />
            </a>
            <div>
                <a class="navbar-brand me-md-5" href=" ">HOME</a>
                <a class="navbar-brand me-md-4" href=" ">COURSES</a>
                <a class="navbar-brand me-md-5" href=" ">PLACEMENTS</a>
                <a class="navbar-brand me-md-5" href=" ">EVENTS</a>
                <a class="navbar-brand me-md-5" href=" ">ABOUT US</a>
                <a class="navbar-brand me-md-5" href=" ">CONTACT US</a>
            </div>
        </div>
    </nav>  
    );
  }
  
  export default Navbar;