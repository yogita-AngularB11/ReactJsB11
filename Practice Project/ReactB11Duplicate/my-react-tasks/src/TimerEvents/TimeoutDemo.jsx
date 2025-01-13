import React, { useState } from 'react'

const TimeoutDemo = () => {
    const [msg, setMsg] = useState('')
    
    function Msg1() {
        setMsg("Hello")
    }
    function Msg2() {
        setMsg("How are you")
    }
    function Msg3() {
        setMsg("welcome to React")
    }

    // function handleClick() {
    //     Msg1();
    //     Msg2();
    //     Msg3();
    // }
    function handleClick() {
        setTimeout( Msg1,3000);
        setTimeout( Msg2,5000);
        setTimeout( Msg3,7000);
    }
    return (
        <div className='container-fluid'>
            <button className='btn btn-warning mt-2' onClick={handleClick}>Display message</button>
            <p className='fs-4 text-center'>{msg}</p>
        </div>
    )
}

export default TimeoutDemo
