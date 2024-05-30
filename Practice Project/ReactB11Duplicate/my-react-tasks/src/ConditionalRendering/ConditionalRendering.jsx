import React from 'react';

const ConditionalRendering=()=>{
    const isLoggedIn=false;
    if (isLoggedIn) {
        return <h1>Welcome to Conditional Rendering</h1>
    }
    else{
        return <h1>Welcome as Guest</h1>
    }

}
export default ConditionalRendering;