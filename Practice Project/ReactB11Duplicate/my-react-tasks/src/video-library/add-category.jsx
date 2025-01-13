import React from 'react'

const AddCategory = () => {
  return (
    <div className='container-fluid'>
      <form action="">
        <h3>Add Category</h3>
        <dl>
        <dt>Category Id</dt>
        <dd><input type='number' name='CategoryId'/></dd>
        <dt>Category Name</dt>
        <dd><input type='text' name='CategoryName'/></dd>
        </dl>
        <button className='btn btn-primary'>Add Category</button>
      </form>
    </div>
  )
}

export default AddCategory
