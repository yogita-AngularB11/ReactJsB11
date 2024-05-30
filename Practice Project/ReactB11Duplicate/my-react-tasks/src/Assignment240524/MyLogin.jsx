import React from "react";


const MyLogin = () => {
    return (
        <>
        <h2>Login Form</h2>
            <form>
                <div class="container">
                <label htmlFor="username">Username</label>
                <input type="text" name="uname"  placeholder="Enter Username" id="" required/>
                <label htmlFor="password">Password</label>
                <input type="password" name="pass" placeholder="Enter Password"  id="" required />
                
                <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label>
                    <span> <a href="#">Forgot password?</a></span>
                    </div>
            </form>
        </>
    )
}
export default MyLogin;