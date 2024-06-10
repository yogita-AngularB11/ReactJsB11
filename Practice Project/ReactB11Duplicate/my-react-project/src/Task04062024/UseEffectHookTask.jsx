import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import './styles.css'; // Make sure to create and import your CSS file

const UseEffectHookTask = () => {
    const [users, setUsers] = useState([]);

    //1. useEffect hook with empty dependency array - called on every render
    useEffect(() => {
        console.log('Inside useEffect hook with empty Dependency Array');
        fetchUserDetails();
    }, []); // Empty dependency array ensures this runs once when the component mounts

    const fetchUserDetails = async () => {
        const userData = await axios.get('https://fakestoreapi.com/users');
        console.log(userData);
        setUsers(userData.data);
    };

    return (
        <>
            {console.log('Inside return')}
            <h3>Functional Compo UseEffect Hook</h3>
            <h2>API Integration Using Axios</h2>
            <div className="table-container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">USERNAME</th>
                            <th scope="col">PASSWORD</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default UseEffectHookTask;
