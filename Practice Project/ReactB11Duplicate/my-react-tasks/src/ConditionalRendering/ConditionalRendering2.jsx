import React from "react";
const ConditionalRendering2 = () => {
    let result;
    const isLoggedIn = false;
    if (isLoggedIn) {
        result = <h1>Welcome to Conditional Rendering</h1>
    }
    else {
        result = <h1>Welcome as Guest</h1>
    }
    return result;
}
export default ConditionalRendering2;