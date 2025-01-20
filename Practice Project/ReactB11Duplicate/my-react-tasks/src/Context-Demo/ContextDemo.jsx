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
// this value of parent I want to share it to child.
// the state i created for parent I want to use for child
// is it possible to access the state of a component by its child component? Child component running inside parents memory? 
// not possible.state is for the component that you configured.it will work only for that component.
// it is not accessible even to Child component running inside parents memory

    function handleNameChange(e) {
        setMsg(e.target.value)
    }
    return (
        <div className='container-fluid bg-dark text-white p-4'>
            {/* scope of context is parent that means in parent can access level 1  child component */}
            <UserContext.Provider value={msg}>
                <h1>Parent Component <input type=" " onChange={handleNameChange} /></h1>
                {/* we want child component to use inside parent */}
                <ChildComponent1 />
            </UserContext.Provider>

        </div>
    )
}

export default ContextDemo
