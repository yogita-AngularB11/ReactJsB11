import React, { useState } from 'react';

const AdvanceFormHandling = () => {
    const [form, setForm] = useState({
        userName: '',
        password: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Name: ${name} Value: ${value}`);

        setForm((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save data to DB or send to some third-party API
        console.log('Inside submit button');
        console.log(form);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    User Name: <input type='text' name='userName' value={form.userName} onChange={handleChange} />
                </div> 
                <br/>

                <div>
                    Password: <input type='password' name='password' value={form.password} onChange={handleChange} />
                </div>
                <br/>

                <div>
                    Email: <input type='email' name='email' value={form.email} onChange={handleChange} />
                </div>
                <br/>

                <button type='submit'>SUBMIT</button>
            </form>
        </>
    );
};

export default AdvanceFormHandling;
