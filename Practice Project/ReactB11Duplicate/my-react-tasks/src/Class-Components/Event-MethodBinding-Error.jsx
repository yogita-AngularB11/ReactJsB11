import React, { Component } from 'react'

export default class EventMethodBindingError extends Component {
  constructor() {
    super()
    this.state = {
      msg: ''
    }
  }
  handleLoginClick() {
    // alert("you are logged in...")
    this.setState({
      msg: 'Welcome to Account'
    })
  }
  render() {
    return (
      <div className='container-fluid'>
        <button  className='mt-3' onClick={this.handleLoginClick}>Login</button>
        <p>{this.state.msg}</p>
      </div>
    )
  }
}
