import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    let params=useParams();
  return (
    <div className='container-fluid'>
      <h2>Details</h2>
      <dl>
        <dt>Product Id</dt>
        <dd>{params.id}</dd>
        <dt>Product Name</dt>
        <dd>{params.name}</dd>
        <dt>Product Price</dt>
        <dd>{params.price}</dd>
      </dl>
    </div>
  )
}

export default Details
