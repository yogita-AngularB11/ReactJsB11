import React, { Component } from 'react'

export default class StateInClass extends Component {
    constructor(){
        super();
        this.state = {
            UserName: ""
        };
        this.setState({
            UserName:"Yogita"
        });
    }
  render() {
    return (
      <div>
        <div className='container-fluid'>
                <p>Hello...! {this.state.UserName}</p>
                <p className='text-danger fw-bold '>Console Warning: Can't call setState on a component that is not yet mounted.
                </p>
            </div>
      </div>
    )
  }
}
