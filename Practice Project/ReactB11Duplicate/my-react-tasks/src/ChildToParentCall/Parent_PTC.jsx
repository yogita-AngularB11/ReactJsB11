import React, { Component } from 'react'
import Child_PTC from './Child_PTC';

 class Parent_PTC extends Component {

    constructor(){
        super();

        this.state = {
            message : 'Parent to Child Data'
        }
    }

  render() {
    return (

      <>    
            <h1>Parent To Child Data Parent Component</h1>
            <Child_PTC data = {this.state.message} />
      </>
    )
  }
}

export default Parent_PTC;