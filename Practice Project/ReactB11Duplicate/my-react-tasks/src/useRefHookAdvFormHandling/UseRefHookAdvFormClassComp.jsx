import React, { Component } from 'react';

export default class UseRefHookAdvFormClassComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                userName: '',
                password: '',
                email: ''
            }
        };

        this.nameRef = React.createRef();
    }

    componentDidMount() {
        this.nameRef.current.focus();
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Name : ${name} Value : ${value}`);

        this.setState(prevState => ({
            form: {
                ...prevState.form,
                [name]: value
            }
        }));
    }

    handleSubmit = (e) => {
        e.preventDefault(); // Prevent form submission

        // Access values from state
        const { userName, password, email } = this.state.form;
        alert(`userName: ${userName} Password: ${password} Email: ${email}`);
    }

    render() {
        const { userName, password, email } = this.state.form;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        User Name: <input
                            type='text'
                            name='userName'
                            value={userName}
                            onChange={this.handleChange}
                            ref={this.nameRef}
                        />
                    </div><br />

                    <div>
                        Password: <input
                            type='password'
                            name='password'
                            value={password}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        Email: <input
                            type='email'
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type='submit'>SUBMIT</button>
                </form>
            </div>
        );
    }
}
