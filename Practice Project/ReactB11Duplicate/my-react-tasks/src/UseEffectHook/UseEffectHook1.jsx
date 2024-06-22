import React, { useEffect, useState } from "react";


const UseEffectHook1 = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Inside useEffect which is called automatically after every re-render or return");
    })
    const updateCount=()=>{
        console.log("Inside Update Count");
        setCount(count+1);
    }
    return (
        <>
            <h1>useEffect in Functional Component</h1>
            {console.log("Inside return")}
            <h2>Current Count:{count}</h2>
            <button onClick={updateCount}>Click Me</button>

        </>
    )
}
export default UseEffectHook1;