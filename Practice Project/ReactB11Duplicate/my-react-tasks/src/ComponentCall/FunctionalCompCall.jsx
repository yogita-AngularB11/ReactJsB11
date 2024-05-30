import React from "react";
const FunctionalCompCall = (props) => {
    console.log(props);
    const { myName, companyName, personObj } = props;
    return (

        <>
            {/* <h3>Welcome to FunctionalCompCall {props.myName}</h3> */}
            <h3>Welcome to FunctionalCompCall {myName}</h3>
            <h3>Welcome to FunctionalCompCall {companyName}</h3>
            <h3>Welcome to FunctionalCompCall {JSON.stringify(personObj)}</h3>
        </>
    )
}
export default FunctionalCompCall;