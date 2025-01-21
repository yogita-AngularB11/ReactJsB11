import React from 'react'
import Navbar from './navbar'
import UserControl from './user-control'
import { DataGrid } from './data-grid'

const ControlledDemo = () => {
  return (
    // <div className='container-fluid'>
    //   <h1>Controlled Demo</h1>
    //   <Navbar title="Shopper" menuItems={['Home', 'shop', 'docs']} logo
    //     ='logo192.png' theme=" bg-dark text-white" />
    //   <Navbar title="NareshIt" menuItems={['Home', 'Courses', 'New Batches', 'Contacts']} logo="logo512.png" theme="bg-danger text-white" />


    //   <h2>User Control</h2>
    //   <div className='w-25'>
    //     <UserControl label="Departure" type="date" />
    //     <UserControl label="Color Picker" type="color" />
    //     <UserControl label="Upload photo" type="file" />
    //   </div>
    // </div>


    <div className='container-fluid'>
      <h2>Controlled Component Demo </h2>
      <DataGrid  field={['Name','Price','Stock ']}/>

    </div>
  )
}

export default ControlledDemo
