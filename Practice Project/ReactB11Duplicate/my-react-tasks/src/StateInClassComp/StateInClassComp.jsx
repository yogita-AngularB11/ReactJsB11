import React, { Component } from "react";

class StateInClassComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "Guest",
            number: 0,
            flag: "true",
            arr: [1, 2, 3],
            person: {
                name: "Yogita",
                age: 33,
                city: "Pune"
            }
        }
        this.changeUserName = this.changeUserName.bind(this);
    }

    changeUserName() {
        console.log("Inside New Change Username function");
        this.setState(
            { userName: "Admin" },
            () => {
                console.log(this.state.userName);
            })

    }

    render() {
        return (
            <>
                <h1>State In Class Component</h1>
                <h3>Current User: {this.state.userName}</h3>
                <button onClick={this.changeUserName}>Login as Admin</button>

                <p>Number is:: {this.state.number}</p>
                <p>Boolean is:: {this.state.flag} </p>
                <p>Array is:: {this.state.arr.join(",")}</p>
                <p>Object is :: {JSON.stringify(this.state.person)}</p>
            </>
        );
    }
}

export default StateInClassComp;
