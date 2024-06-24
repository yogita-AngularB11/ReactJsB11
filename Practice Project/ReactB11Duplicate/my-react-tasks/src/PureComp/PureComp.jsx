import React, { PureComponent } from 'react'
import Button from 'react-bootstrap/Button';

 class PureComp extends PureComponent {
  

    constructor(){
        super();

        this.state ={
            count : 0
        }
    }

    incrementCount = () =>{
        console.log('Inside increment count')
        this.setState({count:this.state.count+1})
    }

  render() {
    console.log('Inside render')
    return (
      <>
            <h1>Pure Component</h1>

            <p> Count : {this.state.count} </p>
            <Button variant="primary" onClick={this.incrementCount} >Increment Count</Button>
      </>
    )
  }
}

export default PureComp;
