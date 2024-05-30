import React from "react";


const MySignUp = () => {
    return (
        <>
        <form action="">
                <div className="container">
                    <h2 >Sign Up</h2>
                    <p>Create an account.</p>
                    <hr />

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required />

                    <label htmlFor="pass"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="pass" required />

                    <label htmlFor="psw-repeat"><b>Confirm Password</b></label>
                    <input type="password" placeholder="Confirm Password" name="psw-repeat" required />

                    <label>
                        <input type="checkbox" checked="checked" name="remember" style={{ marginBottom: "15px" }} /> Remember me
                    </label>

                    <p>By creating an account you agree to our <a href="#" style={{ color: "dodgerblue" }}>Terms & Privacy</a>.</p>

                    <div className="clearfix">
                        
                        <button type="submit" className="signupbtn">Sign Up</button>
                    </div>
                </div>
            </form>
        </>
    )}
    export default MySignUp;