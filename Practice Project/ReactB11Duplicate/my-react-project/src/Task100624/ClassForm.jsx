import React, { Component } from 'react'

export default class ClassForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        // Bind the context of `this` to the event handler methods
        this.handleUsername = this.handleUsername.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUsername = (event) => {
        console.log('onUsernameChange');
        this.setState({ username: event.target.value });
    }
    handleEmail = (event) => {
        console.log('onEmailChange');
        this.setState({ email: event.target.value });
    }
    handlePassword = (event) => {
        console.log('onPasswordChange');
        this.setState({ password: event.target.value });
    }
    handleSubmit = (event) => {
      
        console.log('onSubmit');
        console.log(`Submitted:Username : ${this.state.username}  Email : ${this.state.email} password: ${this.state.password} `);
        event.preventDefault()
    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} >
                   Username: <input type='text' value={this.state.username} onChange={this.handleUsername} />
                    <br/> <br/>
                   Email Id: <input type="email" value={this.state.email} onChange={this.handleEmail} />
                    <br/> <br/>
                   Password: <input type="password" value={this.state.password} onChange={this.handlePassword} />
                    <br/> <br/>
                    <input type="Submit"/>
                </form>
            </>
        )
    }
}
