import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class FormAdvanced extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                userName: '',
                color: '#000000',
                language: 'ReactJs',
                upload: null // Initialize upload as null
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        const { name, value, type } = e.target;
        const val = type === 'file' ? e.target.files[0] : value; // Handle file uploads
        console.log(`Name: ${name} Value: ${val}`);
        this.setState((prevState) => ({
            form: {
                ...prevState.form,
                [name]: val
            }
        }));
    }

    handleSubmit(e) {
        e.preventDefault();
        // Save data to DB or send to some third-party API
        console.log('Inside submit button');
        console.log(this.state.form);
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit} className="form-group">
                    <div>
                        Enter Your Name:
                        <input
                            type='text'
                            name='userName'
                            value={this.state.form.userName} // Access userName from form object
                            onChange={this.handleChange}
                        />
                    </div>
                    <br />

                    <div>
                        Choose Color:
                        <input
                            type='color'
                            name='color'
                            value={this.state.form.color} // Access color from form object
                            onChange={this.handleChange}
                        />
                    </div>
                    <br />

                    <div>
                        Select Language:
                        <select name="language" value={this.state.form.language} // Access language from form object
                            onChange={this.handleChange} >
                            <option value="ReactJs">ReactJs</option>
                            <option value="VueJs">VueJs</option>
                            <option value="NodeJs">NodeJs</option>
                        </select>
                    </div>
                    <br />

                    <div>
                        Resume Upload:
                        <input
                            type='file'
                            name='upload'
                            onChange={this.handleChange}
                        />
                    </div>

                    <button type='submit'>SUBMIT</button>
                </form>
            </>
        );
    }
}
