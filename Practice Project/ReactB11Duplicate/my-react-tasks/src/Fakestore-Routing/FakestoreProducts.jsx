import React, { useEffect } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

const FakestoreProducts = () => {
  let params = useParams();

  const [products, setProducts] = useState([{ id: 0, title: '', image: '', description: '', category: '', rating: { rate: 0, count: 0 } }])

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
      .then(response => {
        setProducts(response.data)
      })
  })

  return (
    <div>
      <h3>Products</h3>
      <div className='row'>
        <div className="col-4">
          <div className='d-flex flex-wrap'>
            {
              products.map(product =>
                <div key={product.id} className='card p-2 m-2' style={{ width: '100px' }}>
                  <img src={product.image} className='card-img-top' height="120px" alt="" />
                  <div className='card-header'>
                    {/* <Link   to={`/details/${product.id}`} className='btn btn-warning' >View</Link> */}
                    {/* now details is child route so make it relative by removing '/' */}
                    <Link to={`details/${product.id}`} className='btn btn-warning' >View</Link>
                  </div>
                </div>
              )
            }
          </div>
        </div>
        <div className="col-8">
          <Outlet />
          {/* React can support multiple outlets Angular cannot */}
          {/* <Outlet/> */}
        </div>

      </div>
      <Link to='/'>Back to home</Link>
    </div>
  )
}

export default FakestoreProducts
