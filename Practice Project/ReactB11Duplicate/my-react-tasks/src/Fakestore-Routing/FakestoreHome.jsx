import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const FakestoreHome = () => {
  const [categories, setCategories] = useState([])

  const [cookies, setCookies, removeCookie] = useCookies(['userid']);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/categories/`)
      .then(response => {
        setCategories(response.data);
      })
  }, [])

  function handleSignout() {
    removeCookie('userid')
    navigate('/login')
  }
  return (
    <div>
      {/* To display who logged in,we collect the data from cookie */}
      <h2 className='d-flex justify-content-between'>
        <span> FakeStore Home</span> <span className='text-primary'>{cookies['userid']}</span>
      </h2>

      <ul className='list-unstyled '>
        {
          categories.map(category =>
            <li key={category} >
              <Link to={`/products/${category}`} className='text-decoration-none btn btn-dark w-25 my-2' >
                {category.toUpperCase()}
              </Link>
            </li>)
        }

        {/* conditional rendering : if cookie is already their then user is already logged-in then it should display logout button */}
        {
          (cookies['userid']) ?
            <button onClick={handleSignout} className='btn btn-danger w-25'>Signout</button> :
            <li><Link to='/login' className='btn btn-warning w-25 text-decoration-none my-2'>USER LOGIN</Link></li>
        }
      </ul>

    </div>

  )
}

export default FakestoreHome
