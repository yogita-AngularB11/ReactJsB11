import React, { Component } from "react";

class StateInClassComp extends Component {
    constructor(props) {
        super(props);
        this.user = "Guest";
        this.state={
            userName:"Guest"
        }
        this.changeUserName = this.changeUserName.bind(this);
    }

    changeUserName(){
        console.log("Inside New Change Username function");
        this.setState({userName:"Admin"},()=>{
            console.log(this.state.userName);
        })
        
    }

    render() {
        return (
            <>
                <h1>State In Class Component</h1>
                <h3>Current User: {this.state.userName}</h3>
                <button onClick={this.changeUserName}>Login as Admin</button>

                <h1>State In Class Component</h1>
                <h3>Current User: {this.state.userName}</h3>
                <button onClick={this.changeUserName}>Login as Admin</button>
            </>
        );
    }
}

export default StateInClassComp;
