import React from 'react'

const UserControl = (props) => {
  return (
    <div>
      <label className='form-label fw-bold'>{props.label}</label>

      <div>
        <input type={props.type} className='form-control'/>
      </div>
    </div>
  )
}

export default UserControl
