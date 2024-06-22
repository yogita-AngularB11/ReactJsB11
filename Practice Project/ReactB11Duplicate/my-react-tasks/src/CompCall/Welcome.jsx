import React from "react";
import ClassCompCall from "./ClassCompCall";
import FuncCompCall from "./FuncCompCall";

const WelcomeCompCall = () =>{
        const name = 'Umesh';

        let person = {
            name : "Kishor",
            age:'24',
            address : 'Pune'
        };

    return(
        <>
            <h1> Welcome to WelcomeCompCall</h1>

            <ClassCompCall myName = {name} companyName="Infosys" personObj={person} />

            <FuncCompCall myName = {name}/>
        </>
    )
}

export default WelcomeCompCall;