import React, { Component } from 'react';


export default class ClassFormUncontrolled extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            color: '#000000',
            language: 'ReactJs',
            upload :''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        console.log(`Name: ${name} Value: ${value}`);
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        // Save data to DB or send to some third-party API
        console.log('Inside submit button');
        console.log(this.state);
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
                            value={this.state.userName}
                            onChange={this.handleChange}
                        />
                    </div>
                    <br />

                    <div>
                        Choose Color:
                        <input
                            type='color'
                            name='color'
                            value={this.state.color}
                            onChange={this.handleChange}
                        />
                    </div>
                    <br />

                    <div>
                        Select Language:
                        <select name="language" value={this.state.language}
                            onChange={this.handleChange} >
                            <option value="ReactJs">ReactJs</option>
                            <option value="VueJs">VueJs</option>
                            <option value="NodeJs">NodeJs</option>
                        </select>
                    </div>
                    <br />

                    <div>
                        Resume Upload :
                        <input
                            type='file'
                            name='upload'
                            value={this.state.upload}
                            onChange={this.handleChange}
                        />
                    </div>

                    <button type='submit'>SUBMIT</button>
                </form>
            </>
        );
    }
}
