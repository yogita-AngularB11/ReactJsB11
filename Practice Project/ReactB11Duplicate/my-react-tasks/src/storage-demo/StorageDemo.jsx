import React, { useEffect, useState } from 'react';

const StorageDemo = () => {
    // State to store the user's ID
    const [user, setUser] = useState('');
    const [savedUser, setSavedUser] = useState('');

    function handleIdChange(e) {
        setUser(e.target.value);
    }

    function removeSession() {
        alert('Your session has expired.');
        sessionStorage.removeItem('userid');
        setSavedUser(''); // Clear the local saved user state
    }

    function handleLogin() {
        if (user.trim() === '') {
            alert('Please enter a User ID before logging in.');
            return;
        }
        sessionStorage.setItem('userid', user);
        setSavedUser(user); // Update the local state to reflect the saved user
        alert('Your ID has been saved!');
        setTimeout(removeSession, 10000); // Session expiration after 10 seconds
    }

    useEffect(() => {
        // Initialize savedUser from sessionStorage on component mount
        const savedUserId = sessionStorage.getItem('userid');
        if (savedUserId) {
            setSavedUser(savedUserId);
        }
    }, []);

    return (
        <div className='container-fluid'>
            <h2>Storage Demo</h2>
            <input
                type="text"
                placeholder='UserId'
                value={user}
                onChange={handleIdChange}
            />
            <button onClick={handleLogin}>Login</button>
            {savedUser && (
                <p className='fw-bold mt-2'>{savedUser} Logged In...</p>
            )}
        </div>
    );
};

export default StorageDemo;
