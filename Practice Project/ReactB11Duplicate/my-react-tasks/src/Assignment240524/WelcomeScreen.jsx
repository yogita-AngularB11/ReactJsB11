import React from "react";
import MyLogin from "./MyLogin";
import MySignUp from "./MySignUp";

const WelcomeScreen = () => {
    const isRegisteredUser = true;
    // const isRegisteredUser=false;

    if (isRegisteredUser) {
        return <MyLogin />
    }
    else {
        return <MySignUp />
    }
}
export default WelcomeScreen;