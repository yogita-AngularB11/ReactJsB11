import React from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddCategory = () => {
  let navigate=useNavigate();
  const formik=useFormik({
    initialValues:{
      categoryId:0,
      categoryName:''
    },

    onSubmit:(category)=>{
      //you can also use jQuery Ajax post method
      axios.post('http://127.0.0.1:4000/add-category',category)
      .then(()=>{
        alert('Category Added Successfully...')
        navigate('/')
      })
    }
  })
  return (
    <div className='container-fluid'>
      <form onSubmit={formik.handleSubmit}> 
        <h3>Add Category</h3>
        <dl>
        <dt>Category Id</dt>
        <dd><input type='number' name='CategoryId' onChange={formik.handleChange}/></dd>
        <dt>Category Name</dt>
        <dd><input type='text' name='CategoryName' onChange={formik.handleChange}/></dd>
        </dl>
        <button className='btn btn-primary'>Add Category</button>
      </form>
    </div>
  )
}

export default AddCategory
