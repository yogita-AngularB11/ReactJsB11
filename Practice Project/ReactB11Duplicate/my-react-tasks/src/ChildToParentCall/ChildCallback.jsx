import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

export default class ChildCallback extends Component {

    constructor(){
        super();

        this.state={
            Message : 'Message from Child Component'
        }
    }

    sendMessage = () =>{
        console.log('Inside sendMessage  calling parent comp function')
            this.props.sendDataToParentComp(this.state.Message);
    }

  render() {
    return (
      <>
            <h2>Child Callback</h2>

            <Button variant="light" onClick={this.sendMessage} >Send Data TO Parent</Button>
      </>
    )
  }
}
