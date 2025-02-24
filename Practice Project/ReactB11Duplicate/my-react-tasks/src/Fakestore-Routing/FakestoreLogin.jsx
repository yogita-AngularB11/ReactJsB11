import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useFormik } from 'formik'

const FakestoreLogin = () => {
    const [cookies, setCookies, removeCookie] = useCookies(['userid']);
    let navigate = useNavigate();


    const formik = useFormik({
        initialValues: {
            UserId: '',
            Password: ''
        },
        onSubmit: (user) => {
            setCookies('userid', user.UserId)
            navigate("/")
        }
    })
    return (
        <div>
            <form className="w-25" onSubmit={formik.handleSubmit}>
                <h3>User Login</h3>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text"  name="UserId" onChange={formik.handleChange} className='form-control' /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="Password"  onChange={formik.handleChange} className='form-control' /></dd>
                </dl>
                <button type="submit" className='btn btn-warning w-100'>Login</button>
            </form>
            <div>
                <Link to="/">Home</Link>
            </div>
        </div>
    )
}

export default FakestoreLogin
