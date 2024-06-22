import React, { Component } from "react";

class WithoutStateInClassComp extends Component {
    constructor(props) {
        super(props);
        this.user = "Guest";
        this.changeUser=this.changeUser.bind(this)
    }

    changeUser() {
        console.log("Inside change user function");
        this.user = "Admin";
        console.log(this.user);
        // this.forceUpdate(); // Force update to re-render the component
    }

    render() {
        return (
            <>
                <h1>State In Class Component</h1>
                <h3>Current User: {this.user}</h3>
                <button onClick={this.changeUser.bind(this)}>Login as Admin</button>
            </>
        );
    }
}

export default WithoutStateInClassComp;


// Understanding the Constructor

//     Constructor Function:
//         The constructor is a special method in a JavaScript class. It is called when a new instance of the class is created.
//         In React, the constructor is typically used in class components to initialize state and bind methods.

//     Props Parameter:
//         props is short for properties. It is an object that holds the values passed from a parent component to the child component.
//         These values can be accessed using this.props inside the class component.

//     Calling super(props):
//         super(props) calls the constructor of the parent class, which in this case is React.Component.
//         This is necessary because React.Component's constructor initializes important parts of the component (such as this.props).
//         If you do not call super(props), this.props will be undefined in the constructor.

//     this.user = "Guest";:
//         This line sets an instance property called user on the component instance.
//         Unlike state, which is managed by React and can change over time, this is just a regular class property.
//         In this case, user is being initialized to the string "Guest".
