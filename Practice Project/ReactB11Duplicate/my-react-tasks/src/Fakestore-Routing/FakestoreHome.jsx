import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const FakestoreHome = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/categories/`)
      .then(response => {
        setCategories(response.data);
      })
  }, [])
  return (
    <div>
      <h2>FakeStore Home</h2>

      <ul className='list-unstyled '>
        { 
          categories.map(category =>
            <li key={category} >
              <Link to={`/products/${category}`} className='text-decoration-none btn btn-dark w-25 my-2' >{category.toUpperCase()}</Link>
            </li>)
        }
        <li><Link to='/login' className='btn btn-warning w-25 text-decoration-none my-2 '>USER LOGIN</Link></li>
      </ul>

    </div>

  )
}

export default FakestoreHome
