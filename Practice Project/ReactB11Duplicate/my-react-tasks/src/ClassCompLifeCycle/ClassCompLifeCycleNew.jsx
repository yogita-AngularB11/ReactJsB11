import { Button } from 'bootstrap';
import React, { Component } from 'react'

 class ClassCompLifeCycle extends Component {
    // 1.Initialization phase
    constructor(props){
        super(props);
        console.log('Inside constructor')

        this.state={
            name : 'CodeMind'
        }
    }

    // 2.Mounting phase

    static getDerivedStateFromProps(props){

        console.log('inside getDerivedStateFromProps');

    }

    render() {
        console.log('Inside render method')
        return (
          <>
            <h3> Inside Class Comp render method</h3>

            <h4>Name is : {this.state.name}   <button  onClick={this.updateName} >Update Name</button> </h4>

           
          </>
        )
      }

      componentDidMount(){
        console.log('Inside componentDidMount method')
      }

      //3. Updating phase
      //1.getDerivedStateFromProps
      //2. shouldComponentUpdate
      //3. render
      //4. getSnapshotBeforeUpdate
      //5. componentDidUpdate

      shouldComponentUpdate(){

        console.log('Inside shouldComponentUpdate')
        return true;
      }

      getSnapshotBeforeUpdate(){
        console.log('Inside getSnapshotBeforeUpdate')
        return null
      }

      componentDidUpdate(){
        console.log('Inside componentDidUpdate')
      }

      updateName=()=>{
        this.setState({name : 'CodeMind Technology'})
      }
}

export default ClassCompLifeCycle