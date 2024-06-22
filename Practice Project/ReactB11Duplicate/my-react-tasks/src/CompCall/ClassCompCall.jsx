import React from "react";


class ClassCompCall extends React.Component{

    render(){
        console.log(this.props);
        
        const {myName, companyName, personObj} = this.props; //es6 feature of Destructuring
        console.log(personObj);

        return(
            <>
                <h3>Welcome to ClassCompCall {myName}</h3>
                <h3>Welcome to ClassCompCall Company Name {companyName}</h3>
                <p>Prson Details { JSON.stringify(personObj) }</p>
            </>
        )

    }
}

export default ClassCompCall;