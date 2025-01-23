import React, { Component } from 'react'

export default class SetStateAtMount extends Component {
    constructor(){
        super()
        this.state={
            UserName:"",
            Price:0,
            Stock:false
        }
    }
    componentDidMount(){
        this.setState({
            UserName:"Yogita",
            Price:99,
            Stock:true
        })
    }
  render() {
    return (
      <div className='container-fluid'>
        <h2>Welcome...! {this.state.UserName}</h2>
        <p>Price:{this.state.Price}</p>
        <p>Stock:{(this.state.Stock===true)?"Available":"out of stock"}</p>
      </div>
    )
  }
}
