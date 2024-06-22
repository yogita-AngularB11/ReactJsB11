import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import './styles.css'; // Make sure to create and import your CSS file

const UseEffectHookTask2 = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("Yogita")

    //1. useEffect hook with empty dependency array 
    useEffect(() => {
        console.log('Inside useEffect hook with empty Dependency Array');
        fetchUserDetails();
    }, [name]);

    const fetchUserDetails = async () => {
        const userData = await axios.get('https://fakestoreapi.com/users');
        console.log(userData);
        setUsers(userData.data);
    };
    const changeName = () => {
        console.log('Inside Change Name')
        setName('Priyanka')
    }
    return (
        <>
            {console.log('Inside return')}
            <h3>Functional Compo UseEffect Hook</h3>
            <h4> Count : {count} </h4> <Button variant="info" onClick={incrementCount}>Increment Count</Button>

            <h4>Name : {name}</h4> <Button variant="success" onClick={changeName}>Change Name</Button>
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

export default UseEffectHookTask2;
