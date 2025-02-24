import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const FakestoreHome = () => {
  const [categories, setCategories] = useState([])

  const [cookies, setCookies, removeCookie] = useCookies(['userid']);

  const navigate=useNavigate();
  
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/categories/`)
      .then(response => {
        setCategories(response.data);
      })
  }, [])

  function handleSignout(){
    removeCookie('userid')
    navigate('/login')
  }
  return (
    <div>
      <h2 className='d-flex justify-content-between'> <span> FakeStore Home</span> <span>{cookies['userid']}</span></h2>

      <ul className='list-unstyled '>
        {
          categories.map(category =>
            <li key={category} >
              <Link to={`/products/${category}`} className='text-decoration-none btn btn-dark w-25 my-2' >
                {category.toUpperCase()}
              </Link>
            </li>)
        }
        {
          (cookies['userid'])?<button onClick={handleSignout} className='btn btn-danger w-25'>Signout</button>:<li><Link to='/login' className='btn btn-warning w-25 text-decoration-none my-2 '>USER LOGIN</Link></li>
        }
      </ul>

    </div>

  )
}

export default FakestoreHome
