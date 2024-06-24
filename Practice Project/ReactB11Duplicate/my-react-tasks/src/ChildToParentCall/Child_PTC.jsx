import React, { Component } from 'react'

 class Child_PTC extends Component {
  render() {
    return (
      <>
        <h1>Parent to Child Child Component</h1>
        <p>Message from Parent component : {this.props.data} </p>
      </>
    )
  }
}

export default Child_PTC;