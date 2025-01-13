import React from 'react'
import { Link } from 'react-router-dom'
const FakestoreLogin = () => {
    return (
        <div>
            <form className="w-25">
            <h3>User Login</h3>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" className='form-control'/></dd>
                <dt>Password</dt>
                <dd><input type="password" className='form-control'/></dd>
            </dl>
            <button type="submit"className='btn btn-warning w-100'>Login</button>
            </form>
            <div>
                <Link to="/">Home</Link>
            </div>
        </div>
    )
}

export default FakestoreLogin
