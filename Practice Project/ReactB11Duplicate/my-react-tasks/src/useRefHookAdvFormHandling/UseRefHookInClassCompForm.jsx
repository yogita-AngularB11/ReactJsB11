import React, { Component } from 'react';

export default class UseRefHookInClassCompForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: '',
            email: ''
        };

        this.nameRef = React.createRef();
    }

    componentDidMount() {
        this.nameRef.current.focus();
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Name : ${name} Value : ${value}`);

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission

        // Access values from state
        const { userName, password, email } = this.state;
        alert(`userName: ${userName} Password: ${password} Email: ${email}`);
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        User Name: <input
                            type='text'
                            name='userName'
                            value={this.state.userName}
                            onChange={this.handleChange}
                            ref={this.nameRef}
                        />
                    </div><br />

                    <div>
                        Password: <input
                            type='password'
                            name='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        Email: <input
                            type='email'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type='submit'>SUBMIT</button>
                </form>
            </>
        );
    }
}
