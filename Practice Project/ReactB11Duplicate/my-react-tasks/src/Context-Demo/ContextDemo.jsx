import React, { createContext, useContext } from 'react'
import { useState } from 'react'

let UserContext = createContext(null)

export const ChildComponent1 = () => {
    let context = useContext(UserContext);
    return (
        <div className='m-4 p-4 bg-danger text-white'>
            <h2>Child Component level-1</h2>
            <p>{context}</p>
            <ChildComponent2 />
        </div>
    )
}

export const ChildComponent2 = () => {

    let context = useContext(UserContext);

    return (
        <div className='m-4 p-4 bg-warning text-dark'>
            <h2>Child Component level-2</h2>
            <p>{context}</p>
        </div>
    )
}


const ContextDemo = () => {
    const [msg, setMsg] = useState('Yogita')
    function handleNameChange(e) {
        setMsg(e.target.value)
    }
    return (
        <div className='container-fluid bg-dark text-white p-4'>
            {/* scope of context is parent that means in parent can access level 1  child component */}
            <UserContext.Provider value={msg}>
                <h1>Parent Component <input type=" " onChange={handleNameChange} /></h1>
                <ChildComponent1 />
            </UserContext.Provider>

        </div>
    )
}

export default ContextDemo
