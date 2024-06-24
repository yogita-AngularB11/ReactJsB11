import React, { Component } from 'react'
import ChildCallback from './ChildCallback';

export default class ParentCallback extends Component {

    constructor(){
        super();

        this.state={
            ChildTOParentData : 'Temporary Data'
        }
    }

    handleDataFromChild = (message) =>{
        console.log('Function called from Child comp')
        this.setState({ChildTOParentData : message})
    }

  render() {
    return (
      <>
            <h2>Child to Parent Parent comp</h2>
            <h4> Message : {this.state.ChildTOParentData}</h4>
            <ChildCallback sendDataToParentComp={ this.handleDataFromChild } />
      </>
    )
  }
}
