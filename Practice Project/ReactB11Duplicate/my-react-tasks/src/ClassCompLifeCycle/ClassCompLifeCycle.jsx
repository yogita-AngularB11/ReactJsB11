import React, { Component } from 'react'

export default class ClassCompLifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'welcome to react'
        }
        console.log('class component constructor called');
    }
     updateMessage=()=>{
        console.log('Inside Update Meassage Method');
        this.setState({message:'welcome to class comp life cycle'})

    }
    render() {
        console.log('class component  render method called');
        return (
            <div>
                <h1>Class Component Life Cycle Method</h1>
                <p>State Message:{this.state.message}</p>
                <button className="btn btn-success" onClick={this.updateMessage}>Update Stage</button>
            </div>
        )
    }
    componentDidMount() {
        console.log('component didMount called');
    }
    componentDidUpdate(){
        console.log('component didUpdateCalled');
    }
}
