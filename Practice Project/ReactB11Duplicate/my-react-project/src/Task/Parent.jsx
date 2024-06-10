import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [name, setName] = useState('CurrentlyNoName');

    const changeName = (somename) => {
        console.log("Inside ChangeName Function of parent");
        setName(somename);
    };

    return (
        <>
            <h2>Parent To Child Data Parent Component</h2>
            <h2>Name given from child component: {name}</h2>
            <Child myName={changeName} />
        </>
    );
};

export default Parent;
