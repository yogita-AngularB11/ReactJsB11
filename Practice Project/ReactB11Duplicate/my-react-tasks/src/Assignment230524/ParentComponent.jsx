import React from "react";
import ChildComponentA from "./ChildComponentA";

const ParentComponent = () => {
    const name = "Yogita";
    const person = {
        Name: "Kishor",
        Age: 23,
        City: "Pune"
    };
    return (
        <>
            <ChildComponentA myName={name} companyName="TCS" personObj={person} />  
        </>
    )
}
export default ParentComponent;