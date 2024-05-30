import React from "react";
const ChildComponentB = (props) => {
    return (
        <>
            <h3>Welcome to ChildComponentB {props.myName}</h3>
            <h3>Welcome to ChildComponentB {props.companyName}</h3>
            <h3>Welcome to ChildComponentB {JSON.stringify(props.personObj)}</h3>
        </>
    )
    //Using Object Destructuring
    // const { myName, companyName, personObj } = props;
    // return (
    //     <>
    //         <h3>Welcome to ChildComponentB {myName}</h3>
    //         <h3>Welcome to ChildComponentB {companyName}</h3>
    //         <h3>Welcome to ChildComponentB {JSON.stringify(personObj)}</h3>
    //     </>
    // )
}
export default ChildComponentB;