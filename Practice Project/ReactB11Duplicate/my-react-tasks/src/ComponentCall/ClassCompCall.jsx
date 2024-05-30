import React from "react";
import FunctionalCompCall from "./FunctionalCompCall";

class ClassCompCall extends React.Component {
    render() {
        console.log(this.props);
        const { myName, companyName, personObj } = this.props;

        return (
            <>
                {/* <h2>Welcome to ClassCompCall {this.props.myName}</h2>  */}
                {/* <h2>Welcome to ClassCompCall {myName}</h2>
                <h2>Welcome to ClassCompCall {companyName}</h2>
                <h2>Person Details:{JSON.stringify(personObj)}</h2> */}
                <FunctionalCompCall myName={myName} companyName={companyName} personObj={personObj} />
            </>
        )
    }
}
export default ClassCompCall;

