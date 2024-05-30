import React from "react";
import ClassCompCall from "./ClassCompCall";
// import FunctionalCompCall from "./FunctionalCompCall";

// This is parent Component 
const WelcomeCompCall = () => {
    const name = "Yogita";
    const person = {
        Name: "Kishor",
        Age: 23,
        City: "Pune"
    };
    return (
        <>
            <h1>Welcome to WelcomeCompCall</h1>
            <ClassCompCall myName={name} companyName="TCS" personObj={person} />   {/* this is child Component  */}
            {/* <FunctionalCompCall myName={name} companyName="Tech-Mahindra" personObj={person} />   this is child Component  */}
        </>
    )
}
export default WelcomeCompCall;